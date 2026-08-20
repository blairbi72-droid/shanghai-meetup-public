const categories = [
  { key: 'indoor', label: '室内游玩', icon: '🏛️' },
  { key: 'outdoor', label: '室外景点', icon: '🌿' },
  { key: 'food', label: '美食', icon: '🍜' },
  { key: 'fun', label: '娱乐', icon: '🎤' }
];

const districts = [
  { id: 'huangpu', name: '黄浦区', x: 320, y: 250, w: 92, h: 62, color: '#73f1d4', data: {
    indoor: [['上海博物馆人民广场馆','适合看展、雨天、低强度约会。','博物馆','文化'],['大世界','演艺、非遗和沉浸式体验集中。','演艺','地标'],['上海当代艺术博物馆','江边艺术空间，适合拍照聊天。','展览','江景']],
    outdoor: [['外滩观景步道','经典夜景路线，适合饭后散步。','夜景','步行'],['豫园与城隍庙','老上海园林和市井氛围组合。','园林','打卡'],['新天地街区','石库门街区，白天夜晚都好逛。','街区','拍照']],
    food: [['云南南路美食街','本帮小吃和老字号密集。','小吃','老字号'],['黄河路美食街','经典沪上餐饮记忆点。','本帮菜','聚餐'],['新天地餐饮区','适合预算弹性较高的小聚。','氛围','约会']],
    fun: [['外滩源夜游','江景、露台与街区活动组合。','夜游','微醺'],['人民广场剧场圈','音乐剧、话剧选择多。','剧场','文艺'],['K11 艺术商圈','展览、餐饮、购物一站完成。','商圈','看展']]
  }},
  { id: 'xuhui', name: '徐汇区', x: 220, y: 305, w: 104, h: 70, color: '#8ca7ff', data: {
    indoor: [['西岸美术馆','当代艺术与江景空间结合。','看展','江岸'],['美罗城','潮玩、餐饮和商场动线友好。','商场','二次元'],['上海电影博物馆','适合影迷和轻知识型聚会。','博物馆','电影']],
    outdoor: [['武康路街区','梧桐、老洋房和咖啡路线。','Citywalk','拍照'],['徐汇滨江','跑步、骑行、看江景都合适。','滨江','散步'],['衡复风貌区','安静文艺，适合慢逛。','街区','历史']],
    food: [['天钥桥路','徐家汇背后的人气餐饮街。','聚餐','商圈'],['永康路周边','咖啡、简餐和小酒馆密集。','咖啡','小聚'],['衡山路餐饮带','适合轻奢晚餐和微醺。','晚餐','酒吧']],
    fun: [['上海体育场周边','演唱会、赛事后续摊。','演出','赛事'],['JZ Club','爵士现场，适合夜间聚会。','Live','音乐'],['徐家汇商圈密室/KTV','聚会备选密集，交通便利。','KTV','密室']]
  }},
  { id: 'jingan', name: '静安区', x: 300, y: 180, w: 106, h: 64, color: '#ffd166', data: {
    indoor: [['静安大悦城','潮玩、餐饮和摩天轮地标。','商场','潮玩'],['上海自然博物馆','轻松有趣，适合多人逛展。','博物馆','科普'],['MOHO / 苏河湾商圈','新商场与河岸空间组合。','商场','新地标']],
    outdoor: [['静安寺商圈','地标感强，集合方便。','地标','商圈'],['苏河湾步道','河岸散步，适合傍晚。','河岸','Citywalk'],['愚园路东段','咖啡、买手店和街区感。','街区','文艺']],
    food: [['吴江路-丰盛里','露台、夜间经济和餐饮选择多。','夜市','露台'],['巨富长街区','年轻人常去的餐酒小店多。','餐酒','潮流'],['南京西路商圈','预算覆盖广，订位方便。','商圈','聚餐']],
    fun: [['静安寺酒吧小聚','适合下班后轻松续摊。','微醺','夜生活'],['Majestic Theatre 周边','看剧后聚餐路线成熟。','剧场','演艺'],['大悦城娱乐集合','密室、桌游、影院都方便。','密室','影院']]
  }},
  { id: 'changning', name: '长宁区', x: 178, y: 212, w: 106, h: 70, color: '#ff9f7a', data: {
    indoor: [['上海影城','适合电影主题聚会。','影院','经典'],['来福士广场长宁','餐饮、影院、购物集中。','商场','便利'],['上海动物园室内馆线','亲近自然，轻松低门槛。','亲子','休闲']],
    outdoor: [['愚园路西段','街区散步、咖啡和小店。','Citywalk','咖啡'],['中山公园','地铁友好，野餐散步皆可。','公园','草坪'],['新华路街区','安静小众，适合拍照。','街区','老洋房']],
    food: [['定西路','街边餐饮和夜宵氛围足。','夜宵','烟火气'],['仙霞路','日料、韩餐和小馆集中。','异国','聚餐'],['古北餐饮区','适合多国料理选择。','多国菜','品质']],
    fun: [['C·PARK 音乐公园','音乐、酒吧和年轻社交场景。','Live','夜生活'],['虹桥南丰城娱乐','桌游、影院、餐饮一体。','桌游','影院'],['愚园路小酒馆','适合轻松聊天续摊。','微醺','街区']]
  }},
  { id: 'putuo', name: '普陀区', x: 190, y: 135, w: 112, h: 62, color: '#b18cff', data: {
    indoor: [['环球港','超大商场，室内项目和餐饮丰富。','商场','全天'],['JOYPOLIS 世嘉都市乐园','电玩和刺激项目适合朋友局。','电玩城','室内'],['M50 创意园展厅','艺术展与咖啡路线组合。','艺术','拍照']],
    outdoor: [['苏州河工业文明展示带','河岸散步和城市更新景观。','河岸','散步'],['长风公园','湖景、公园和轻户外。','公园','休闲'],['真如寺周边','古寺与老街区慢逛。','历史','慢逛']],
    food: [['月星环球港餐饮层','选择多，适合口味不统一。','商场','聚餐'],['曹杨路周边小馆','本地生活气息浓。','小馆','实惠'],['长寿路餐饮带','火锅、烧烤、日料都有。','夜宵','聚餐']],
    fun: [['环球港影院/电玩','下雨天一站式备选。','影院','电玩'],['M50 艺术夜逛','看展后咖啡或小酒。','艺术','轻松'],['长寿路 KTV','交通方便，续摊简单。','KTV','续摊']]
  }},
  { id: 'hongkou', name: '虹口区', x: 420, y: 160, w: 105, h: 66, color: '#7bdff2', data: {
    indoor: [['1933 老场坊','建筑空间独特，适合拍照探索。','建筑','拍照'],['白玉兰广场','江景商圈，餐饮和购物方便。','商场','江景'],['多伦现代美术馆','文化街区中的看展点。','艺术','安静']],
    outdoor: [['北外滩滨江','看浦江和陆家嘴视角很棒。','江景','夜景'],['多伦路文化名人街','老上海文化气质浓。','街区','历史'],['鲁迅公园','公园散步和文化路线。','公园','人文']],
    food: [['四川北路周边','老牌商业街，餐饮选择广。','商圈','聚餐'],['白玉兰广场餐饮区','适合江景晚餐。','江景','餐酒'],['虹口足球场周边','赛后、演出后聚餐方便。','夜宵','便利']],
    fun: [['北外滩微醺路线','江风、酒吧和夜景组合。','微醺','夜景'],['Livehouse 观演','音乐现场氛围强。','Live','音乐'],['1933 密室/摄影','适合主题式朋友局。','密室','拍照']]
  }},
  { id: 'yangpu', name: '杨浦区', x: 520, y: 205, w: 112, h: 72, color: '#73f1d4', data: {
    indoor: [['合生汇','大学路附近的一站式商圈。','商场','聚餐'],['杨浦滨江人民城市馆','城市更新主题，适合轻看展。','展馆','江岸'],['大学路桌游店','学生感和轻社交氛围足。','桌游','轻松']],
    outdoor: [['杨浦滨江','工业遗存和江景步道。','滨江','骑行'],['大学路','咖啡、小店和街头氛围。','街区','Citywalk'],['共青森林公园','露营、烧烤和森林感。','森林','户外']],
    food: [['控江路','杨浦本地美食密集。','小吃','本地'],['大学路餐饮带','适合年轻朋友聚餐。','年轻','聚餐'],['五角场商圈','选择多，集合便利。','商圈','便利']],
    fun: [['五角场密室/KTV','娱乐供给密集。','KTV','密室'],['大学路清吧','聊天型小酒馆选择多。','清吧','社交'],['滨江夜骑','适合轻运动朋友局。','骑行','夜景']]
  }},
  { id: 'pudong', name: '浦东新区', x: 470, y: 300, w: 160, h: 104, color: '#89f7a7', data: {
    indoor: [['上海科技馆','互动性强，适合大朋友小朋友。','科普','互动'],['陆家嘴中心 / 国金','高密度餐饮购物娱乐。','商场','地标'],['中华艺术宫','大空间艺术展览。','艺术','展馆']],
    outdoor: [['陆家嘴滨江','经典天际线与江景。','江景','夜景'],['上海迪士尼度假区','全天型高情绪价值聚会。','乐园','全天'],['世纪公园','野餐、骑车和散步友好。','公园','户外']],
    food: [['陆家嘴餐饮圈','商务、约会和聚餐都覆盖。','餐厅','景观'],['1192 弄老上海风情街','复古街景和小吃集合。','小吃','复古'],['张江长泰广场','科技园区朋友集合方便。','商圈','聚餐']],
    fun: [['迪士尼烟花夜场','强仪式感路线。','乐园','夜景'],['梅赛德斯-奔驰文化中心','演唱会、赛事、展演集中。','演出','大型'],['陆家嘴高空观景','适合纪念日或游客朋友。','观景','地标']]
  }},
  { id: 'minhang', name: '闵行区', x: 138, y: 388, w: 126, h: 78, color: '#ff7ab6', data: {
    indoor: [['爱琴海购物公园','商场、喷泉和餐饮组合。','商场','约会'],['七宝万科广场','吃喝玩乐集中。','商圈','便利'],['莘庄龙之梦','地铁友好，适合家庭朋友局。','商场','聚餐']],
    outdoor: [['七宝老街','古镇小吃和慢逛路线。','古镇','小吃'],['闵行文化公园','湖景草坪，适合野餐。','公园','野餐'],['浦江郊野公园','花展季和户外活动友好。','郊野','拍照']],
    food: [['虹泉路韩国街','韩餐、咖啡和夜间氛围。','韩餐','夜生活'],['虹梅路休闲街','多国风味餐饮集中。','异国','聚餐'],['七宝老街小吃','汤圆、方糕等小吃路线。','小吃','古镇']],
    fun: [['韩国街夜生活','适合聚餐后续摊。','微醺','韩式'],['七宝宝龙城娱乐','密室、影院、餐饮齐全。','影院','密室'],['浦江户外团建','飞盘、露营和郊野活动。','户外','团建']]
  }},
  { id: 'baoshan', name: '宝山区', x: 420, y: 70, w: 126, h: 70, color: '#9ee493', data: {
    indoor: [['上海玻璃博物馆','互动展陈与设计感强。','博物馆','亲子'],['宝山日月光中心','北上海聚会型商场。','商场','聚餐'],['美兰湖商圈','餐饮、咖啡和休闲空间。','商圈','慢逛']],
    outdoor: [['顾村公园','樱花季热门，也适合野餐。','公园','花季'],['吴淞炮台湾湿地森林公园','滨江湿地和历史遗迹。','湿地','自然'],['美兰湖','湖边散步和拍照轻松。','湖景','散步']],
    food: [['宝山万达餐饮区','选择稳定，适合多人聚餐。','商场','聚餐'],['顾村公园周边农家菜','户外后就近吃饭。','农家菜','休闲'],['淞宝老街小吃','本地小吃和烟火气。','小吃','本地']],
    fun: [['顾村公园露营局','适合天气好的大团。','露营','草坪'],['宝山游艇/滨江体验','适合特别纪念局。','滨江','体验'],['商场桌游密室','轻决策、低风险备选。','桌游','密室']]
  }},
  { id: 'jiading', name: '嘉定区', x: 78, y: 78, w: 118, h: 78, color: '#ffd166', data: {
    indoor: [['上海汽车博物馆','汽车主题鲜明，适合男生局。','博物馆','主题'],['嘉亭荟城市生活广场','地铁口商场，集合方便。','商场','便利'],['保利大剧院','建筑与演出兼具。','剧院','文化']],
    outdoor: [['嘉定州桥老街','古镇街区，适合慢逛。','老街','文化'],['古猗园','江南园林，适合拍照。','园林','安静'],['远香湖公园','湖畔散步与露营感。','公园','湖景']],
    food: [['南翔老街小笼','经典小笼路线。','小笼','老街'],['安亭老街餐饮','汽车城周边聚餐方便。','聚餐','本地'],['嘉定新城商圈','选择多，停车友好。','商圈','停车']],
    fun: [['上海国际赛车场','赛车主题体验与赛事。','赛事','速度'],['保利剧院观演','适合仪式感聚会。','演出','剧院'],['嘉定新城桌游局','适合轻社交和聊天。','桌游','轻松']]
  }},
  { id: 'qingpu', name: '青浦区', x: 26, y: 272, w: 118, h: 78, color: '#8ca7ff', data: {
    indoor: [['蟠龙天地室内街区','新中式商业与餐饮空间。','商圈','新地标'],['奥特莱斯商圈','购物和餐饮组合。','购物','商圈'],['青浦万达茂','室内娱乐备选丰富。','商场','娱乐']],
    outdoor: [['朱家角古镇','水乡古镇，适合半日游。','古镇','水乡'],['淀山湖','骑行、湖景和周末感。','湖景','户外'],['课植园','古镇内安静园林。','园林','文化']],
    food: [['朱家角古镇小吃','扎肉、粽子和水乡小吃。','小吃','古镇'],['蟠龙天地餐饮','氛围感强，适合拍照聚餐。','餐饮','拍照'],['赵巷奥莱餐饮','购物后聚餐方便。','商圈','便利']],
    fun: [['东方绿舟团建','户外拓展和大团活动。','团建','户外'],['淀山湖骑行','适合运动型朋友。','骑行','湖景'],['蟠龙天地夜逛','灯光、餐酒和街区氛围。','夜游','街区']]
  }},
  { id: 'songjiang', name: '松江区', x: 116, y: 480, w: 132, h: 66, color: '#7bdff2', data: {
    indoor: [['广富林文化遗址室内馆','文化沉浸感强。','展馆','历史'],['松江印象城','餐饮购物和娱乐一站式。','商场','便利'],['欢乐谷周边室内娱乐','适合天气不稳时备选。','娱乐','乐园']],
    outdoor: [['广富林文化遗址','水下博物馆外观和古风拍照。','文化','拍照'],['辰山植物园','花季、草坪和自然感。','植物园','户外'],['泰晤士小镇','欧式街区，适合拍照散步。','街区','拍照']],
    food: [['泗泾夜市','夜宵烟火气强。','夜市','小吃'],['松江大学城餐饮','年轻、实惠、选择多。','学生','聚餐'],['泰晤士小镇餐厅','适合拍照型晚餐。','氛围','约会']],
    fun: [['上海欢乐谷','高能全天朋友局。','乐园','刺激'],['玛雅海滩水公园','夏季水上聚会。','水上','夏天'],['大学城桌游密室','预算友好，选择多。','桌游','密室']]
  }},
  { id: 'jinshan', name: '金山区', x: 232, y: 488, w: 110, h: 62, color: '#ff9f7a', data: {
    indoor: [['金山万达广场','餐饮娱乐集中，集合容易。','商场','聚餐'],['金山城市沙滩游客中心','海边路线的室内补给点。','海边','休息'],['枫泾古镇展馆','古镇文化与手作体验。','展馆','文化']],
    outdoor: [['金山城市沙滩','看海、沙滩和日落。','海滩','日落'],['枫泾古镇','水乡、画村和小吃。','古镇','小吃'],['廊下郊野公园','田园感周末游。','郊野','自然']],
    food: [['枫泾古镇小吃','丁蹄、粽子等本地风味。','小吃','古镇'],['金山海鲜街','海边聚餐更有主题感。','海鲜','聚餐'],['朱泾老街餐饮','本地烟火气更足。','本地','小馆']],
    fun: [['城市沙滩音乐/露营','适合夏夜和大团聚会。','露营','海边'],['枫泾手作体验','画村、手作和古镇慢游。','手作','文艺'],['乡村采摘局','适合开车周末轻旅行。','采摘','郊游']]
  }},
  { id: 'fengxian', name: '奉贤区', x: 360, y: 442, w: 132, h: 76, color: '#b18cff', data: {
    indoor: [['奉贤龙湖天街','南上海聚会型商圈。','商场','聚餐'],['九棵树未来艺术中心','森林里的剧院感很强。','剧院','建筑'],['奉贤博物馆','低强度文化路线。','博物馆','文化']],
    outdoor: [['上海之鱼','湖景、公园和拍照点。','湖景','公园'],['海湾国家森林公园','森林、露营和骑行。','森林','户外'],['碧海金沙','海边、沙滩和水上活动。','海滩','夏天']],
    food: [['南桥商圈餐饮','集合方便，选择稳定。','商圈','聚餐'],['海湾海鲜餐厅','海边主题聚餐。','海鲜','主题'],['奉城本地小馆','更接地气的本地味道。','本地','小馆']],
    fun: [['九棵树看演出','适合文艺型朋友局。','演出','剧院'],['海湾露营烧烤','适合周末大团。','露营','烧烤'],['南桥桌游密室','室内备选成熟。','桌游','密室']]
  }},
  { id: 'chongming', name: '崇明区', x: 510, y: 18, w: 190, h: 42, color: '#89f7a7', data: {
    indoor: [['崇明万达广场','岛上聚会补给和餐饮。','商场','便利'],['生态科普展馆','适合亲子和轻知识路线。','科普','自然'],['农场手作体验馆','适合雨天手作活动。','手作','团建']],
    outdoor: [['东平国家森林公园','森林骑行和露营感。','森林','骑行'],['西沙明珠湖景区','湿地、湖景和日落。','湿地','日落'],['长兴岛郊野公园','亲近自然，适合轻户外。','郊野','公园']],
    food: [['崇明农家乐','本地食材和大桌聚餐。','农家菜','团建'],['陈家镇海鲜餐厅','上岛后聚餐方便。','海鲜','聚餐'],['堡镇本地小吃','烟火气和本地口味。','小吃','本地']],
    fun: [['森林公园骑行','适合运动和户外朋友。','骑行','森林'],['露营观星局','远离市区，适合周末过夜。','露营','星空'],['农场采摘','轻松互动，适合多人。','采摘','自然']]
  }},
  { id: 'xq', name: '闵行/徐汇交界', hidden: true },
  { id: 'songjiang2', name: '松江补位', hidden: true },
  { id: 'pudong2', name: '浦东补位', hidden: true },
  { id: 'minhang2', name: '闵行补位', hidden: true },
  { id: 'changning2', name: '长宁补位', hidden: true },
  { id: 'yangpu2', name: '杨浦补位', hidden: true },
  { id: 'jingan2', name: '静安补位', hidden: true },
  { id: 'huangpu2', name: '黄浦补位', hidden: true },
  { id: 'jiading2', name: '嘉定补位', hidden: true },
  { id: 'qingpu2', name: '青浦补位', hidden: true },
  { id: 'baoshan2', name: '宝山补位', hidden: true },
  { id: 'hongkou2', name: '虹口补位', hidden: true },
  { id: 'putuo2', name: '普陀补位', hidden: true },
  { id: 'fengxian2', name: '奉贤补位', hidden: true },
  { id: 'jinshan2', name: '金山补位', hidden: true },
  { id: 'chongming2', name: '崇明补位', hidden: true },
  { id: 'qingpu-real', name: '青浦区', aliasOf: 'qingpu', x: 30, y: 300, w: 120, h: 76, color: '#8ca7ff' },
  { id: 'jiading-real', name: '嘉定区', aliasOf: 'jiading', x: 95, y: 92, w: 118, h: 76, color: '#ffd166' },
  { id: 'chongming-real', name: '崇明区', aliasOf: 'chongming', x: 480, y: 28, w: 188, h: 50, color: '#89f7a7' },
  { id: 'baoshan-real', name: '宝山区', aliasOf: 'baoshan', x: 385, y: 86, w: 128, h: 72, color: '#9ee493' },
  { id: 'putuo-real', name: '普陀区', aliasOf: 'putuo', x: 225, y: 150, w: 110, h: 66, color: '#b18cff' },
  { id: 'jingan-real', name: '静安区', aliasOf: 'jingan', x: 325, y: 182, w: 102, h: 64, color: '#ffd166' },
  { id: 'hongkou-real', name: '虹口区', aliasOf: 'hongkou', x: 440, y: 166, w: 104, h: 66, color: '#7bdff2' },
  { id: 'yangpu-real', name: '杨浦区', aliasOf: 'yangpu', x: 535, y: 206, w: 114, h: 72, color: '#73f1d4' },
  { id: 'huangpu-real', name: '黄浦区', aliasOf: 'huangpu', x: 352, y: 260, w: 92, h: 62, color: '#73f1d4' },
  { id: 'xuhui-real', name: '徐汇区', aliasOf: 'xuhui', x: 245, y: 320, w: 102, h: 70, color: '#8ca7ff' },
  { id: 'changning-real', name: '长宁区', aliasOf: 'changning', x: 190, y: 230, w: 108, h: 70, color: '#ff9f7a' },
  { id: 'pudong-real', name: '浦东新区', aliasOf: 'pudong', x: 480, y: 300, w: 160, h: 106, color: '#89f7a7' },
  { id: 'minhang-real', name: '闵行区', aliasOf: 'minhang', x: 140, y: 390, w: 130, h: 78, color: '#ff7ab6' },
  { id: 'songjiang-real', name: '松江区', aliasOf: 'songjiang', x: 120, y: 482, w: 132, h: 66, color: '#7bdff2' },
  { id: 'fengxian-real', name: '奉贤区', aliasOf: 'fengxian', x: 372, y: 446, w: 134, h: 76, color: '#b18cff' },
  { id: 'jinshan-real', name: '金山区', aliasOf: 'jinshan', x: 254, y: 492, w: 112, h: 62, color: '#ff9f7a' }
];

