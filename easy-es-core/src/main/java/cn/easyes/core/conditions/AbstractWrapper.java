package cn.easyes.core.conditions;

import cn.easyes.common.enums.AggregationTypeEnum;
import cn.easyes.common.enums.EsQueryTypeEnum;
import cn.easyes.common.enums.OrderTypeEnum;
import cn.easyes.common.utils.*;
import cn.easyes.core.Param;
import cn.easyes.core.biz.AggregationParam;
import cn.easyes.core.biz.BaseSortParam;
import cn.easyes.core.biz.OrderByParam;
import cn.easyes.core.conditions.interfaces.*;
import org.apache.lucene.search.join.ScoreMode;
import org.elasticsearch.common.geo.GeoDistance;
import org.elasticsearch.common.geo.GeoPoint;
import org.elasticsearch.common.geo.ShapeRelation;
import org.elasticsearch.common.unit.DistanceUnit;
import org.elasticsearch.geometry.Geometry;
import org.elasticsearch.index.query.Operator;
import org.elasticsearch.search.sort.SortBuilder;
import org.elasticsearch.search.sort.SortOrder;

import java.util.*;
import java.util.function.BiPredicate;
import java.util.function.Consumer;

import static cn.easyes.common.constants.BaseEsConstants.WILDCARD_SIGN;
import static cn.easyes.common.enums.EsQueryTypeEnum.*;
import static cn.easyes.common.enums.OrderTypeEnum.CUSTOMIZE;

/**
 * 抽象Lambda表达式父类
 * <p>
 * Copyright © 2021 xpc1024 All Rights Reserved
 **/
