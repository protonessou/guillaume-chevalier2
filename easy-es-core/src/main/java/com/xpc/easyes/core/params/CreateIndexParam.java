package com.xpc.easyes.core.params;


import lombok.Data;

import java.util.List;

/**
 * 创建索引参数
 * <p>
 * Copyright © 2022 xpc1024 All Rights Reserved
 **/
@Data
public class CreateIndexParam {
    /**
     * 实体类
     */
    private Class<?> entityClass;
    /**
     * 索引名
     */
    private String indexName;
    /**
     * 别名
     */
    private String aliasName;
    /**
     * 分片数
     */
    private Integer shardsNum;
    /**
     * 副本数
     */
    private Integer replicasNum;
    /**
     * 索引字段及类型分词器等信息
     */
    private List<EsIndexParam> esIndexParamList;
}