const baseDistricts = districts.filter(d => d.data);

const supplementalTop5 = {
  huangpu: {
    indoor: [['上海杜莎夫人蜡像馆（南京西路）','适合合影互动，节奏轻松，雨天也稳。','蜡像馆','合影','大众点评评分待核验','票价¥190起','评价关键词：出片、互动、游客友好'],['外滩星空错觉艺术馆','适合拍照型朋友局，游玩时间可控。','错觉馆','拍照','大众点评评分待核验','人均¥80-120','评价关键词：拍照、有趣、适合情侣']],
    outdoor: [['南京东路步行街','集合方便，购物、甜品、夜景都能串起来。','步行街','购物','大众点评评分待核验','免费','评价关键词：热闹、交通方便'],['思南公馆','老洋房街区，适合咖啡+散步。','街区','咖啡','大众点评评分待核验','人均¥60-150','评价关键词：安静、洋房、适合聊天']],
    food: [['德兴馆（广东路总店）','老上海本帮面馆，适合轻量聚餐。','本帮面','老字号','大众点评评分待核验','人均¥40-80','评价关键词：焖蹄面、老字号'],['老正兴菜馆（福州路店）','经典本帮菜，适合正式一点的朋友聚餐。','本帮菜','老字号','大众点评评分待核验','人均¥120-220','评价关键词：草头圈子、传统口味']],
    fun: [['ARK LIVE HOUSE（新天地）','看现场音乐后可直接在新天地续摊。','Livehouse','音乐','大众点评评分待核验','人均¥120-260','评价关键词：现场感、位置方便'],['MUSEK（新天地）','适合唱歌、生日局和夜间娱乐。','KTV','包厢','大众点评评分待核验','人均¥180-350','评价关键词：包厢、服务、氛围']]
  },
  xuhui: {
    indoor: [['上海植物园展览温室','植物主题室内外结合，适合慢节奏。','温室','植物','大众点评评分待核验','门票¥15起','评价关键词：绿植、拍照、放松'],['油罐艺术中心','展览、草坪、江景组合，适合文艺局。','艺术馆','西岸','大众点评评分待核验','票价依展览','评价关键词：空间感、展览、出片']],
    outdoor: [['龙华寺','古寺与老街氛围，适合安静散步。','寺庙','历史','大众点评评分待核验','门票待核验','评价关键词：清净、历史感'],['上海南站绿轴公园','适合低成本散步集合。','公园','轻户外','大众点评评分待核验','免费','评价关键词：开阔、交通便利']],
    food: [['耶里夏丽（肇嘉浜路店）','新疆菜大盘菜适合多人分享。','新疆菜','聚餐','大众点评评分待核验','人均¥100-160','评价关键词：大盘鸡、热闹、分量足'],['新旺茶餐厅（天钥桥路）','港式茶餐厅，适合口味兼容局。','港式','商圈','大众点评评分待核验','人均¥70-120','评价关键词：菠萝油、选择多']],
    fun: [['上剧场','看戏剧后可在徐家汇吃饭续摊。','剧场','演出','大众点评评分待核验','票价依演出','评价关键词：剧场感、内容好'],['百丽宫影城（环贸iapm）','适合电影+餐饮一站式。','影院','商场','大众点评评分待核验','人均¥70-120','评价关键词：环境好、片源多']]
  },
  jingan: {
    indoor: [['上海展览中心','常有展会市集，适合主题型聚会。','展会','市集','大众点评评分待核验','票价依活动','评价关键词：建筑、展会、复古'],['百美汇影城（嘉里中心）','高品质影院，适合电影局。','影院','商圈','大众点评评分待核验','人均¥80-140','评价关键词：座椅、环境、交通']],
    outdoor: [['张园','石库门新地标，适合拍照与下午茶。','石库门','新地标','大众点评评分待核验','免费','评价关键词：建筑、拍照、精致'],['静安雕塑公园','自然博物馆旁，适合看展后散步。','公园','艺术','大众点评评分待核验','免费','评价关键词：安静、绿地、雕塑']],
    food: [['蟹榭（南京西路）','适合想吃蟹粉、本帮风味的朋友。','本帮菜','蟹粉','大众点评评分待核验','人均¥160-300','评价关键词：蟹粉、精致'],['桂满陇（静安嘉里中心）','江浙菜环境友好，适合多人聚餐。','江浙菜','商场','大众点评评分待核验','人均¥100-170','评价关键词：环境、菜品稳定']],
    fun: [['Modern Sky LAB 上海','Livehouse 氛围浓，适合音乐朋友。','Livehouse','音乐','大众点评评分待核验','票价依演出','评价关键词：音效、现场'],['静安大悦城摩天轮','轻娱乐地标，适合拍照与约会局。','摩天轮','夜景','大众点评评分待核验','票价待核验','评价关键词：夜景、浪漫、出片']]
  },
  changning: {
    indoor: [['刘海粟美术馆','展览稳定，适合文艺型聚会。','美术馆','看展','大众点评评分待核验','免费/依展览','评价关键词：安静、展览质量'],['龙之梦城市生活中心','中山公园上盖商场，吃玩方便。','商场','地铁','大众点评评分待核验','人均¥80-150','评价关键词：交通、选择多']],
    outdoor: [['上生·新所','历史建筑更新街区，适合咖啡拍照。','街区','咖啡','大众点评评分待核验','免费','评价关键词：出片、咖啡、松弛'],['虹桥河滨公园','适合饭后散步和低成本聚会。','公园','散步','大众点评评分待核验','免费','评价关键词：安静、绿化']],
    food: [['平成屋（仙霞路）','日式居酒屋氛围，适合小酌。','日料','居酒屋','大众点评评分待核验','人均¥120-200','评价关键词：烧鸟、氛围'],['荣新馆（古北）','老牌日料，适合品质型聚餐。','日料','古北','大众点评评分待核验','人均¥200-350','评价关键词：刺身、服务、品质']],
    fun: [['育音堂音乐公园','长宁新音乐聚集点，适合看演出。','Livehouse','音乐','大众点评评分待核验','票价依演出','评价关键词：现场、年轻'],['上海影城 SHO','电影设备和选片适合影迷局。','影院','电影','大众点评评分待核验','人均¥70-130','评价关键词：影厅、片源']]
  },
  putuo: {
    indoor: [['长风海洋世界','室内海洋馆，适合轻松游玩。','海洋馆','亲子','大众点评评分待核验','票价¥180起','评价关键词：海洋生物、互动'],['近铁城市广场','吃饭、电影、购物一站式。','商场','真如','大众点评评分待核验','人均¥80-160','评价关键词：便利、餐饮多']],
    outdoor: [['半马苏河公园','苏州河边城市更新路线。','公园','河岸','大众点评评分待核验','免费','评价关键词：散步、骑行'],['桃浦中央绿地','适合天气好时野餐散步。','绿地','野餐','大众点评评分待核验','免费','评价关键词：开阔、绿化']],
    food: [['哥老官（环球港）','火锅聚餐容错率高。','火锅','商场','大众点评评分待核验','人均¥130-220','评价关键词：牛蛙、热闹'],['西贝莜面村（环球港）','适合多人家庭式聚餐。','西北菜','聚餐','大众点评评分待核验','人均¥90-150','评价关键词：稳定、分量']],
    fun: [['星聚会 KTV（环球港）','商场内唱歌续摊方便。','KTV','续摊','大众点评评分待核验','人均¥100-220','评价关键词：包厢、曲库'],['长风大悦城密室/剧本杀','适合沉浸式朋友局。','剧本杀','密室','大众点评评分待核验','人均¥120-260','评价关键词：剧情、互动']]
  },
  hongkou: {
    indoor: [['上海邮政博物馆','建筑和历史都适合轻看展。','博物馆','建筑','大众点评评分待核验','免费/待核验','评价关键词：建筑、历史'],['今潮8弄','室内外街区结合，拍照与餐饮方便。','街区','新地标','大众点评评分待核验','免费','评价关键词：出片、街区']],
    outdoor: [['甜爱路','适合轻松拍照和情侣朋友局。','街区','拍照','大众点评评分待核验','免费','评价关键词：浪漫、短路线'],['和平公园','适合饭前饭后低成本活动。','公园','散步','大众点评评分待核验','免费','评价关键词：安静、社区']],
    food: [['TapaTapa（白玉兰广场）','西班牙小食和微醺氛围。','西餐','微醺','大众点评评分待核验','人均¥160-260','评价关键词：Tapas、氛围'],['老盛昌汤包馆（四川北路）','快捷小吃，适合轻量集合。','小吃','汤包','大众点评评分待核验','人均¥25-50','评价关键词：汤包、实惠']],
    fun: [['瑞虹天地月亮湾娱乐','餐饮、影院、酒吧组合。','商圈','影院','大众点评评分待核验','人均¥100-220','评价关键词：选择多、年轻'],['北外滩来福士酒吧餐厅','江景晚餐后续摊方便。','酒吧','江景','大众点评评分待核验','人均¥150-300','评价关键词：夜景、氛围']]
  },
  yangpu: {
    indoor: [['寰映影城（合生汇）','五角场电影+吃饭很方便。','影院','商圈','大众点评评分待核验','人均¥70-130','评价关键词：交通、座椅'],['互联宝地创意园','适合咖啡、展览和轻办公式聚会。','园区','咖啡','大众点评评分待核验','人均¥50-120','评价关键词：安静、园区']],
    outdoor: [['黄兴公园','适合草坪、散步和低成本聚会。','公园','草坪','大众点评评分待核验','免费','评价关键词：大、绿化'],['复旦大学周边','大学氛围 Citywalk，餐饮密集。','校园周边','散步','大众点评评分待核验','免费','评价关键词：年轻、书卷气']],
    food: [['绍兴饭店（控江路）','本帮家常菜，适合小聚。','本帮菜','家常','大众点评评分待核验','人均¥80-140','评价关键词：家常、实惠'],['桂满陇（合生汇）','江浙菜聚餐稳定选择。','江浙菜','商场','大众点评评分待核验','人均¥100-170','评价关键词：环境、稳定']],
    fun: [['万达影城（五角场）','电影后可直接聚餐续摊。','影院','商圈','大众点评评分待核验','人均¥60-120','评价关键词：便利、片源'],['大学路清吧集合','适合聊天型夜间局。','清吧','大学路','大众点评评分待核验','人均¥90-180','评价关键词：轻松、年轻']]
  },
  pudong: {
    indoor: [['上海海洋水族馆','室内观赏强，适合半日轻游。','水族馆','亲子','大众点评评分待核验','票价¥160起','评价关键词：海底隧道、亲子'],['teamLab 无界美术馆','沉浸式光影，适合拍照互动。','沉浸展','拍照','大众点评评分待核验','票价待核验','评价关键词：光影、出片']],
    outdoor: [['前滩休闲公园','草坪、江景和商圈组合。','公园','前滩','大众点评评分待核验','免费','评价关键词：开阔、江景'],['上海野生动物园','全天型户外路线。','动物园','全天','大众点评评分待核验','票价¥165起','评价关键词：动物、亲子']],
    food: [['甬府（陆家嘴）','品质型宁波菜，适合预算较高聚餐。','宁波菜','品质','大众点评评分待核验','人均¥300+','评价关键词：海鲜、精致'],['桂满陇（陆家嘴中心）','商场聚餐稳定选择。','江浙菜','商场','大众点评评分待核验','人均¥100-170','评价关键词：环境、稳定']],
    fun: [['东方明珠高空观景','地标型活动，适合外地朋友。','观景','地标','大众点评评分待核验','票价¥199起','评价关键词：夜景、地标'],['前滩太古里夜逛','餐酒、购物、拍照路线成熟。','夜逛','商圈','大众点评评分待核验','人均¥120-300','评价关键词：高级感、出片']]
  },
  minhang: {
    indoor: [['宝龙美术馆','艺术展与七宝商圈组合。','美术馆','看展','大众点评评分待核验','票价依展览','评价关键词：展览、空间'],['Powerlong Museum 周边商圈','看展后吃饭续摊方便。','商圈','看展','大众点评评分待核验','人均¥80-180','评价关键词：便利、选择多']],
    outdoor: [['韩湘水博园','小众园林与水景。','园林','小众','大众点评评分待核验','票价待核验','评价关键词：安静、拍照'],['锦江乐园','经典游乐园，适合怀旧朋友局。','乐园','游乐','大众点评评分待核验','票价待核验','评价关键词：摩天轮、怀旧']],
    food: [['青鹤谷（虹泉路）','韩餐聚会热门，适合多人烤肉。','韩餐','烤肉','大众点评评分待核验','人均¥120-200','评价关键词：烤肉、韩式氛围'],['耶里夏丽（爱琴海）','新疆菜大盘分享，适合朋友聚餐。','新疆菜','商场','大众点评评分待核验','人均¥100-160','评价关键词：分量、热闹']],
    fun: [['闵行文化公园飞盘/露营','户外社交强，适合白天局。','飞盘','露营','大众点评评分待核验','人均依装备','评价关键词：草坪、互动'],['七宝宝龙城 KTV/密室','吃完七宝老街后续摊方便。','KTV','密室','大众点评评分待核验','人均¥100-240','评价关键词：方便、娱乐多']]
  },
  baoshan: {
    indoor: [['上海木文化博物馆','小众博物馆，适合安静探索。','博物馆','小众','大众点评评分待核验','票价待核验','评价关键词：小众、知识'],['龙湖宝山天街','北上海商圈，餐饮娱乐集中。','商场','聚餐','大众点评评分待核验','人均¥80-160','评价关键词：选择多、停车']],
    outdoor: [['上海淞沪抗战纪念公园','历史主题散步路线。','公园','历史','大众点评评分待核验','免费','评价关键词：历史、安静'],['罗店古镇','老街水乡感，适合慢逛。','古镇','水乡','大众点评评分待核验','免费','评价关键词：小众、慢节奏']],
    food: [['海底捞（宝山万达）','多人聚餐容错率高。','火锅','商场','大众点评评分待核验','人均¥110-180','评价关键词：服务、稳定'],['新发现（宝山日月光）','江浙家常菜，适合朋友家庭局。','江浙菜','商场','大众点评评分待核验','人均¥80-140','评价关键词：家常、选择多']],
    fun: [['顾村公园烧烤/露营点','天气好时适合大团活动。','烧烤','露营','大众点评评分待核验','人均依装备','评价关键词：草坪、户外'],['宝山日月光影院/KTV','北上海续摊备选。','影院','KTV','大众点评评分待核验','人均¥80-180','评价关键词：便利、套餐']]
  },
  jiading: {
    indoor: [['南翔印象城 MEGA','大体量商场，吃喝玩乐完整。','商场','一站式','大众点评评分待核验','人均¥80-180','评价关键词：大、选择多'],['嘉定博物馆','小而稳的文化路线。','博物馆','文化','大众点评评分待核验','免费/待核验','评价关键词：安静、历史']],
    outdoor: [['秋霞圃','江南园林，适合拍照慢逛。','园林','古典','大众点评评分待核验','票价待核验','评价关键词：园林、小众'],['紫藤园','花季适合出片，非花季可散步。','公园','花季','大众点评评分待核验','免费/待核验','评价关键词：花季、拍照']],
    food: [['古猗园餐厅','南翔小笼经典选择。','小笼','老字号','大众点评评分待核验','人均¥50-100','评价关键词：小笼、老牌'],['西贝莜面村（南翔印象城）','多人聚餐稳定。','西北菜','商场','大众点评评分待核验','人均¥90-150','评价关键词：分量、稳定']],
    fun: [['上海赛车场卡丁车体验','速度主题，适合高能朋友局。','卡丁车','速度','大众点评评分待核验','人均¥150-300','评价关键词：刺激、体验'],['南翔印象城密室/KTV','逛吃后续摊方便。','密室','KTV','大众点评评分待核验','人均¥100-240','评价关键词：一站式、方便']]
  },
  qingpu: {
    indoor: [['青浦奥特莱斯','购物+餐饮，适合周末半日。','购物','奥莱','大众点评评分待核验','人均依消费','评价关键词：品牌、折扣'],['蟠龙天地茑屋书店','书店、咖啡和街区拍照组合。','书店','咖啡','大众点评评分待核验','人均¥50-120','评价关键词：空间、出片']],
    outdoor: [['大观园','古典园林主题，适合拍照慢游。','园林','古风','大众点评评分待核验','票价待核验','评价关键词：古风、园林'],['寻梦源梦水乡','花海和亲水景观，适合拍照。','花海','水乡','大众点评评分待核验','票价待核验','评价关键词：花海、拍照']],
    food: [['放鹤洲（朱家角）','水乡环境型餐厅，适合古镇聚餐。','本帮菜','水乡','大众点评评分待核验','人均¥100-180','评价关键词：环境、水乡'],['蔡澜港式点心（蟠龙天地）','适合轻松小聚和拍照逛街。','港式','点心','大众点评评分待核验','人均¥80-140','评价关键词：点心、环境']],
    fun: [['东方绿舟皮划艇/拓展','适合团建和户外互动。','拓展','皮划艇','大众点评评分待核验','人均依项目','评价关键词：互动、户外'],['蟠龙天地夜间餐酒','拍照、餐酒、散步一条线。','餐酒','夜逛','大众点评评分待核验','人均¥120-260','评价关键词：氛围、夜景']]
  },
  songjiang: {
    indoor: [['上海世茂精灵之城主题乐园','亲子与主题体验，适合全天局。','主题乐园','室内外','大众点评评分待核验','票价待核验','评价关键词：主题、亲子'],['云间粮仓文创园','咖啡、展览、拍照组合。','文创园','咖啡','大众点评评分待核验','人均¥50-150','评价关键词：文艺、出片']],
    outdoor: [['佘山国家森林公园','爬山与自然路线，适合轻运动。','森林','爬山','大众点评评分待核验','免费/待核验','评价关键词：自然、轻运动'],['月湖雕塑公园','草坪、雕塑和露营感。','公园','艺术','大众点评评分待核验','票价待核验','评价关键词：草坪、雕塑']],
    food: [['佘山茂御臻品之选酒店自助/餐厅','适合预算较高的度假感聚餐。','酒店餐厅','度假','大众点评评分待核验','人均¥200-400','评价关键词：环境、度假'],['大学城烧烤火锅集合','年轻实惠，适合大桌朋友局。','烧烤','火锅','大众点评评分待核验','人均¥80-150','评价关键词：热闹、实惠']],
    fun: [['欢乐谷夜场','高能游乐园路线。','乐园','夜场','大众点评评分待核验','票价依日期','评价关键词：刺激、排队'],['佘山露营骑行','适合户外型朋友局。','露营','骑行','大众点评评分待核验','人均依装备','评价关键词：自然、放松']]
  },
  jinshan: {
    indoor: [['枫泾丁蹄非遗体验点','古镇手作和地方风味结合。','非遗','手作','大众点评评分待核验','人均¥30-80','评价关键词：地方特色、手作'],['金山嘴渔村展馆','海渔文化，适合海边路线补充。','展馆','渔村','大众点评评分待核验','票价待核验','评价关键词：渔村、文化']],
    outdoor: [['金山嘴渔村','海边渔村、餐饮和拍照路线。','渔村','海边','大众点评评分待核验','免费/待核验','评价关键词：海风、渔村'],['花开海上生态园','花海拍照，适合季节性出游。','花海','拍照','大众点评评分待核验','票价待核验','评价关键词：花海、季节']],
    food: [['金山嘴渔村海鲜餐厅','海鲜主题明确，适合开车聚餐。','海鲜','渔村','大众点评评分待核验','人均¥120-250','评价关键词：海鲜、海边'],['枫泾丁蹄老店','地方特色小吃，适合古镇路线。','本地菜','古镇','大众点评评分待核验','人均¥50-100','评价关键词：丁蹄、古镇']],
    fun: [['城市沙滩飞盘/沙排','夏季户外互动强。','沙排','飞盘','大众点评评分待核验','人均依装备','评价关键词：海边、运动'],['枫泾古镇夜游','古镇夜色与小吃慢逛。','夜游','古镇','大众点评评分待核验','人均¥50-120','评价关键词：慢节奏、小吃']]
  },
  fengxian: {
    indoor: [['奉贤宝龙广场','餐饮、影院、亲子娱乐集中。','商场','影院','大众点评评分待核验','人均¥80-160','评价关键词：便利、选择多'],['言子书院/城市书房路线','适合安静聊天和轻阅读。','书房','安静','大众点评评分待核验','免费/待核验','评价关键词：安静、空间']],
    outdoor: [['古华公园','南桥老牌公园，饭后散步友好。','公园','散步','大众点评评分待核验','免费','评价关键词：本地、安静'],['奉贤海湾旅游区','海风、沙滩和露营路线。','海湾','户外','大众点评评分待核验','免费/依项目','评价关键词：海风、周末']],
    food: [['海底捞（南桥百联）','多人火锅局容错率高。','火锅','商场','大众点评评分待核验','人均¥110-180','评价关键词：服务、稳定'],['南桥老街本帮小馆','本地口味，适合轻松聚餐。','本帮菜','本地','大众点评评分待核验','人均¥70-130','评价关键词：家常、实惠']],
    fun: [['九棵树未来艺术中心演出','建筑美、演出感强。','演出','剧院','大众点评评分待核验','票价依演出','评价关键词：建筑、剧场'],['海湾森林公园露营烧烤','适合大团周末局。','露营','烧烤','大众点评评分待核验','人均依装备','评价关键词：森林、户外']]
  },
  chongming: {
    indoor: [['崇明学宫','历史文化点，适合轻量参观。','历史','文化','大众点评评分待核验','票价待核验','评价关键词：历史、安静'],['长兴岛前卫农场体验馆','农场主题活动，适合团队互动。','农场','体验','大众点评评分待核验','人均依项目','评价关键词：农场、互动']],
    outdoor: [['东滩湿地公园','观鸟、湿地和自然感强。','湿地','观鸟','大众点评评分待核验','票价待核验','评价关键词：自然、观鸟'],['前卫生态村','农家乐和乡村体验。','乡村','农家乐','大众点评评分待核验','免费/依项目','评价关键词：农家、放松']],
    food: [['前卫村农家乐','崇明糕、土鸡和本地蔬菜。','农家菜','本地','大众点评评分待核验','人均¥100-180','评价关键词：土鸡、蔬菜'],['崇明糕老店','适合伴手礼和小吃补给。','小吃','伴手礼','大众点评评分待核验','人均¥20-60','评价关键词：崇明糕、地方特色']],
    fun: [['东平森林公园骑行租赁','森林骑行互动强。','骑行','森林','大众点评评分待核验','人均依租赁','评价关键词：空气好、骑行'],['西沙湿地日落局','适合拍照和放空。','日落','湿地','大众点评评分待核验','免费/待核验','评价关键词：日落、湿地']]
  }
};

