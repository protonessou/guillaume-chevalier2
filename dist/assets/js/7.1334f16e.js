(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{326:function(t,e,s){"use strict";s.r(e);var r=s(6),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("Easy-Es（简称EE）是一款基于ElasticSearch(简称Es)官方提供的RestHighLevelClient打造的ORM开发框架，在 RestHighLevelClient 的基础上,只做增强不做改变，为简化开发、提高效率而生,您如果有用过Mybatis-Plus(简称MP),那么您基本可以零学习成本直接上手EE,EE是MP的Es平替版,在有些些方面甚至比MP更简单,同时也融入了更多Es独有的功能,助力您快速实现各种场景的开发.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("理念")]),t._v(" 把简单,易用,方便留给用户,把复杂留给框架.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("愿景")]),t._v(" 让天下没有难用的Es, 致力于成为全球最受欢迎的ElasticSearch搜索引擎开发框架.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://iknow.hs.net/9fa0407f-30ff-4d8b-82da-a4990e41a04b.png",alt:"logo"}})]),t._v(" "),s("h2",{attrs:{id:"优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("全自动索引托管:")]),t._v(" 全球开源首创的索引托管模式,开发者无需关心索引的创建更新及数据迁移等繁琐步骤,索引全生命周期皆可托管给框架,由框架自动完成,过程零停机,用户无感知,彻底解放开发者")]),t._v(" "),s("li",[s("strong",[t._v("屏蔽语言差异:")]),t._v(" 开发者只需要会MySQL语法即可使用Es,真正做到一通百通,无需学习枯燥易忘的Es语法,Es使用相对MySQL较低频,学了长期不用也会忘,没必要浪费这时间.开发就应该专注于业务,省下的时间去撸铁,去陪女朋友陪家人,不做资本家的韭菜")]),t._v(" "),s("li",[s("strong",[t._v("代码量极少:")]),t._v(" 与直接使用RestHighLevelClient相比,相同的查询平均可以节省3-5倍左右的代码量")]),t._v(" "),s("li",[s("strong",[t._v("零魔法值:")]),t._v(" 字段名称直接从实体中获取,无需输入字段名称字符串这种魔法值,提高代码可读性,杜绝因字段名称修改而代码漏改带来的Bug")]),t._v(" "),s("li",[s("strong",[t._v("零额外学习成本:")]),t._v(" 开发者只要会国内最受欢迎的Mybatis-Plus语法,即可无缝迁移至EE,EE采用和前者相同的语法,消除使用者额外学习成本,直接上手,爽")]),t._v(" "),s("li",[s("strong",[t._v("降低开发者门槛:")]),t._v(" Es通常需要中高级开发者才能驾驭,但通过接入EE,即便是只了解ES基础的初学者也可以轻松驾驭ES完成绝大多数需求的开发,可以提高人员利用率,降低企业成本")])]),t._v(" "),s("h2",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("无侵入")]),t._v("：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑")]),t._v(" "),s("li",[s("strong",[t._v("损耗小")]),t._v("：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作")]),t._v(" "),s("li",[s("strong",[t._v("强大的 CRUD 操作")]),t._v("：内置通用 Mapper，仅仅通过少量配置即可实现大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求")]),t._v(" "),s("li",[s("strong",[t._v("支持 Lambda 形式调用")]),t._v("：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错段")]),t._v(" "),s("li",[s("strong",[t._v("支持主键自动生成")]),t._v("：支持2 种主键策略，可自由配置，完美解决主键问题")]),t._v(" "),s("li",[s("strong",[t._v("支持 ActiveRecord 模式")]),t._v("：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作")]),t._v(" "),s("li",[s("strong",[t._v("支持自定义全局通用操作")]),t._v("：支持全局通用方法注入（ Write once, use anywhere ）")]),t._v(" "),s("li",[s("strong",[t._v("内置分页插件")]),t._v("：基于RestHighLevelClient 物理分页，开发者无需关心具体操作，且无需额外配置插件，写分页等同于普通 List 查询,且保持和PageHelper插件同样的分页返回字段,无需担心命名影响")]),t._v(" "),s("li",[s("strong",[t._v("MySQL功能全覆盖")]),t._v(":MySQL中支持的功能通过EE都可以轻松实现")]),t._v(" "),s("li",[s("strong",[t._v("支持ES高阶语法")]),t._v(":支持高亮搜索,分词查询,权重查询,Geo地理位置查询,IP查询,聚合查询等高阶语法")]),t._v(" "),s("li",[s("strong",[t._v("良好的拓展性")]),t._v(":底层仍使用RestHighLevelClient,可保持其拓展性,开发者在使用EE的同时,仍可使用RestHighLevelClient的功能")])]),t._v(" "),s("p",[t._v("...")]),t._v(" "),s("h2",{attrs:{id:"框架架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#框架架构"}},[t._v("#")]),t._v(" 框架架构")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://iknow.hs.net/27fb40b8-22d4-45c2-92e0-1471112d5102.jpg",alt:"EasyEsJG.jpg"}})]),t._v(" "),s("h2",{attrs:{id:"代码托管"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码托管"}},[t._v("#")]),t._v(" 代码托管")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://gitee.com/dromara/easy-es",target:"_blank",rel:"noopener noreferrer"}},[t._v("码云Gitee"),s("OutboundLink")],1),t._v("✔ | "),s("a",{attrs:{href:"https://github.com/dromara/easy-es",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v("✔")])]),t._v(" "),s("h2",{attrs:{id:"参与贡献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参与贡献"}},[t._v("#")]),t._v(" 参与贡献")]),t._v(" "),s("p",[t._v("尽管目前Easy-Es诞生不算太久,但由于站在巨人的肩膀上(RestHighLevelClient和Mybatis-Plus),这是一款出道即巅峰的框架,这么说并不是说它写得有多好,而是它融合了两款目前非常优秀框架的优点,以及MP的用户习惯和用户生态，这决定了它起点的高度,未来可期,所以在此欢迎各路好汉一起来参与完善 Easy-Es，我们期待你的 PR！")]),t._v(" "),s("ul",[s("li",[t._v("贡献代码：代码地址 "),s("a",{attrs:{href:"https://gitee.com/dromara/easy-es",target:"_blank",rel:"noopener noreferrer"}},[t._v("Easy-ES"),s("OutboundLink")],1),t._v("，欢迎提交 Issue 或者 Pull Requests")]),t._v(" "),s("li",[t._v("维护文档：文档地址 "),s("a",{attrs:{href:"https://github.com/xpc1024/easy-es-home-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Easy-ES"),s("OutboundLink")],1),t._v("，欢迎参与翻译和修订")])])])}),[],!1,null,null,null);e.default=a.exports}}]);