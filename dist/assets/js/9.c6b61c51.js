(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{326:function(e,t,s){"use strict";s.r(t);var a=s(6),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"_1-性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-性能"}},[e._v("#")]),e._v(" 1.性能")]),e._v(" "),s("p",[e._v("在正式接入Easy-Es至生产环境之前,您肯定会担心一个问题,就是使用此框架后,系统的查询效率是否会变低?系统资源开销是否会变大?负面影响到底有多少?\n这些问题关乎到一个框架的存活,作为EE作者,这些问题我在开发前就考虑到了,但用户并不知晓,所以我再此一一帮您粉碎这些顾虑.")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://iknow.hs.net/a057bb79-2f27-4785-b177-87f3056fe920.jpg",alt:"1"}})]),e._v(" "),s("p",[e._v("我们先来看EE在整个查询过程中做了什么事? 总结起来就2件:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("把用户输入的MySQL语法(Mybatis-Plus语法)转换成RestHighLevel语法,然后调用RestHighLevelClient执行本次查询")])]),e._v(" "),s("li",[s("p",[e._v("把查询结果转换成用户想要的格式:如"),s("code",[e._v("List<T>")]),e._v("并返回.")])])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("其中,语法转换是按照"),s("RouterLink",{attrs:{to:"/pages/6fea40/"}},[e._v("MySQL和EE语法对比")]),e._v("的关系进行转换.这种转换其实耗费的性能非常低,因为即使你直接使用RestHighLevelClient进行查询,你依旧需要创建出termQueryBuilder和BoolQueryBuilder. 唯一的区别就是我把用户输入的查询条件eq放入了队列,然后通过队里FIFO(除查询条件中有or的情况)的顺序逐一进行转换,对于绝大多数查询语句,查询条件都不会太多,所以队里中的元素数大多数情况下都会小于10,而且队列中我只存了枚举和参数,既不会占用过多内存,也不会因为队列的遍历消耗多少性能. 对于现代计算机而言,别说遍历10条小数据,就是成百上千条也是毫秒级的,所以这点性能损耗基本可以忽略不计")],1)]),e._v(" "),s("li",[s("p",[e._v("再说结果解析,结果解析其实就是把调用RestHighLevelClient返回的SearchResponse中的hits取出并用fastJson转换成数组,这个过程就算不用EE,你直接用RestHighLevelClient也是会有这一步,所以这一步并没有过多的损耗,即便是我用了反射,字段的反射和注解信息,都在框架启动时加载进内存中了,做了jvm的缓存,所以这点损耗可忽略不计.")])])]),e._v(" "),s("p",[e._v("当然如上都是基于理论分析,在test模块的Performance测试类中,大家可以看到我针对CURD分别作了不同维度的性能测试,实际测试的结果也很好的印证了我上面的理论分析,EE除了查询会比直接使用RestHighLevelClient平均慢10-15毫秒,增删改API并无差异,而且随着查询数据量的增大,实体字段缓存生效后,查询差异会进一步降低,几乎可以忽略不计.  牺牲10毫秒,对用户而言是无感知的,但对开发而言,可以节省大量代码和时间,我认为这是值得的,基本上没有哪款ORM框架是不会损耗性能的,权衡利弊,主公们心理应该都会有答案.")]),e._v(" "),s("h2",{attrs:{id:"_2-安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安全"}},[e._v("#")]),e._v(" 2.安全")]),e._v(" "),s("p",[e._v("本框架所有三方依赖有elastic search官方提供的es操作套件和RestHighLevelClient,阿里的fastJson,Spring官方的SpringbootAutoConfig,Apache的commons-codec以及Lombok,无二方依赖,空口黄牙,口说无凭,大家可以点开maven中央仓库,亲自查看一番:"),s("a",{attrs:{href:"https://search.maven.org/search?q=easy-es",target:"_blank",rel:"noopener noreferrer"}},[e._v("maven中央仓库"),s("OutboundLink")],1),e._v("\n以上套件即使不使用EE,你在实际开发中也会用到,且都是官方出品,所以您无需担心.\n那么EE有没有可能有安全问题?毕竟是个人开发者写的,没有前面提到的框架那么强的背书.首先我认为任何框架都有可能有安全风险,即便是有强大的公司背书,比如前阵子阿里FastJson的安全漏洞. 对于EE,我个人认为目前不会有特别严重的安全问题,EE框架的核心原理上面的图中已经列出来了,EE的核心原理只是转换,相当于一个翻译或者中介,并无其它涉及安全类的操作,加上EE框架本身十分轻量,没有引入任何多余的类库,所有工具类都是自己封装,封装的时候也参照了apache工具类,所以有理由认为使用EE是相对安全的,除非下游的官方依赖本身有安全漏洞. 如质疑框架本身存在安全问题的,大可以下载源码阅读一番,看看有无漏洞.\n另外关于FastJson其实一直争议不断,其性能确实是目前市面上当之无愧的一哥,确实够快,安全方面的话之前因为AutoType问题和黑客上演的魔高一尺道高一丈故事,让很多人误以为它漏洞百出,其实它没有那么不堪,之前的漏洞频繁本质上都是一个问题.阿里内部尚且那么多项目在使用FastJson,只要其社区活跃,并有积极处理,都是可以考虑使用的,毕竟没有哪个框架可以保证完全没有漏洞,只不过还没被发现罢了.")]),e._v(" "),s("h2",{attrs:{id:"_3-拓展性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-拓展性"}},[e._v("#")]),e._v(" 3.拓展性")]),e._v(" "),s("p",[e._v("EE底层用的就是Es官方提供的RestHighLevelClient,我们只是对RestHighLevelClient做了增强,并没有改变减少或是削弱它原有的功能,所以您无需担心拓展性.\n任何框架的使用都会降低系统的灵活性,因为框架是死的,使用了以后不可避免的会碰到一些场景框架无法满足,需要定制化开发,或是短期内您不了解框架本身,不敢贸然使用,不然以后遇到问题怎么办?\n为了解决上述问题,我特地在框架中留了"),s("RouterLink",{attrs:{to:"/pages/a19563/"}},[e._v("混合查询")]),e._v("和"),s("RouterLink",{attrs:{to:"/pages/4446a5/"}},[e._v("原生查询")]),e._v('\n目前EE提供的所有API可以覆盖实际开发中99%的需求,当极小概率下1%的需求无法覆盖时,您可以通过使用混合查询,也就是能支持的语句用EE生成,不能支持的语句就直接用RestHighLevelClient的语法,然后通过原生接口去完成查询,既简单有省事.当然如果您不喜欢这种"油电混动"的方式,您也可以直接用原生查询接口去完成查询,和直接使用RestHighLevelClient一样.\n当然如果您实在不想用EE提供的任何方法,EE仍可以作为一个自动配置版的RestHighLevelClient使用,直接在需要的地方注入RestHighLevelClient进行使用即可,EE已经帮您把RestHighLevelClient按照您在配置文件中指定配置,自动装配成SpringBean了,所以在任何情况下,您都可以很自信很从容,就像直接使用官方的RestHighLevelClient一样,根本不需要担心有一天出问题了怎么办,大不了不用EE,只把它当成一个引入依赖和自动配置的工具.而且这种可能性也非常的低,我们还有专门的答疑群无偿在线给予您支持,对您的合理需求也会第一时间响应并安排落地.')],1),e._v(" "),s("h2",{attrs:{id:"_4-团队及社区活跃度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-团队及社区活跃度"}},[e._v("#")]),e._v(" 4.团队及社区活跃度")]),e._v(" "),s("p",[e._v('团队目前招募到了5人,我称之为"五虎上将",从0.9.5+的版本之后开始TeamWork,未来随着项目发展还会招募更多有志之士加入,社区目前活跃,每年会发很多个版本,不断提升用户体验,对于用户提的需求会在一周内响应,合理的会在一个月内立项,三个月内完成开发上线.Issue类问题确认后会在两周内解决并上线.')]),e._v(" "),s("h2",{attrs:{id:"_5-接入优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-接入优势"}},[e._v("#")]),e._v(" 5.接入优势")]),e._v(" "),s("ul",[s("li",[e._v("简单易用高效不用我多说了吧,MyBatis-Plus用户懂的都懂! 大把的时间节省出来,做...爱做的事情,真香!")]),e._v(" "),s("li",[e._v("使用门槛降低,就算是刚不懂Es的小白,也可以用EE开发各种功能")]),e._v(" "),s("li",[e._v("大幅减少代码量,提升代码可读性,降低重复代码量,提升代码质量")]),e._v(" "),s("li",[e._v("专业答疑团队,无忧售后")]),e._v(" "),s("li",[e._v("永久免费")])]),e._v(" "),s("p",[e._v("...")]),e._v(" "),s("h2",{attrs:{id:"_6-结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-结语"}},[e._v("#")]),e._v(" 6.结语")]),e._v(" "),s("p",[e._v("新能源汽车刚出来的时候,油车车主还在观望,先上车的已经体验到甜头了,好不好用了就知道,至于那些所谓的问题,都会随着时间被解决,多尝试新鲜事物,拥抱变化,不因循守旧,不用一成不变的观念来看瞬息万变的世界,才能立于不败之地.")])])}),[],!1,null,null,null);t.default=v.exports}}]);