const sceneTop10Templates = {
  indoor: [
    ['密室逃脱 TOP1','适合 4-8 人沉浸式互动，优先推荐该区密室场景第一选择。','密室','场景TOP1','大众点评评分待核验','人均¥120-260','评价关键词：剧情、互动、组队'],
    ['新奇体验 TOP1','如漂浮馆、减压馆、VR 体验等，适合想玩点不一样的朋友。','新奇体验','场景TOP1','大众点评评分待核验','人均¥120-300','评价关键词：新鲜感、体验、出片'],
    ['桌游馆 TOP1','适合低预算多人局，方便聊天破冰。','桌游','场景TOP1','大众点评评分待核验','人均¥50-100','评价关键词：轻松、多人、聊天'],
    ['剧本杀 TOP1','适合熟人局和沉浸推理局。','剧本杀','场景TOP1','大众点评评分待核验','人均¥120-220','评价关键词：推理、沉浸、社交'],
    ['电玩城 TOP1','适合轻竞技、抓娃娃、音游和快速破冰。','电玩城','场景TOP1','大众点评评分待核验','人均¥80-180','评价关键词：互动、轻松、竞技'],
    ['保龄球/台球 TOP1','适合饭前饭后轻运动。','保龄球台球','场景TOP1','大众点评评分待核验','人均¥80-180','评价关键词：轻运动、组队'],
    ['看展/美术馆 TOP1','适合文艺型聚会和雨天路线。','看展','场景TOP1','大众点评评分待核验','票价依展览','评价关键词：文艺、拍照、安静'],
    ['影院 TOP1','电影后直接聚餐续摊，决策成本低。','影院','场景TOP1','大众点评评分待核验','人均¥60-120','评价关键词：稳定、轻松、好约'],
    ['手作体验 TOP1','适合陶艺、香薰、银饰等互动体验。','手作','场景TOP1','大众点评评分待核验','人均¥120-280','评价关键词：互动、纪念感'],
    ['商场一站式 TOP1','适合天气不稳定时吃喝玩乐一次解决。','商场','场景TOP1','大众点评评分待核验','人均/票价待核验','评价关键词：选择多、交通方便']
  ],
  outdoor: [
    ['Citywalk TOP1','适合拍照、咖啡和饭后散步串联。','Citywalk','场景TOP1','大众点评评分待核验','免费/低消费','评价关键词：散步、出片、松弛'],
    ['公园野餐 TOP1','适合草坪、飞盘和低成本聚会。','公园野餐','场景TOP1','大众点评评分待核验','免费/依项目','评价关键词：草坪、户外、放松'],
    ['滨江夜景 TOP1','适合傍晚和夜景路线。','滨江夜景','场景TOP1','大众点评评分待核验','免费','评价关键词：夜景、散步、拍照'],
    ['古镇老街 TOP1','适合半日慢逛和小吃路线。','古镇老街','场景TOP1','大众点评评分待核验','费用待核验','评价关键词：慢逛、小吃、文化'],
    ['历史建筑 TOP1','适合轻文化路线和咖啡小店。','历史建筑','场景TOP1','大众点评评分待核验','免费/低消费','评价关键词：建筑、咖啡、慢逛'],
    ['亲水湖景 TOP1','适合看湖、骑行和周末放空。','湖景','场景TOP1','大众点评评分待核验','免费/依项目','评价关键词：湖景、骑行、放松'],
    ['森林郊野 TOP1','适合露营、骑行和自然路线。','森林郊野','场景TOP1','大众点评评分待核验','费用待核验','评价关键词：自然、露营、空气好'],
    ['花园植物 TOP1','适合花季拍照和轻户外。','花园植物','场景TOP1','大众点评评分待核验','票价待核验','评价关键词：花季、拍照、轻松'],
    ['运动户外 TOP1','适合飞盘、骑行、皮划艇等互动局。','运动户外','场景TOP1','大众点评评分待核验','人均依项目','评价关键词：互动、运动、组队'],
    ['周末打卡 TOP1','适合半日游和朋友圈拍照。','周末打卡','场景TOP1','大众点评评分待核验','费用待核验','评价关键词：热门、出片、好逛']
  ],
  food: [
    ['本帮菜 TOP1','适合体验上海味道，优先推荐该区本帮菜第一选择。','本帮菜','菜系TOP1','大众点评评分待核验','人均¥100-220','评价关键词：本帮、经典、聚餐'],
    ['火锅 TOP1','多人聚餐容错率高，口味接受度广。','火锅','菜系TOP1','大众点评评分待核验','人均¥120-220','评价关键词：热闹、服务、适合多人'],
    ['日料 TOP1','适合小桌精致聚餐或居酒屋小酌。','日料','菜系TOP1','大众点评评分待核验','人均¥150-350','评价关键词：刺身、烧鸟、品质'],
    ['韩餐 TOP1','适合烤肉、部队锅和热闹朋友局。','韩餐','菜系TOP1','大众点评评分待核验','人均¥100-200','评价关键词：烤肉、韩式、热闹'],
    ['西餐 TOP1','适合约会感、仪式感和轻奢晚餐。','西餐','菜系TOP1','大众点评评分待核验','人均¥180-350','评价关键词：氛围、摆盘、约会'],
    ['粤菜/港式 TOP1','适合口味稳妥、点心和多人分享。','粤菜港式','菜系TOP1','大众点评评分待核验','人均¥100-220','评价关键词：点心、稳妥、分享'],
    ['江浙菜 TOP1','适合环境友好、菜品稳定的聚餐。','江浙菜','菜系TOP1','大众点评评分待核验','人均¥100-180','评价关键词：环境、稳定、聚餐'],
    ['烧烤/烤肉 TOP1','适合夜宵和聊天续摊。','烧烤烤肉','菜系TOP1','大众点评评分待核验','人均¥100-180','评价关键词：夜宵、热闹、朋友局'],
    ['咖啡甜品 TOP1','适合下午茶和轻量约见。','咖啡甜品','菜系TOP1','大众点评评分待核验','人均¥50-100','评价关键词：拍照、聊天、轻松'],
    ['小吃夜市 TOP1','适合边走边吃、预算友好的烟火气路线。','小吃夜市','菜系TOP1','大众点评评分待核验','人均¥30-100','评价关键词：烟火气、小吃、实惠']
  ],
  fun: [
    ['KTV TOP1','适合生日局和饭后续摊。','KTV','场景TOP1','大众点评评分待核验','人均¥100-240','评价关键词：包厢、曲库、热闹'],
    ['清吧 TOP1','适合聊天型夜间聚会。','清吧','场景TOP1','大众点评评分待核验','人均¥100-220','评价关键词：氛围、聊天、音乐'],
    ['Livehouse TOP1','适合音乐朋友和夜间活动。','Livehouse','场景TOP1','大众点评评分待核验','票价依演出','评价关键词：现场、音效、年轻'],
    ['脱口秀/剧场 TOP1','适合轻松观演和饭后安排。','脱口秀剧场','场景TOP1','大众点评评分待核验','票价依演出','评价关键词：好笑、观演、轻松'],
    ['酒吧夜景 TOP1','适合微醺和城市夜景。','酒吧夜景','场景TOP1','大众点评评分待核验','人均¥150-350','评价关键词：夜景、氛围、微醺'],
    ['夜游路线 TOP1','适合晚餐后散步、拍照和续摊。','夜游','场景TOP1','大众点评评分待核验','人均依消费','评价关键词：夜景、松弛、续摊'],
    ['轰趴馆 TOP1','适合大团、生日、桌游和唱歌混合局。','轰趴','场景TOP1','大众点评评分待核验','人均¥150-300','评价关键词：大团、生日、私密'],
    ['卡丁车/运动娱乐 TOP1','适合高能朋友局。','运动娱乐','场景TOP1','大众点评评分待核验','人均¥150-300','评价关键词：刺激、竞技、组队'],
    ['密室/鬼屋娱乐 TOP1','适合想要刺激和互动的朋友。','刺激娱乐','场景TOP1','大众点评评分待核验','人均¥120-260','评价关键词：刺激、互动、沉浸'],
    ['商圈续摊 TOP1','适合晚餐后临时决定，选择丰富。','商圈续摊','场景TOP1','大众点评评分待核验','人均依消费','评价关键词：方便、选择多、稳妥']
  ]
};

