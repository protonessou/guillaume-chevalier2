(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{332:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("基础配置:")])]),s._v(" "),a("p",[s._v("如果缺失可导致项目无法正常启动,其中账号密码可缺省.")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("easy-es")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否开启EE自动配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("address")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# es连接地址+端口 格式必须为ip:port,如果是集群则可用逗号隔开")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认为http")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elastic "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果无账号密码则可不配置此行")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" WG7WVmuNMtM4GwNYkyWH "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果无账号密码则可不配置此行")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("拓展配置:")])]),s._v(" "),a("p",[s._v("可缺省,不影响项目启动,为了提高生产环境性能,建议您按需配置")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("easy-es")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keep-alive-millis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 心跳策略时间 单位:ms")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("connectTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接超时时间 单位:ms")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("socketTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通信超时时间 单位:ms")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("requestTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求超时时间 单位:ms")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("connectionRequestTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接请求超时时间 单位:ms")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("maxConnTotal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接数 单位:个")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("maxConnPerRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接路由数 单位:个")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("全局配置:")])]),s._v(" "),a("p",[s._v("可缺省,不影响项目启动,若缺省则为默认值")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("easy-es")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("global-config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("process_index_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" smoothly "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#索引处理模式,smoothly:平滑模式,默认开启此模式, not_smoothly:非平滑模式, manual:手动模式")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("print-dsl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启控制台打印通过本框架生成的DSL语句,默认为开启,测试稳定后的生产环境建议关闭,以提升少量性能")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("distributed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前项目是否分布式项目,默认为true,在非手动托管索引模式下,若为分布式项目则会获取分布式锁,非分布式项目只需synchronized锁.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db-config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("map-underscore-to-camel-case")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否开启下划线转驼峰 默认为false")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("table-prefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" daily_ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 索引前缀,可用于区分环境  默认为空 用法和MP一样")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" customize "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# id生成策略 customize为自定义,id值由用户生成,比如取MySQL中的数据id,如缺省此项配置,则id默认策略为es自动生成")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("field-strategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" not_empty "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字段更新策略 默认为not_null")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enable-track-total-hits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认开启,查询若指定了size超过1w条时也会自动开启,开启后查询所有匹配数据,若不开启,会导致无法获取数据总条数,其它功能不受影响.")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("refresh-policy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" immediate "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据刷新策略,默认为不刷新")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enable-must2-filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否全局开启must查询类型转换为filter查询类型 默认为false不转换")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("strong",[s._v("其它配置:")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tracer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" trace "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启trace级别日志,在开发时可以开启此配置,则控制台可以打印es全部请求信息及DSL语句,为了避免重复,开启此项配置后,可以将EE的print-dsl设置为false.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("banner-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" off "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有用户反馈想关闭EE打印的Banner,由于EE的banner是直接覆盖springboot默认banner的,所以如需关闭,直接关闭springboot的banner即可关闭EE的banner.")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("温馨提示")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("id-type支持3种类型:")]),s._v(" "),a("ul",[a("li",[s._v("auto: 由ES自动生成,是默认的配置,无需您额外配置 推荐")]),s._v(" "),a("li",[s._v("uuid: 系统生成UUID,然后插入ES (不推荐)")]),s._v(" "),a("li",[s._v("customize: 用户自定义,在此类型下,用户可以将任意数据类型的id存入es作为es中的数据id,比如将mysql自增的id作为es的id,可以开启此模式,或通过@TableId(type)注解指定.")])])]),s._v(" "),a("li",[a("p",[s._v("field-strategy支持3种类型:")]),s._v(" "),a("ul",[a("li",[s._v("not_null: 非Null判断,字段值为非Null时,才会被更新")]),s._v(" "),a("li",[s._v("not_empty: 非空判断,字段值为非空字符串时才会被更新")]),s._v(" "),a("li",[s._v("ignore: 忽略判断,无论字段值为什么,都会被更新")]),s._v(" "),a("li",[s._v("在配置了全局策略后,您仍可以通过注解针对个别类进行个性化配置,全局配置的优先级是小于注解配置的")])])]),s._v(" "),a("li",[a("p",[s._v("refresh-policy支持3种策略")]),s._v(" "),a("ul",[a("li",[s._v("none: 默认策略,不刷新数据")]),s._v(" "),a("li",[s._v("immediate : 立即刷新,会损耗较多性能,对数据实时性要求高的场景下适用")]),s._v(" "),a("li",[s._v("wait_until: 请求提交数据后，等待数据完成刷新(1s)，再结束请求 性能损耗适中")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);