public abstract class AbstractWrapper<T, R, Children extends AbstractWrapper<T, R, Children>> extends Wrapper<T>
        implements Compare<Children, R>, Nested<Children, Children>, Func<Children, R>, Join<Children>, Geo<Children, R> {

    protected final Children typedThis = (Children) this;

    /**
     * 存放树的高度
     */
    protected Integer level;
    /**
     * 全局父节点 每次指向nested条件后
     */
    protected String parentId;
    /**
     * 参数列表
     */
    protected List<Param> paramList;
    /**
     * 队列 存放父id
     */
    protected LinkedList<String> queue;
    /**
     * 基础排序参数列表
     */
    protected List<BaseSortParam> baseSortParams;

    /**
     * 聚合查询参数列表
     */
    protected List<AggregationParam> aggregationParamList;
    /**
     * 折叠去重字段
     */
    protected String distinctField;
    /**
     * 排序参数列表
     */
    protected List<OrderByParam> orderByParams;

    /**
     * 实体对象
     */
    protected T entity;
    /**
     * 实体类型
     */
    protected Class<T> entityClass;

    public Children setEntity(T entity) {
        this.entity = entity;
        this.initEntityClass();
        return typedThis;
    }

    public Children setEntityClass(Class<T> entityClass) {
        this.entityClass = entityClass;
        this.initEntityClass();
        return typedThis;
    }

    protected void initEntityClass() {
        if (this.entityClass == null && this.entity != null) {
            this.entityClass = (Class<T>) entity.getClass();
        }
    }

    protected Class<T> getCheckEntityClass() {
        Assert.notNull(entityClass, "entityClass must not null,please set entity before use this method!");
        return entityClass;
    }

    /**
     * 必要的初始化
     */
    protected final void initNeed() {
        baseSortParams = new ArrayList<>();
        aggregationParamList = new ArrayList<>();
        paramList = new ArrayList<>();
        level = 0;
        queue = new LinkedList<>();
    }

    @Override
    public <V> Children allEq(boolean condition, Map<String, V> params, boolean null2IsNull) {
        if (condition && CollectionUtils.isNotEmpty(params)) {
            params.forEach(this::eq);
        }
        return typedThis;
    }

    @Override
    public <V> Children allEq(boolean condition, BiPredicate<String, V> filter, Map<String, V> params, boolean null2IsNull) {
        if (condition && CollectionUtils.isNotEmpty(params)) {
            params.forEach((k, v) -> {
                if (filter.test(k, v)) {
                    if (StringUtils.checkValNotNull(v)) {
                        eq(k, v);
                    }
                }
            });
        }
        return typedThis;
    }

    @Override
    public Children eq(boolean condition, String column, Object val, Float boost) {
        return addParam(condition, TERM, column, val, boost);
    }

    @Override
    public Children and(boolean condition, Consumer<Children> consumer) {
        return addNested(condition, AND_MUST, consumer);
    }

    @Override
    public Children or(boolean condition, Consumer<Children> consumer) {
        return addNested(condition, OR_SHOULD, consumer);
    }

    @Override
    public Children or(boolean condition) {
        return addParam(condition, OR, null, null, null);
    }

    @Override
    public Children must(boolean condition, Consumer<Children> consumer) {
        return addNested(condition, AND_MUST, consumer);
    }

    @Override
    public Children should(boolean condition, Consumer<Children> consumer) {
        return addNested(condition, OR_SHOULD, consumer);
    }

    @Override
    public Children filter(boolean condition, Consumer<Children> consumer) {
        return addNested(condition, FILTER, consumer);
    }

    @Override
    public Children mustNot(boolean condition, Consumer<Children> consumer) {
        return addNested(condition, MUST_NOT, consumer);
    }

    @Override
    public Children match(boolean condition, String column, Object val, Float boost) {
        return addParam(condition, MATCH, column, val, boost);
    }

    @Override
    public Children nestedMatch(boolean condition, String path, String column, Object val, ScoreMode scoreMode, Float boost) {
        Assert.notNull(path, "nested query path must not be null");
        return addParam(condition, NESTED_MATCH, column, val, path, scoreMode, boost);
    }

    @Override
    public Children hasChild(boolean condition, String type, String column, Object val, ScoreMode scoreMode, Float boost) {
        return addParam(condition, HAS_CHILD, column, val, type, scoreMode, boost);
    }

    @Override
    public Children hasParent(boolean condition, String type, String column, Object val, boolean score, Float boost) {
        return addParam(condition, HAS_PARENT, column, val, type, score, boost);
    }

    @Override
    public Children parentId(boolean condition, Object parentId, String type, Float boost) {
        Assert.notNull(parentId, "parentId could not be null");
        return addParam(condition, PARENT_ID, type, parentId, boost);
    }

    @Override
    public Children matchPhrase(boolean condition, String column, Object val, Float boost) {
        return addParam(condition, MATCH_PHRASE, column, val, boost);
    }

    @Override
    public Children matchAllQuery(boolean condition, Float boost) {
        return addParam(condition, MATCH_ALL, null, null, boost);
    }

    @Override
    public Children matchPhrasePrefixQuery(boolean condition, String column, Object val, int maxExpansions, Float boost) {
        return addParam(condition, MATCH_PHRASE_PREFIX, column, val, maxExpansions, null, boost);
    }

    @SafeVarargs
    @Override
    public final Children multiMatchQuery(boolean condition, Object val, Operator operator, int minimumShouldMatch, Float boost, String... columns) {
        return addParam(condition, val, operator, minimumShouldMatch, boost, columns);
    }

    @Override
    public Children queryStringQuery(boolean condition, String queryString, Float boost) {
        return addParam(condition, QUERY_STRING, queryString, null, boost);
    }

    @Override
    public Children prefixQuery(boolean condition, String column, String prefix, Float boost) {
        if (StringUtils.isBlank(prefix)) {
            throw ExceptionUtils.eee("prefix can't be blank");
        }
        return addParam(condition, PREFIX, column, prefix, boost);
    }


    @Override
    public Children gt(boolean condition, String column, Object val, Float boost) {
        return addParam(condition, GT, column, val, boost);
    }

    @Override
    public Children ge(boolean condition, String column, Object val, Float boost) {
        return addParam(condition, GE, column, val, boost);
    }

    @Override
    public Children lt(boolean condition, String column, Object val, Float boost) {
        return addParam(condition, LT, column, val, boost);
    }

    @Override
    public Children le(boolean condition, String column, Object val, Float boost) {
        return addParam(condition, LE, column, val, boost);
    }

    @Override
    public Children between(boolean condition, String column, Object val1, Object val2, Float boost) {
        return addParam(condition, BETWEEN, column, null, val1, val2, boost);
    }

    @Override
    public Children like(boolean condition, String column, Object val, Float boost) {
        val = Optional.ofNullable(val)
                .map(v -> WILDCARD_SIGN + v + WILDCARD_SIGN)
                .orElse(WILDCARD_SIGN);
        return addParam(condition, WILDCARD, column, val, boost);
    }

    @Override
    public Children likeLeft(boolean condition, String column, Object val, Float boost) {
        val = Optional.ofNullable(val)
                .map(v -> WILDCARD_SIGN + v)
                .orElse(WILDCARD_SIGN);
        return addParam(condition, WILDCARD, column, val, boost);
    }

    @Override
    public Children likeRight(boolean condition, String column, Object val, Float boost) {
        val = Optional.ofNullable(val)
                .map(v -> v + WILDCARD_SIGN)
                .orElse(WILDCARD_SIGN);
        return addParam(condition, WILDCARD, column, val, boost);
    }

    @Override
    public Children in(boolean condition, String column, Collection<?> coll, Float boost) {
        if (CollectionUtils.isEmpty(coll)) {
            return typedThis;
        }
        return addParam(condition, TERMS, column, coll, boost);
    }

    @Override
    public Children exists(boolean condition, String column, Float boost) {
        return addParam(condition, EXISTS, column, null, boost);
    }

    @Override
    public Children geoBoundingBox(boolean condition, String column, GeoPoint topLeft, GeoPoint bottomRight, Float boost) {
        Assert.notNull(topLeft, "TopLeft point must not be null in geoBoundingBox query");
        Assert.notNull(bottomRight, "BottomRight point must not be null in geoBoundingBox query");
        return addParam(condition, GEO_BOUNDING_BOX, column, null, topLeft, bottomRight, boost);
    }


    @Override
    public Children geoDistance(boolean condition, String column, Double distance, DistanceUnit distanceUnit, GeoPoint centralGeoPoint, Float boost) {
        Assert.notNull(distance, "Distance must not be null in geoDistance query");
        Assert.notNull(distanceUnit, "Distance unit must not be null in geoDistance query");
        Assert.notNull(centralGeoPoint, "CentralGeoPoint must not be null in geoDistance query");
        return addParam(condition, GEO_DISTANCE, column, distance, distanceUnit, centralGeoPoint, boost);
    }

    @Override
    public Children geoDistance(boolean condition, String column, String distance, GeoPoint centralGeoPoint, Float boost) {
        Assert.notNull(distance, "Distance must not be null in geoDistance query");
        Assert.notNull(centralGeoPoint, "CentralGeoPoint must not be null in geoDistance query");
        return addParam(condition, GEO_DISTANCE, column, distance, null, centralGeoPoint, boost);
    }

    @Override
    public Children geoPolygon(boolean condition, String column, List<GeoPoint> geoPoints, Float boost) {
        Assert.notEmpty(geoPoints, "GeoPoints must not be null in geoPolygon query");
        return addParam(condition, GEO_POLYGON, column, geoPoints, boost);
    }

    @Override
    public Children geoShape(boolean condition, String column, String indexedShapeId, Float boost) {
        Assert.notNull(indexedShapeId, "IndexedShapeId must not be null in geoShape query");
        return addParam(condition, GEO_SHAPE_ID, column, indexedShapeId, boost);
    }

    @Override
    public Children geoShape(boolean condition, String column, Geometry geometry, ShapeRelation shapeRelation, Float boost) {
        Assert.notNull(geometry, "Geometry must not be null in geoShape query");
        Assert.notNull(geometry, "ShapeRelation must not be null in geoShape query");
        return addParam(condition, GEO_SHAPE, column, geometry, shapeRelation, null, boost);
    }

    @Override
    public final Children orderBy(boolean condition, boolean isAsc, String... columns) {
        if (ArrayUtils.isEmpty(columns)) {
            return typedThis;
        }

        if (condition) {
            Arrays.stream(columns)
                    .forEach(column -> {
                        BaseSortParam baseSortParam = BaseSortParam.builder()
                                .sortField(column)
                                .sortOrder(isAsc ? SortOrder.ASC : SortOrder.DESC)
                                .orderTypeEnum(OrderTypeEnum.FIELD)
                                .build();
                        baseSortParams.add(baseSortParam);
                    });
        }
        return typedThis;
    }

    @Override
    public Children orderBy(boolean condition, List<OrderByParam> orderByParams) {
        if (CollectionUtils.isNotEmpty(orderByParams)) {
            this.orderByParams = orderByParams;
        }
        return typedThis;
    }

    @Override
    public Children orderByDistanceAsc(boolean condition, String column, DistanceUnit unit, GeoDistance geoDistance, GeoPoint... geoPoints) {
        if (ArrayUtils.isNotEmpty(geoPoints)) {
            if (condition) {
                BaseSortParam baseSortParam = BaseSortParam.builder()
                        .sortField(column)
                        .sortOrder(SortOrder.ASC)
                        .orderTypeEnum(OrderTypeEnum.GEO)
                        .geoPoints(geoPoints)
                        .unit(unit)
                        .geoDistance(geoDistance)
                        .build();
                baseSortParams.add(baseSortParam);
            }
        }
        return typedThis;
    }

    @Override
    public Children orderByDistanceDesc(boolean condition, String column, DistanceUnit unit, GeoDistance geoDistance, GeoPoint... geoPoints) {
        if (ArrayUtils.isNotEmpty(geoPoints)) {
            if (condition) {
                BaseSortParam baseSortParam = BaseSortParam.builder()
                        .sortField(column)
                        .sortOrder(SortOrder.DESC)
                        .orderTypeEnum(OrderTypeEnum.GEO)
                        .geoPoints(geoPoints)
                        .unit(unit)
                        .geoDistance(geoDistance)
                        .build();
                baseSortParams.add(baseSortParam);
            }
        }
        return typedThis;
    }

    @Override
    public Children sort(boolean condition, List<SortBuilder<?>> sortBuilders) {
        if (CollectionUtils.isEmpty(sortBuilders)) {
            return typedThis;
        }
        if (condition) {
            sortBuilders.forEach(sortBuilder -> {
                BaseSortParam baseSortParam = BaseSortParam
                        .builder()
                        .orderTypeEnum(CUSTOMIZE)
                        .sortBuilder(sortBuilder)
                        .build();
                baseSortParams.add(baseSortParam);
            });
        }
        return typedThis;
    }

    @Override
    public Children sortByScore(boolean condition, SortOrder sortOrder) {
        if (condition) {
            BaseSortParam baseSortParam = BaseSortParam.builder()
                    .sortOrder(sortOrder)
                    .orderTypeEnum(OrderTypeEnum.SCORE)
                    .build();
            baseSortParams.add(baseSortParam);
        }
        return typedThis;
    }


    @Override
    public final Children groupBy(boolean condition, boolean enablePipeline, String... columns) {
        if (ArrayUtils.isEmpty(columns)) {
            return typedThis;
        }
        Arrays.stream(columns).forEach(column -> doIt(condition, enablePipeline, AggregationTypeEnum.TERMS, column));
        return typedThis;
    }

    @Override
    public Children termsAggregation(boolean condition, boolean enablePipeline, String... columns) {
        if (ArrayUtils.isEmpty(columns)) {
            return typedThis;
        }
        Arrays.stream(columns).forEach(column -> doIt(condition, enablePipeline, AggregationTypeEnum.TERMS, column));
        return typedThis;
    }

    @Override
    public Children avg(boolean condition, boolean enablePipeline, String... columns) {
        if (ArrayUtils.isEmpty(columns)) {
            return typedThis;
        }
        Arrays.stream(columns).forEach(column -> doIt(condition, enablePipeline, AggregationTypeEnum.AVG, column));
        return typedThis;
    }

    @Override
    public Children min(boolean condition, boolean enablePipeline, String... columns) {
        if (ArrayUtils.isEmpty(columns)) {
            return typedThis;
        }
        Arrays.stream(columns).forEach(column -> doIt(condition, enablePipeline, AggregationTypeEnum.MIN, column));
        return typedThis;
    }

    @Override
    public Children max(boolean condition, boolean enablePipeline, String... columns) {
        if (ArrayUtils.isEmpty(columns)) {
            return typedThis;
        }
        Arrays.stream(columns).forEach(column -> doIt(condition, enablePipeline, AggregationTypeEnum.MAX, column));
        return typedThis;
    }

    @Override
    public Children sum(boolean condition, boolean enablePipeline, String... columns) {
        if (ArrayUtils.isEmpty(columns)) {
            return typedThis;
        }
        Arrays.stream(columns).forEach(column -> doIt(condition, enablePipeline, AggregationTypeEnum.SUM, column));
        return typedThis;
    }

    @Override
    public Children distinct(boolean condition, String column) {
        if (condition) {
            this.distinctField = column;
        }
        return typedThis;
    }


    /**
     * 子类返回一个自己的新对象
     *
     * @return 泛型
     */
    protected abstract Children instance();


    /**
     * 追加基础查询参数
     *
     * @param param         被追加的新参数
     * @param queryTypeEnum 查询类型
     * @param column        列
     * @param val           值
     * @param boost         权重
     */
    private void addBaseParam(Param param, EsQueryTypeEnum queryTypeEnum, String column, Object val, Float boost) {
        param.setId(UUID.randomUUID().toString());
        Optional.ofNullable(parentId).ifPresent(param::setParentId);
        param.setQueryTypeEnum(queryTypeEnum);
        param.setVal(val);
        param.setColumn(column);
        param.setBoost(boost);
        paramList.add(param);
    }


    /**
     * 追加查询参数
     *
     * @param condition     条件
     * @param queryTypeEnum 查询类型
     * @param column        列
     * @param val           值
     * @param boost         权重
     * @return 泛型
     */
    private Children addParam(boolean condition, EsQueryTypeEnum queryTypeEnum, String column, Object val, Float boost) {
        if (condition) {
            Param param = new Param();
            addBaseParam(param, queryTypeEnum, column, val, boost);
        }
        return typedThis;
    }

    /**
     * 重载，追加拓展参数
     *
     * @param condition     条件
     * @param queryTypeEnum 查询类型
     * @param column        列
     * @param val           值
     * @param var1          拓展字段1
     * @param var2          拓展字段2
     * @param boost         权重
     * @return 泛型
     */
    private Children addParam(boolean condition, EsQueryTypeEnum queryTypeEnum, String column, Object val, Object var1, Object var2, Float boost) {
        if (condition) {
            Param param = new Param();
            param.setExt1(var1);
            param.setExt2(var2);
            addBaseParam(param, queryTypeEnum, column, val, boost);
        }
        return typedThis;
    }

    /**
     * 重载，追加拓展参数
     *
     * @param condition          条件
     * @param val                值
     * @param operator           操作符
     * @param minimumShouldMatch 最小匹配值
     * @param boost              权重
     * @param columns            列数组
     * @return 泛型
     */
    private Children addParam(boolean condition, Object val, Operator operator, int minimumShouldMatch, Float boost, String... columns) {
        if (condition) {
            Param param = new Param();
            param.setExt1(operator);
            param.setExt2(minimumShouldMatch);
            param.setColumns(columns);
            addBaseParam(param, MULTI_MATCH, null, val, boost);
        }
        return typedThis;
    }


    /**
     * 添加嵌套查询条件
     *
     * @param condition     条件
     * @param queryTypeEnum 查询类型
     * @param consumer      消费者
     * @return 泛型
     */
    private Children addNested(boolean condition, EsQueryTypeEnum queryTypeEnum, Consumer<Children> consumer) {
        if (condition) {
            Param param = new Param();
            param.setId(UUID.randomUUID().toString());
            Optional.ofNullable(parentId).ifPresent(param::setParentId);
            param.setQueryTypeEnum(queryTypeEnum);
            level++;
            paramList.add(param);
            this.parentId = param.getId();
            queue.push(parentId);
            consumer.accept(instance());
            // 深度优先在consumer条件消费完后会来执行这里 此时parentId需要重置 至于为什么 可断点打在consumer前后观察一波 整个框架最难的地方就在此
            level--;
            if (!queue.isEmpty()) {
                this.parentId = queue.pollLast();
            }
            if (level == 0) {
                // 仙人板板
                this.parentId = null;
            }
        }
        return typedThis;
    }


    /**
     * 封装查询参数 聚合类
     *
     * @param condition           条件
     * @param enablePipeline      是否管道聚合
     * @param aggregationTypeEnum 聚合类型
     * @param column              列
     * @return 泛型
     */
    private Children doIt(boolean condition, boolean enablePipeline, AggregationTypeEnum aggregationTypeEnum, String column) {
        if (condition) {
            AggregationParam aggregationParam = new AggregationParam();
            aggregationParam.setEnablePipeline(enablePipeline);
            aggregationParam.setName(column);
            aggregationParam.setField(column);
            aggregationParam.setAggregationType(aggregationTypeEnum);
            aggregationParamList.add(aggregationParam);
        }
        return typedThis;
    }

}