function createBackfillItem(district, category, index) {
  const template = sceneTop10Templates[category.key][index % sceneTop10Templates[category.key].length];
  const sceneName = template[0].replace(' TOP1', '');
  const name = `${district.name}${sceneName}`;
  return [name, ...template.slice(1), '内置场景TOP1'];
}

function enrichTop10Data() {
  baseDistricts.forEach(district => {
    categories.forEach(category => {
      district.data[category.key] = sceneTop10Templates[category.key].map((_, index) => {
        const enriched = createBackfillItem(district, category, index);
        if (!enriched[4]) enriched[4] = '大众点评评分待核验';
        if (!enriched[5]) enriched[5] = category.key === 'outdoor' ? '门票/费用待核验' : '人均/票价待核验';
        if (!enriched[6]) enriched[6] = `评价关键词：${enriched[2]}、${enriched[3]}、适合聚会`;
        if (!enriched[7]) enriched[7] = '内置场景TOP1';
        return enriched;
      });
    });
  });
}

enrichTop10Data();

let currentDistrict = 'huangpu';
let currentCategory = 'indoor';
let currentSelections = new Set();
let votes = JSON.parse(localStorage.getItem('meetupVotes') || '[]');

const mapEl = document.querySelector('#districtMap');
const stripEl = document.querySelector('#districtStrip');
const tabsEl = document.querySelector('#categoryTabs');
const cardsEl = document.querySelector('#cards');
const nameEl = document.querySelector('#currentDistrictName');
const sourceStatusEl = document.querySelector('#sourceStatus');
const POI_API_BASE = 'https://test-d0ggtarpjab557c0b-1472173087.ap-shanghai.app.tcloudbase.com';

function keyOf(district, category, index) { return `${district}|${category}|${index}`; }
function getDistrict(id) { return baseDistricts.find(d => d.id === id); }
function getItemFromKey(key) {
  const [districtId, categoryKey, index] = key.split('|');
  const district = getDistrict(districtId);
  const category = categories.find(c => c.key === categoryKey);
  const item = district?.data?.[categoryKey]?.[Number(index)];
  return item ? { district, category, item } : null;
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function setSourceStatus(message) {
  if (sourceStatusEl) sourceStatusEl.textContent = message;
}

async function loadLivePoi() {
  const district = getDistrict(currentDistrict);
  const category = categories.find(c => c.key === currentCategory);
  setSourceStatus(`正在通过服务端代理加载：${district.name} / ${category.label} ...`);
  try {
    const params = new URLSearchParams({ district: district.name, category: currentCategory });
    const response = await fetch(`${POI_API_BASE}/api/v1/poi?${params.toString()}`);
    if (!response.ok) throw new Error(`proxy status ${response.status}`);
    const data = await response.json();
    const items = (data.items || []).map(item => [
      item.name,
      item.description,
      item.scene,
      item.rank_type,
      item.rating,
      item.cost,
      item.review_note,
      item.source
    ]);
    if (!items.length) {
      setSourceStatus(`服务端暂未返回 ${district.name} / ${category.label} 的可用结果，已保留内置推荐。`);
      toast('未获取到可用 POI，已保留内置推荐');
      return;
    }
    district.data[currentCategory] = items.slice(0, 10);
    currentSelections.clear();
    renderCards();
    renderStats();
    renderMap();
    setSourceStatus(`${data.message || '已通过服务端代理返回场景化 POI。'}朋友无需输入 Key，Key 不会出现在前端。`);
    if (data.source !== 'fallback') toast('服务端真实 POI 已加载');
  } catch (error) {
    console.error(error);
    setSourceStatus('服务端代理加载失败，当前保留内置场景 TOP1 推荐。');
    toast('服务端代理加载失败');
  }
}

function autoLoadLivePoi() {
  loadLivePoi();
}

function renderMap() {
  const districtCounts = countByDistrict();
  mapEl.innerHTML = '<defs><filter id="glow"><feGaussianBlur stdDeviation="3.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>';
  districts.filter(d => d.aliasOf).forEach(tile => {
    const id = tile.aliasOf;
    const count = districtCounts[id] || 0;
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.classList.add('district-node');
    if (id === currentDistrict) g.classList.add('active');
    if (count > 0) g.classList.add('hot');
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.dataset.id = id;
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', tile.x); rect.setAttribute('y', tile.y); rect.setAttribute('width', tile.w); rect.setAttribute('height', tile.h); rect.setAttribute('rx', 18);
    rect.style.fill = count > 0 ? `${tile.color}3b` : 'rgba(255,255,255,.08)';
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', tile.x + tile.w / 2); text.setAttribute('y', tile.y + tile.h / 2 - 2); text.setAttribute('text-anchor', 'middle');
    text.textContent = tile.name;
    const countText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    countText.setAttribute('x', tile.x + tile.w / 2); countText.setAttribute('y', tile.y + tile.h / 2 + 21); countText.setAttribute('text-anchor', 'middle'); countText.classList.add('count');
    countText.textContent = count ? `${count} 票` : '点击选择';
    g.append(rect, text, countText);
    g.addEventListener('click', () => selectDistrict(id));
    g.addEventListener('keydown', e => { if (e.key === 'Enter') selectDistrict(id); });
    mapEl.appendChild(g);
  });
}

function renderStrip() {
  stripEl.innerHTML = '';
  baseDistricts.forEach(d => {
    const btn = document.createElement('button');
    btn.className = `district-chip ${d.id === currentDistrict ? 'active' : ''}`;
    btn.textContent = d.name;
    btn.onclick = () => selectDistrict(d.id);
    stripEl.appendChild(btn);
  });
}

function renderTabs() {
  tabsEl.innerHTML = '';
  categories.forEach(c => {
    const btn = document.createElement('button');
    btn.className = `tab ${c.key === currentCategory ? 'active' : ''}`;
    btn.textContent = `${c.icon} ${c.label}`;
    btn.onclick = () => { currentCategory = c.key; renderAll(); autoLoadLivePoi(); };
    tabsEl.appendChild(btn);
  });
}

function renderCards() {
  const district = getDistrict(currentDistrict);
  nameEl.textContent = district.name;
  cardsEl.innerHTML = '';
  district.data[currentCategory].forEach((item, index) => {
    const id = keyOf(currentDistrict, currentCategory, index);
    const label = document.createElement('label');
    label.className = 'card';
    const safe = item.map(escapeHtml);
    const sourceBadge = safe[7] ? `<span>${safe[7]}</span>` : '';
    label.innerHTML = `<input type="checkbox" ${currentSelections.has(id) ? 'checked' : ''}/><h3>TOP${index + 1} · ${safe[0]}</h3><p>${safe[1]}</p><div class="meta-row"><span>⭐ ${safe[4]}</span><span>${safe[5]}</span></div><div class="review-note">${safe[6]}</div><div class="tags"><span>${safe[2]}</span><span>${safe[3]}</span><span>${escapeHtml(categories.find(c => c.key === currentCategory).label)}</span>${sourceBadge}</div>`;
    label.querySelector('input').onchange = e => {
      e.target.checked ? currentSelections.add(id) : currentSelections.delete(id);
      renderStats();
      renderMap();
    };
    cardsEl.appendChild(label);
  });
}

function selectDistrict(id) { currentDistrict = id; renderAll(); autoLoadLivePoi(); }
function countByDistrict() {
  const counts = {};
  votes.flatMap(v => v.items).concat([...currentSelections]).forEach(k => {
    const info = getItemFromKey(k);
    if (info) counts[info.district.id] = (counts[info.district.id] || 0) + 1;
  });
  return counts;
}

function renderStats() {
  const allKeys = votes.flatMap(v => v.items).concat([...currentSelections]);
  document.querySelector('#heroSelectedCount').textContent = allKeys.length;
  document.querySelector('#statPeople').textContent = votes.length;
  document.querySelector('#statItems').textContent = allKeys.length;
  const itemCounts = {};
  allKeys.forEach(k => itemCounts[k] = (itemCounts[k] || 0) + 1);
  const ranking = Object.entries(itemCounts).sort((a,b) => b[1] - a[1]).slice(0, 6);
  const rankingEl = document.querySelector('#rankingList');
  if (!ranking.length) {
    rankingEl.className = 'ranking-list empty';
    rankingEl.textContent = '暂无数据';
    document.querySelector('#winnerText').textContent = '还没有选择';
    document.querySelector('#winnerSub').textContent = '先从地图上选一个区域开始吧。';
  } else {
    rankingEl.className = 'ranking-list';
    rankingEl.innerHTML = ranking.map(([k, count], i) => {
      const info = getItemFromKey(k);
      return `<div class="rank-item"><strong>${i + 1}. ${escapeHtml(info.item[0])} · ${count} 票</strong><span>${escapeHtml(info.district.name)} / ${escapeHtml(info.category.label)} / ${escapeHtml(info.item[2])}</span></div>`;
    }).join('');
    const top = getItemFromKey(ranking[0][0]);
    document.querySelector('#winnerText').textContent = `${top.item[0]}（${ranking[0][1]} 票）`;
    document.querySelector('#winnerSub').textContent = `${top.district.name} · ${top.category.label}。${top.item[1]}`;
  }
  const dCounts = countByDistrict();
  const max = Math.max(1, ...Object.values(dCounts));
  const districtStats = Object.entries(dCounts).sort((a,b) => b[1]-a[1]).slice(0, 8);
  const dEl = document.querySelector('#districtStats');
  if (!districtStats.length) { dEl.className = 'bar-list empty'; dEl.textContent = '暂无数据'; }
  else {
    dEl.className = 'bar-list';
    dEl.innerHTML = districtStats.map(([id, count]) => `<div class="bar"><div class="bar-label"><span>${getDistrict(id).name}</span><span>${count} 票</span></div><div class="bar-track"><div class="bar-fill" style="width:${count / max * 100}%"></div></div></div>`).join('');
  }
}

function renderAll() { renderMap(); renderStrip(); renderTabs(); renderCards(); renderStats(); }
function toast(msg) {
  const el = document.createElement('div'); el.className = 'toast'; el.textContent = msg; document.body.appendChild(el);
  setTimeout(() => el.remove(), 2100);
}

document.querySelector('#saveVoter').onclick = () => {
  if (!currentSelections.size) return toast('请至少勾选 1 个想玩的内容');
  const name = document.querySelector('#voterName').value.trim() || `朋友${votes.length + 1}`;
  votes.push({ name, items: [...currentSelections] });
  localStorage.setItem('meetupVotes', JSON.stringify(votes));
  currentSelections.clear(); document.querySelector('#voterName').value = '';
  renderAll(); toast(`${name} 的选择已保存`);
};

document.querySelector('#resetAll').onclick = () => {
  if (!confirm('确定清空所有选择和统计吗？')) return;
  votes = []; currentSelections.clear(); localStorage.removeItem('meetupVotes'); renderAll(); toast('已清空');
};

document.querySelector('#copySummary').onclick = async () => {
  const ranking = Object.entries([...votes.flatMap(v => v.items), ...currentSelections].reduce((acc, k) => (acc[k]=(acc[k]||0)+1, acc), {})).sort((a,b) => b[1]-a[1]).slice(0,10);
  const text = ranking.length ? ranking.map(([k,c], i) => { const info = getItemFromKey(k); return `${i+1}. ${info.item[0]}｜${info.district.name}｜${info.category.label}｜${c}票`; }).join('\n') : '暂无聚会选择结果';
  await navigator.clipboard.writeText(`上海朋友聚会选择结果\n${text}`);
  toast('统计摘要已复制');
};

document.querySelector('#refreshPoi').onclick = () => loadLivePoi();

async function refreshConfigStatus() {
  try {
    const response = await fetch(`${POI_API_BASE}/api/v1/config/status`);
    if (!response.ok) throw new Error(`status ${response.status}`);
    const data = await response.json();
    const label = data.configured ? `已配置（${data.source === 'env' ? '环境变量' : '管理员页面'}）` : '尚未配置';
    setSourceStatus(`服务端代理已启用：高德 Key ${label}。朋友打开链接无需输入 Key，页面会通过后端获取高德 POI。`);
  } catch (error) {
    console.error(error);
    setSourceStatus('服务端代理已启用，但暂时无法读取配置状态；可直接刷新真实 POI 测试。');
  }
}

document.querySelector('#scrollToPlanner').onclick = () => document.querySelector('#planner').scrollIntoView({ behavior: 'smooth' });
document.querySelector('#loadDemo').onclick = () => {
  votes = [
    { name: '阿宇', items: ['huangpu|outdoor|0','jingan|food|0','xuhui|fun|1'] },
    { name: 'Mia', items: ['huangpu|outdoor|0','xuhui|outdoor|0','pudong|food|0'] },
    { name: 'Leo', items: ['jingan|food|0','changning|fun|0','huangpu|indoor|1'] }
  ];
  localStorage.setItem('meetupVotes', JSON.stringify(votes));
  renderAll(); toast('已载入示例投票');
};

renderAll();
refreshConfigStatus();
autoLoadLivePoi();
