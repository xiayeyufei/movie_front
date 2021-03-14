<template>
    <div>
<!--      <img   src="file://D:/网课/云服务案例分析/Movie_Vue/ALL/movie_front/src/assets/loginPic.jpg">-->
<!--      <img src="../assets/185ca9e54910fd64a7b7a7704d62ff2f34ef7b3a.jpg@518w_1e_1c.jpg">-->
      <div >
        <el-row type="flex" justify="end" style="margin-bottom: 20px">
          <el-button plain type="primary" icon="el-icon-refresh" @click="productMovieList()">再来一批</el-button>
        </el-row>
        <el-row style="margin-bottom: 20px" v-for="movieitem in moviegroup" :key="movieitem.id">
            <el-card body-style="padding: 0" style="height: auto" >
                <el-row >
                    <el-col span="4">
<!--                        <img :src=movieitem.image-->
<!--                             :alt=movieitem.title-->
<!--                             style="background-size: cover;height: 220px">-->
<!--                      <img   src="http://localhost:3000/movie_front/src/assets/loginPic.jpg"-->
<!--                             alt=movieitem.title-->
<!--                             style="background-size: cover;height: 220px">-->
                      <img   :src=movieitem.image style="background-size: cover;height: 220px">
                    </el-col>
                    <el-col span="15" offset="1">
                        <el-row style="margin-top: 15px">
                            <h2 style="margin: 0 0">{{ movieitem.title }}</h2>
                        </el-row>
                        <el-row >
                          <v-chip  class="ma-2"
                                   color="pink"
                                   label
                                   text-color="white" v-for="tags in movieitem.tag" :key="tags" type="danger" round size="mini">{{ tags }}</v-chip>
                        </el-row>
                        <el-row >
                            <v-chip class="ma-2"
                                    color="primary"
                                    label
                            >
                              <v-icon left>
                                mdi-account-circle-outline
                              </v-icon>{{ movieitem.director }}</v-chip>
                        </el-row>
                        <el-row >
                              <v-chip  class="ma-2"
                                       color="primary"
                                       outlined
                                       pill size="small" style="margin-right: 5px" v-for="actoritem in movieitem.actor" :key="actoritem">{{actoritem}}</v-chip>
                        </el-row>
                        <el-row>
                            <p style="font-size: 16px;margin-bottom: 0px">{{ movieitem.country_time }}</p>
                        </el-row>
                        <el-row>
                            <p style="font-size: 16px;margin-bottom: 0px">{{ movieitem.date }}</p>
                        </el-row>
                    </el-col>
                    <el-col span="4" pull="1">
                        <el-row>
                            <span style="color: #ffb400;font-size: 40px;font-weight: 700;padding-left: 5px">{{movieitem.score}}</span>
                        </el-row>
                        <el-row>
                            <v-rating
                                    :value=movieitem.score/2.0
                                    medium
                                    background-color="orange lighten-3"
                                    color="orange"
                                    readonly
                                    length="5">
                            </v-rating>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <span style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 6;-webkit-box-orient: vertical;color: #475669;font-style: italic;font-size: small">{{movieitem.introduction}}</span>
                        </el-row>
                    </el-col>
                </el-row>
            </el-card>
        </el-row>
      </div>





    </div>
</template>

<script>
    export default {
        name: "Results",
        data() {
            return {
              imgSrc1:[],
              imgSrc2:[],
              imgSrc3:[],
              imgSrc4:[],
              imgSrc5:[],
              numList:[],

              movieData:[{
                id:1,
                title:'这个杀手不太冷 - Léon',
                image:'https://p1.meituan.net/movie/6bea9af4524dfbd0b668eaa7e187c3df767253.jpg@464w_644h_1e_1c',
                director:'吕克·贝松',
                tag:['剧情','动作','犯罪'],
                actor:['让·雷诺','娜塔丽·波特曼','加里·奥德曼'],
                score:'3.5',
                introduction:'里昂（让·雷诺 饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔德（纳塔丽·波特曼 饰）敲开他的房门……',
                country_time:'法国 / 110 分钟',
                date:'1994-09-14'
              },
                {
                  id:2,
                  title:'这个杀手不太冷 - Léon',
                  image:'https://p1.meituan.net/movie/6bea9af4524dfbd0b668eaa7e187c3df767253.jpg@464w_644h_1e_1c',
                  director:'吕克·贝松',
                  tag:['剧情','动作','犯罪'],
                  actor:['让·雷诺','娜塔丽·波特曼','加里·奥德曼'],
                  score:'4.5',
                  introduction:'里昂（让·雷诺 饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔德（纳塔丽·波特曼 饰）敲开他的房门……',
                  country_time:'法国 / 110 分钟',
                  date:'1994-09-14'
                },
                {
                  id:3,
                  title:'这个杀手不太冷 - Léon',
                  image:'https://p1.meituan.net/movie/6bea9af4524dfbd0b668eaa7e187c3df767253.jpg@464w_644h_1e_1c',
                  director:'吕克·贝松',
                  tag:['剧情','动作','犯罪'],
                  actor:['让·雷诺','娜塔丽·波特曼','加里·奥德曼'],
                  score:'4.5',
                  introduction:'里昂（让·雷诺 饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔德（纳塔丽·波特曼 饰）敲开他的房门……',
                  country_time:'法国 / 110 分钟',
                  date:'1994-09-14'
                },
                {
                  id:4,
                  title:'寻龙传说RayaandTheLastDragon',
                  image:require('../assets/MoviePic/4.jpg'),
                  director:'唐·霍尔/卡洛斯·洛佩斯·埃斯特拉达/保罗·布里格斯/约翰·瑞帕',
                  tag:['动画','奇幻','冒险'],
                  actor:['凯莉·玛丽·陈','奥卡菲娜','吴珊卓'],
                  score:'7.3',
                  introduction:'很久以前，在充满奇幻色彩的龙佑之邦，人类和龙和谐地生活在一起。但当一股邪恶的力量袭来，龙牺牲了自己来拯救人类。500年后，同样的邪恶力量卷土重来，只有一个孤独的战士拉雅（凯莉·玛丽·陈 配音）承担重任，追踪传说中的最后一条龙，以修复这块破碎的土地，团结分裂的人民。在她的旅程中，她也会逐渐了解到拯救世界不仅仅需要一条龙，还需要信任和团队合作。',
                  country_time:'美国/108分钟',
                  date:'2021-03-05'
                },

                {
                  id:5,
                  title:'猫和老鼠 Tom and Jerry',
                  image:require('../assets/MoviePic/5.jpg'),
                  director:'蒂姆·斯托瑞',
                  tag:['喜剧','动画','冒险'],
                  actor:[' 科洛·莫瑞兹',' 迈克尔·佩纳','郑肯'],
                  score:'5.4',
                  introduction:'“超杀女”科洛·莫瑞兹饰演的少女凯拉刚刚入职豪华大酒店，就碰上了叫人头疼的难题——杰瑞竟然想在酒店里定居，令酒店最近承接的世纪婚礼岌岌可危。于是，汤姆被凯拉雇佣成为酒店员工，目的是赶走杰瑞，这对欢喜冤家就此展开了一场你追我赶的爆笑喜剧。',
                  country_time:' 英国 / 法国 / 德国 / 美国/101分钟',
                  date:'2021-02-26'
                },

                {
                  id:6,
                  title:'骗骗爱上你',
                  image:require('../assets/MoviePic/6.jpg'),
                  director:'梅兹·塔拉',
                  tag:['喜剧','爱情'],
                  actor:['纳得克·库吉米亚','平采娜·乐维瑟派布恩',' 提顶·玛哈由踏纳'],
                  score:'7.0',
                  introduction:'天真的伊娜是一名银行员，在历经前男友卷款，并与小三私奔后，过着负债累累的辛苦生活，一场因缘际会下，意外认识了一个外表帅气却十分狡猾的骗子，然而伊娜并没有因此报警，反而决定雇用这名骗子，并对她的前男友展开报复行动，一场谍对谍的爆笑骗局，就此展开！',
                  country_time:'泰国',
                  date:'2020-12-03'
                },

                {
                  id:7,
                  title:'花束般的恋爱 花束みたいな恋をした',
                  image:require('../assets/MoviePic/7.jpg'),
                  director:'土井裕泰',
                  tag:['剧情','爱情'],
                  actor:[' 菅田将晖',' 有村架纯','细田佳央太'],
                  score:'8.6',
                  introduction:'　影片是《四重奏》导演土井裕泰，编剧坂元裕二的大银幕首部合作作品。故事讲述男女主人公因在东京明大前站错过末班电车而偶然相识，之后展开时代、时间、地点、全部的偶然都像命运一样同步的5年恋爱，展现了他们在既非大人也非孩童的时期里，迷茫前行的模样。',
                  country_time:'日本/124分钟',
                  date:': 2021-01-29'
                },

                {
                  id:8,
                  title:'里夫金的电影节 Rifkins Festival',
                  image:require('../assets/MoviePic/8.jpg'),
                  director:'伍迪·艾伦',
                  tag:['喜剧'],
                  actor:['华莱士·肖恩',' 吉娜·格申','路易·加瑞尔'],
                  score:'7.3',
                  introduction:'讲述一对美国夫妇去参加圣塞巴斯蒂安电影节，却双双出轨：妻子和一个有才华的法国导演发生婚外情，丈夫爱上了一个漂亮的当地女子。',
                  country_time:'西班牙 / 美国 / 意大利/88分钟',
                  date:'2020-09-25'
                },

                {
                  id:9,
                  title:'无依之地 Nomadland',
                  image:require('../assets/MoviePic/9.jpg'),
                  director:'赵婷',
                  tag:['剧情'],
                  actor:[' 弗兰西斯·麦克多蒙德',' 大卫·斯特雷泽恩'],
                  score:'8.4',
                  introduction:'于Jessica Bruder所著书籍《Nomadland: Surviving America in the Twenty-First Century》，讲述一个60多岁的女人在经济大萧条中失去了一切，她作为一个居住在货车里的现代游牧民，开始了穿越美国西部的旅程。',
                  country_time:'美国 / 德国/108分钟',
                  date:'2020-09-11'
                },

                {
                  id:10,
                  title:'同学麦娜丝 同學麥娜絲',
                  image:require('../assets/MoviePic/10.jpg'),
                  director:'黄信尧',
                  tag:['剧情 ','喜剧'],
                  actor:[' 施名帅',' 郑人硕','纳豆'],
                  score:'7.9',
                  introduction:'四个高中同学毕业后常常聚在泡沫红茶店刁牌、唬烂三小，但聚会后他们还是要继续面对生活的艰难：电风（郑人硕饰）是保险业务员，领着微薄薪水省吃俭用买了新房，因为女友怀孕将步入婚姻的人生阶段；从事纸扎屋行业又有阴阳眼的闭结（刘冠廷饰），因长期照顾卧病在床的阿嬷错过婚姻，想寻求婚姻介绍所找一个好女人结婚；罐头（纳豆饰）在一次吞药自杀后洗心革面，接下了户政所的工作，因此与他心目中的女神校花麦娜丝重逢；添仔（施名帅饰）是怀才不遇的导演，却在机缘下被政客（陈以文饰）相中开始选举之路…',
                  country_time:'中国台湾/122分钟',
                  date:'2020-11-20'
                },

                {
                  id:11,
                  title:'送你一朵小红花',
                  image:require('../assets/MoviePic/11.jpg'),
                  director:'韩延',
                  tag:['剧情'],
                  actor:[' 易烊千玺','刘浩存','朱媛媛 '],
                  score:'7.5',
                  introduction:'两个抗癌家庭，两组生活轨迹。影片讲述了一个温情的现实故事，思考和直面了每一个普通人都会面临的终极问题——想象死亡随时可能到来，我们唯一要做的就是爱和珍惜。',
                  country_time:'中国大陆/128分钟',
                  date:' 2020-12-31'
                },

                {
                  id:12,
                  title:'吉祥如意',
                  image:require('../assets/MoviePic/12.jpg'),
                  director:'大鹏',
                  tag:['剧情 ','家庭'],
                  actor:['王吉祥 ','大鹏','刘陆'],
                  score:'8.0',
                  introduction:'大鹏首次执导现实题材文艺片，故事讲述一位喜剧片导演突发奇想，回到东北农村老家，希望将一家人如何过年拍成一部文艺电影，结果遭遇一系列意外。因拍电影而聚齐的家庭成员们，完成了最后的聚会。',
                  country_time:'中国大陆/80分钟',
                  date:'2021-01-29'
                },

                {
                  id:13,
                  title:'缉魂 緝魂',
                  image:require('../assets/MoviePic/13.jpg'),
                  director:'程伟豪',
                  tag:['科幻 ','悬疑 '],
                  actor:[' 张震','张钧甯','孙安可'],
                  score:'7.0',
                  introduction:'著名集团董事长王世聪惨死家中，负责此案的检察官梁文超（张震 饰）与妻子刑警阿爆（张钧甯 饰）在调查中得知：死者的儿子王天佑（林晖闵 饰），年轻的新婚妻子李燕（孙安可 饰），多年合伙人万宇凡（李铭顺 饰），甚至死去的前妻唐素贞（张柏嘉 饰），每个人之间都有着错综复杂的关联 。阿爆更是发现隐藏在案件背后的惊人秘密……',
                  country_time:'中国大陆 / 中国台湾 /130分钟',
                  date:' 2021-01-15 '
                },

                {
                  id:14,
                  title:'打开心世界 The World to Come',
                  image:require('../assets/MoviePic/14.jpg'),
                  director:'莫娜·法斯特欧德',
                  tag:['剧情 ','爱情 ','同性'],
                  actor:[' 凯瑟琳·沃特','凡妮莎·柯比','克里斯托弗·阿波特'],
                  score:'8.3',
                  introduction:'电影改编自美国作家吉姆·谢泼德在2017年发行的同名短篇小说。故事背景设定在19世纪的美国东北部，描述一名农妇与新邻居的太太——Taille（凡妮莎·柯比 饰）和Abigail（凯瑟琳·沃特斯顿 饰）在相处过程中，不知不觉地填补了彼此生活中的空白，因而被对方深深吸引，逐渐发展亲密关系的故事。',
                  country_time:'美国/105分钟',

                  date:'2020-09-06'
                },

                {
                  id:15,
                  title:'孤味',
                  image:require('../assets/MoviePic/15.jpg'),
                  director:'许承杰',
                  tag:['剧情 ','家庭'],
                  actor:['陈淑芳','谢盈萱','孙可芳'],
                  score:'8.0',
                  introduction:'林秀英（陈淑芳 饰）是台南赫赫有名的餐厅老板，在丈夫（龙劭华 饰）无声无息地离家后，便靠著卖虾卷独自抚养三个女儿长大成人，不仅把虾卷从路边摊卖到开餐厅，三个女儿更是成就非凡，大女儿阿青（谢盈萱 饰）是国际舞者，二女儿阿瑜（徐若瑄 饰）在台北当整形医生，小女儿佳佳（孙可芳 饰）则接手自己的餐厅事业。眼看就要苦尽甘来，秀英却在70大寿当天接到丈夫离世的噩耗，在替这位有名无实的丈夫筹办丧礼的同时，竟意外迎来了另一位陪伴丈夫度过晚年的女人，令她不得不再次面对内心埋藏已久的怨怼…',
                  country_time:'中国台湾/123分钟',
                  date:'2020-11-06'
                },

                {
                  id:16,
                  title:'孤味',
                  image:require('../assets/MoviePic/16.jpg'),
                  director:'许承杰',
                  tag:['剧情 ','家庭'],
                  actor:[' 陈淑芳','谢盈萱',' 徐若瑄'],
                  score:'8.0',
                  introduction:'林秀英（陈淑芳 饰）是台南赫赫有名的餐厅老板，在丈夫（龙劭华 饰）无声无息地离家后，便靠著卖虾卷独自抚养三个女儿长大成人，不仅把虾卷从路边摊卖到开餐厅，三个女儿更是成就非凡，大女儿阿青（谢盈萱 饰）是国际舞者，二女儿阿瑜（徐若瑄 饰）在台北当整形医生，小女儿佳佳（孙可芳 饰）则接手自己的餐厅事业。眼看就要苦尽甘来，秀英却在70大寿当天接到丈夫离世的噩耗，在替这位有名无实的丈夫筹办丧礼的同时，竟意外迎来了另一位陪伴丈夫度过晚年的女人，令她不得不再次面对内心埋藏已久的怨怼……',
                  country_time:'中国台湾/123分钟',
                  date:'2020-11-06'
                },

                {
                  id:17,
                  title:'亲爱的同志 Дорогие товарищи',
                  image:require('../assets/MoviePic/17.jpg'),
                  director:'安德烈·康查洛夫斯基',
                  tag:['剧情 ','历史'],
                  actor:['朱莉娅·维斯托斯卡亚','弗拉迪斯拉夫·科马罗夫','Andrey Gusev'],
                  score:'8.4',
                  introduction:'　聚焦曾被苏联政府隐瞒的1962年新切尔卡斯克事件，工人罢工，子弹、血肉、背后事件、一个官员兼母亲的探寻和质疑。',
                  country_time:'俄罗斯/120分钟',
                  date:'2020-09-07'
                },

                {
                  id:18,
                  title:'拆弹专家2',
                  image:require('../assets/MoviePic/18.jpg'),
                  director:'邱礼涛',
                  tag:['动作 ','犯罪'],
                  actor:[' 刘德华','刘青云 ','倪妮'],
                  score:'7.7',
                  introduction:'香港某处发生爆炸案，前拆弹专家潘乘风（刘德华 饰）因昏迷于现场，被警方怀疑牵涉其中。苏醒后的潘乘风只能一边逃亡一边查明真相，然而，他的好友董卓文（刘青云 饰）和他的前女友庞玲（倪妮 饰）却给他讲述了两段截然不同的经历。有计划的爆炸案接二连三发生，真相却越来越扑朔迷离……',
                  country_time:'中国大陆 / 中国香港/121分钟',
                  date:'2020-12-24'
                },

                {
                  id:19,
                  title:'又见奈良',
                  image:require('../assets/MoviePic/19.jpg'),
                  director:' 鹏飞',
                  tag:['剧情'],
                  actor:[' 吴彦姝','英泽',' 国村隼'],
                  score:'7.8',
                  introduction:'1945年抗日战争胜利，大量日本遗孤被中国东北家庭收养。七八十年代随着两国邦交正常化，许多遗孤归国，这其中就包括陈奶奶（吴彦姝饰）的养女丽华。2005年，许久未收到养女回信的陈奶奶忍不住思念，远赴日本奈良，在二代遗孤小泽（英泽饰）和退休警察一雄（國村隼饰）的帮助下踏上漫漫寻人之旅。在异国他乡，他们邂逅了许多归国遗孤，他们的生活展现了战争创伤的另一个侧剖面，文化差异与冲突下，寻人旅程变得波折不断，养女身在何处成为所有人心中最大的谜团……',
                  country_time:'中国大陆 / 日本/100分钟',
                  date:'2021-03-19'
                },

                {
                  id:20,
                  title:'女生要革命 Moxie',
                  image:require('../assets/MoviePic/20.jpg'),
                  director:'艾米·波勒',
                  tag:['剧情 ','喜剧'],
                  actor:['哈德莉·罗宾逊',' 艾米·波勒',' 劳伦·蔡'],
                  score:'7.7',
                  introduction:'高中校园里的性别歧视和价值扭曲，让这位害羞的16岁女孩再也受不了了！妈妈的叛逆过往让她灵机一动，匿名发行一份小报，继而引爆风靡全校的成长变革。本片改编自珍妮佛·马修的小说，由艾米·波勒执导。',
                  country_time:'美国/111分钟',
                  date:'2021-03-03'
                },

                {
                  id:21,
                  title:'我很在乎 I Care a Lot ',
                  image:require('../assets/MoviePic/21.jpg'),
                  director:' J·布莱克森',
                  tag:['喜剧 ','惊悚','犯罪'],
                  actor:['裴淳华','彼特·丁拉基','艾莎·冈萨雷斯'],
                  score:'6.3',
                  introduction:'玛拉（裴淳华 Rosamund Pike 饰）经营着一家监护人公司，她专门寻找身体情况欠佳同时又无依无靠的老年人下手，通过并不是那么合法的手段令自己成为他们的法定监护人，将他们送进疗养院，之后便可接手和变卖他们的财产和房产，再将所得据为己有。某日，玛拉将下一个“吞噬”的目标放在了一位名叫珍妮弗（黛安娜·维斯特 Dianne Wiest 饰）的老太太身上，经调查，珍妮弗没有任何的亲人，同时又拥有着价值不菲的遗产，简直就是他们的最佳“肥羊”。在一番操作之后，珍妮弗被没收手机关进了疗养院，但此时的玛拉和她的恋人兼合伙人弗兰（艾莎·冈萨雷斯 Eiza González 饰）并不知道的是，她们惹上了一个不该惹，也不能惹的人。',
                  country_time:'英国/118分钟',
                  date:' 2020-09-12'
                },

                {
                  id:22,
                  title:'紧急救援',
                  image:require('../assets/MoviePic/22.jpg'),
                  director:'林超贤',
                  tag:['动作 ','灾难'],
                  actor:['彭于晏','王彦霖','辛芷蕾'],
                  score:'6.2',
                  introduction:'倾覆沉没的钻井平台，顺流直冲的运油车头，直坠入海的满载客机。交通海上应急反应特勤队队长高谦（彭于晏 饰）、机长方宇凌（辛芷蕾 饰）和绞车手赵呈（王彦霖 饰）一次次带领队伍第一时间抵达，站在水火咆哮的最前面，守在危急撤离的最后面，用生命对抗天灾人祸。但在自然面前，特勤员毕竟没有超能力，血肉之躯踩在死亡边缘，真实的恐惧无数次让这些斗士颤抖、无助和气馁。而海上救援的字典里没有“退缩”。当你听见旋翼的轰鸣、洪亮的汽笛、马达的飞驰，那是他们无惧艰难险阻，舍己为人，谱写的一曲英雄之歌。',
                  country_time:'中国大陆 / 中国香港/134分钟',
                  date:'2020-12-18'
                },

                {
                  id:23,
                  title:'亲爱的房客 親愛的房客',
                  image:require('../assets/MoviePic/23.jpg'),
                  director:'郑有杰',
                  tag:['剧情 ','同性'],
                  actor:['莫子仪','陈淑芳','白润音'],
                  score:'7.5',
                  introduction:'林健一（莫子仪 饰）是住在顶楼的房客，但他不只照顾年迈患病的房东周秀玉（陈淑芳 饰），还收养了她9岁的孙子王悠宇（白润音 饰），这一切看似超出普通房客的行为动机，在周秀玉去世后受到质疑，很多人怀疑他是为了顺理成章的获得遗产，他百口莫辩，因为这些举动背后隐藏着一段不被承认的感情，也更是他思念一个人的方式，而那个人正是房东已经过世的儿子…',
                  country_time:'中国台湾/106分钟',
                  date:'2020-10-23'
                },

                {
                  id:24,
                  title:'较量2',
                  image:require('../assets/MoviePic/24.jpg'),
                  director:'吉图·乔瑟夫',
                  tag:['剧情 ','惊悚','犯罪'],
                  actor:['莫哈恩拉 ','安西芭','艾丝特·阿妮尔'],
                  score:'7.6',
                  introduction:'在少年瓦伦失踪六年后，乔治库迪和他的家人目前过着更好的生活，他比以前更富有，除了有线电视平台，他还新开了一家电影院，并打算制作电影。他们的小女儿安努年满18岁，就读于一所寄宿学校，临近毕业。大女儿安珠正计划升学，而母亲拉妮则拼命替大女儿安排婚姻。虽然一家人和和睦睦，但乔治库迪禁止在屋檐下讨论失踪案。该家庭的富裕地位使街坊邻居倍感嫉妒，各种闲言碎语开始流传，而警方由于多次未能破案而颜面尽失，再加上瓦伦父母的苦苦相逼，在多方夹击之下，乔治库迪能否再次保护家人？',
                  country_time:'印度/152分钟',
                  date:'2021-02-19'
                },

                {
                  id:25,
                  title:'无声 無聲 ',
                  image:require('../assets/MoviePic/25.jpg'),
                  director:'柯贞年',
                  tag:['剧情'],
                  actor:['陈姸霏','刘子铨','刘冠廷'],
                  score:'7.6',
                  introduction:'失聪少年张诚准备转到启聪学校就读。聋人的世界，却不比听人的世界宁静。当他发现校车最后一排的「游戏」，融入新生活的欣喜之情，瞬间成为恐惧⋯⋯。眼见心仪的女孩贝贝在游戏中遍体鳞伤、学长小光气势狂妄不可质疑，一群同学们又天真无害，张诚忖度着是否该揭开游戏的残忍真相，或加入游戏的行列？当加害者与受害者的界线越趋模糊，盘根错节的苦痛、无可倾诉的怨怼，种种困惑与不安在无声的校园蔓延。新锐导演柯贞年的首部长片大胆将真实事件搬上银幕，在直面残酷的同时，不失温柔的眼光。犀利刻画人物之间复杂与纠结的情感，呈现声嘶力竭却仍仿若无声的残忍。贝贝一句「他们只是在玩」轻描淡写，却惊悚、沉痛，更是真实无比的哀叹。',
                  country_time:'中国台湾/104分钟',
                  date:'2020-10-15'
                },

                {
                  id:26,
                  title:'海边的异邦人 海辺のエトランゼ',
                  image:require('../assets/MoviePic/26.jpg'),
                  director:'大桥明代',
                  tag:['动画 ','同性'],
                  actor:['村田太志','松冈祯丞'],
                  score:'7.3',
                  introduction:'　故事讲述住在冲绳离岛上的桥本骏(村田 配音)，结识了失去父母的孤独高中生知花实央(松冈 配音)，两位少年成了好友。实央为了快点成长为大人，决定离开本岛，两人渐渐断了联系。3年后，实央却再次出现在骏的面前，还大胆告白。',
                  country_time:'日本/59分钟',
                  date:'2020-09-11'
                },

                {
                  id:27,
                  title:'疯狂原始人2 The Croods: A New Age',
                  image:require('../assets/MoviePic/27.jpg'),
                  director:'乔尔·克劳福德',
                  tag:['喜剧 ','动画','冒险'],
                  actor:['柯克·德·米科',' 丹·哈格曼',' 凯文·哈格曼'],
                  score:'7.9',
                  introduction:'经历了逃离洞穴、挺过末日危机之后的原始人咕噜家族，咕噜一家决定寻找新家园。中途盖（瑞恩·雷诺兹 Ryan Reynolds 配音）已成了咕噜一家中的一员，但让瓜哥（尼古拉斯·凯奇 Nicolas Cage 配音）头疼的是，盖跟女儿小伊（艾玛·斯通 Emma Stone 配音）每天你侬我侬，还妄想组成只属于两人的小家庭。就在咕噜一家人饥肠辘辘之际，他们发现了一片高墙内隐藏着食物丰饶的沃土，原来开辟这片世外桃源的文明人夫妇霍普和菲尔是已经去世的盖的父母的朋友。在最初的热情款待后，一心想要撮合盖和女儿晓晓的霍普和菲尔，发现咕噜一家成了绊脚石，为了把盖抢过来，他们用上了攻心计。两家人闹得不可开交，盖和小伊也产生了裂痕，却浑然不知危险正慢慢靠近……',
                  country_time:'美国/95分钟',
                  date:' 2020-11-27'
                },

                {
                  id:28,
                  title:'发掘 The Dig',
                  image:require('../assets/MoviePic/28.jpg'),
                  director:'西蒙·斯通',
                  tag:['剧情 ','传记 ','历史'],
                  actor:['凯瑞·穆里根','拉尔夫·费因斯','莉莉·詹姆斯'],
                  score:'7.8',
                  introduction:'第二次世界大战即将爆发时，一个富有的寡妇雇用了一名业余考古学家在她的庄园内挖掘墓冢。当他们做出历史性发现时，英国的过去和不确定的未来将遥相呼应。',
                  country_time:'英国/112分钟',
                  date:'2021-01-29'
                },

                {
                  id:29,
                  title:'发财日记',
                  image:require('../assets/MoviePic/29.jpg'),
                  director:'宋小宝',
                  tag:['喜剧'],
                  actor:['宋小宝','马丽','沙溢'],
                  score:'6.0',
                  introduction:'　故事讲述上世纪90年代初，穷小子小宝追随同村“发小儿”二哥，一路从贫穷朴实的东北农村来到了经济飞速发展的深圳。期间，两人无意中收留了一个嗷嗷待哺的婴儿，生活困窘的小宝和二哥该如何将孩子抚养长大？当小宝和二哥与同在深圳打拼的创业女青年马露“狭路相逢”，三人之间又将发生哪些令人捧腹的爆笑故事？一段笑泪参半、起伏跌宕的小人物奋斗史就此展开……',
                  country_time:'中国大陆/128分钟',
                  date:'2021-02-12'
                },

                {
                  id:30,
                  title:'760号犯人 The Mauritanian',
                  image:require('../assets/MoviePic/30.jpg'),
                  director:'凯文·麦克唐纳',
                  tag:['剧情 ','惊悚'],
                  actor:['塔哈·拉希姆','朱迪·福斯特','本尼迪克特'],
                  score:'7.3',
                  introduction:'影片改编自Mohamedou Ould Slahi的回忆录《关塔那摩日记》，讲述Slahi(塔哈饰)被美国政府俘虏，在毫无指控与判决的情况下被关进了监狱，他失去了希望。Slahi寻得辩护律师南希·霍兰德(福斯特饰)与助手特里·邓肯(伍德蕾饰)的帮助，他们在面对无数障碍的情况下，一同追求正义。在富有争议的主张及斯图尔特·库什中尉(康伯巴奇饰)揭露的证据下，一个令人震惊的阴谋露出水面。',
                  country_time:'英国 / 美国/129分钟',
                  date:'2021-06'
                },

                {
                  id:31,
                  title:'2021-06',
                  image:require('../assets/MoviePic/31.jpg'),
                  director:'彼特·道格特 / 凯普·鲍尔斯',
                  tag:['动画 ','音乐 ','奇幻'],
                  actor:['凯普·鲍尔斯','杰米·福克斯','蒂娜·菲'],
                  score:'8.8',
                  introduction:'究竟是什么塑造了真正的你？电影将聚焦乔伊·高纳（杰米·福克斯配音）。这位中学音乐老师获得了梦寐以求的机会——在纽约最好的爵士俱乐部演奏。但一个小失误把他从纽约的街道带到了一个奇幻的地方“生之来处”（the Great Before）。在那里，灵魂们获得培训，在前往地球之前将获得他们的个性特点和兴趣。决心要回到地球生活的乔伊认识了一个早熟的灵魂“二十二”（蒂娜·菲 配音），二十二一直找不到自己对于人类生活的兴趣。随着乔伊不断试图向二十二展示生命的精彩之处，他也将领悟一些人生终极问题的答案。',
                  country_time:'美国/101分钟',
                  date:'2020-12-25'
                },

                {
                  id:32,
                  title:'芝加哥七君子审判 The Trial of the Chicago 7 ',
                  image:require('../assets/MoviePic/32.jpg'),
                  director:'艾伦·索金',
                  tag:['剧情 ','剧情 '],
                  actor:[' 埃迪·雷德梅恩','艾利克斯·夏普 ','萨莎·拜伦·科恩'],
                  score:'8.6',
                  introduction:'1968 年民主党全国代表大会上的和平抗议演变成了与警察和国民警卫队的暴力冲突。抗议活动的组织者包括艾比·霍夫曼、杰里·鲁宾、汤姆·海登和鲍勃·席勒，他们被指控阴谋煽动暴乱，随之而来的审判是历史上最臭名昭著的几场审判之一',
                  country_time:'美国 / 英国 / 印度/129分钟',
                  date:' 2020-09-25'
                },

                {
                  id:33,
                  title:'刻在你心底的名字',
                  image:require('../assets/MoviePic/33.jpg'),
                  director:'柳广辉',
                  tag:['剧情 ','同性'],
                  actor:[' 陈昊森 ','曾敬骅'],
                  score:'7.2',
                  introduction:'　影片讲述上世纪90年代初，两位少年前往台北，那里的一切冲击着这两个少年的感官。学校宿舍里发生了对同性恋的霸凌，尽管禁忌一一解放，学校也开始招收女生，但同性恋三个字仍如毒蛇猛兽人人唾弃。而两个男孩间原本暧昧的情愫，也因一个女孩的介入，而就此被打乱。',
                  country_time:'中国台湾/114分钟',
                  date:'2020-09-30'
                },

                {
                  id:34,
                  title:'鬼灭之刃 剧场版 无限列车篇 劇場版「鬼滅の刃」無限列車編',
                  image:require('../assets/MoviePic/34.jpg'),
                  director:'外崎春雄',
                  tag:['动画'],
                  actor:[' 花江夏树','鬼头明里','下野纮'],
                  score:'8.4',
                  introduction:'该片基于吾峠呼世所著漫画《鬼灭之刃》创作而成，是2019年播出的TV动画的续篇，讲述灶门炭治郎和炼狱杏寿郎与下弦之壹魇梦作战的故事。',
                  country_time:'日本/117分钟',
                  date:'2020-10-16'
                },

                {
                  id:35,
                  title:'一秒钟',
                  image:require('../assets/MoviePic/35.jpg'),
                  director:'张艺谋',
                  tag:['剧情'],
                  actor:['张译','刘浩存','范伟'],
                  score:'7.8',
                  introduction:'影片讲述了没赶上电影场次的张九声与刘闺女因一场电影结下了不解之缘的故事。故事灵感来源于张艺谋导演早期经历，是其一贯对文化展开追忆和寻根的风格。',
                  country_time:'中国大陆',
                  date:'2020-11-27'
                },

                {
                  id:36,
                  title:'新秩序 Nuevo orden',
                  image:require('../assets/MoviePic/36.jpg'),
                  director:'米歇尔·弗兰克',
                  tag:['剧情'],
                  actor:['迪耶戈·博内塔','达里奥·亚斯贝克·贝纳尔',' 奈安·诺温'],
                  score:'6.9',
                  introduction:'墨西哥导演米歇尔·弗兰克在参加马拉喀什电影节时确认他执导的第六部影片[少数人的梦想](The Dreams of a Few，暂译)将于明年4月开机拍摄。弗兰克的上一部影片[艾普尔的女儿]于去年戛纳电影节“一种关注单元”首映并荣获评审团奖。弗兰克表示新片将是一部大制作影片，影片风格有别于他以往作品，将采用全墨西哥演员阵容，墨西哥取景拍摄。据悉新片故事将设定在一个不远未来的反乌托邦世界，影片主题涉及墨西哥城的贫富鸿沟。',
                  country_time:'墨西哥88分钟',
                  date:'2020-09-10'
                },

                {
                  id:37,
                  title:'白虎 The White Tiger',
                  image:require('../assets/MoviePic/37.jpg'),
                  director:'拉敏·巴哈尼',
                  tag:['剧情 ','犯罪'],
                  actor:['拉敏·巴哈尼','阿达什·古拉夫',' 佩丽冉卡·曹帕拉'],
                  score:'7.5',
                  introduction:'巴尔朗·哈勒维（阿达什·古拉夫饰）讲述了他从贫穷村民成长为当代印度成功企业家的史诗般、充满黑色幽默的人生历程。我们年轻的主人公足智多谋而又雄心勃勃，设法成为了刚从美国回来的阿肖克（拉吉·库玛饰）和粉红夫人（朴雅卡·乔普拉饰）的司机。社会将巴尔朗训练成一名仆人，他便努力将自己打造成富有主人的得力帮手。但经过一夜之间的背叛，他意识到主人们会不择手段地陷害他以进行自救。在失去一切的边缘，巴尔朗决心反抗被操纵的人生和不平等的制度，奋起成为新型的主人。该影片改编自《纽约时报》畅销书和 2008 年曼布克奖获奖小说。',
                  country_time:'印度 / 美国/125分钟',
                  date:'2021-01-22'
                },

                {
                  id:38,
                  title:'温暖的抱抱',
                  image:require('../assets/MoviePic/38.jpg'),
                  director:'常远',
                  tag:['喜剧'],
                  actor:['常远','李沁','沈腾'],
                  score:'5.5',
                  introduction:'对整洁和计划有着超乎常人执念的鲍抱（常远 饰），本以为自己是一个友情爱情的绝缘体，但在遇到个性率真宋温暖（李沁 饰）、妙手“神经”贾医生（沈腾 饰）和假仁假义王为仁（乔杉 饰）之后，上演了一段阴差阳错的喜剧故事……影片根据韩国电影《计划男》改编。',
                  country_time:'中国大陆/112分钟',
                  date:'2020-12-31'
                },

                {
                  id:39,
                  title:'神奇女侠1984 Wonder Woman 1984',
                  image:require('../assets/MoviePic/39.jpg'),
                  director:'派蒂·杰金斯',
                  tag:['动作 ','奇幻','冒险'],
                  actor:[' 盖尔·加朵',' 克里斯·派恩',' 克里斯汀·韦格'],
                  score:'6.3',
                  introduction:'故事背景设定在五光十色、充满诱惑的80年代，神奇女侠戴安娜在华盛顿的自然历史博物馆过着与普通人无异的生活，然而在阻止了一场看似平常的劫案后，身边的一切都发生了变化。在强大的神力诱惑下，两位全新劲敌悄然出现——与神奇女侠“相爱相杀”的顶级掠食者豹女， 以及掌控着能改变世界力量的麦克斯·洛德，一场惊天大战在所难免。另外一边，旧爱史蒂夫突然“死而复生”，与戴安娜再续前缘，然而浪漫感动之余，史蒂夫的回归也疑窦丛生。新时代大幕开启，面对两位强大的邪恶反派和神秘归来的史蒂夫，神奇女侠要如何才能再次拯救世界？',
                  country_time:'美国 / 英国 / 西班牙/151分钟',
                  date:'2020-12-18'
                },

                {
                  id:40,
                  title:'无声 소리도 없이',
                  image:require('../assets/MoviePic/40.jpg'),
                  director:'洪义正',
                  tag:['犯罪','惊悚','剧情'],
                  actor:['刘亚仁 ','刘在明','文胜雅'],
                  score:'7.3',
                  introduction:'昌福(刘在明 饰)和泰仁(刘亚仁 饰)表面上以卖菜为生，实际上两人还有另一个活计，就是为黑道组织提供杀人场所以及处理尸体，一日像往常一样在处理尸体的两人被组织中的金室长(林姜成 饰)胁迫，去接管一个被绑架的11岁女孩初喜(文胜雅 饰)，两人平静的生活随即被打破，事情开始向着他们无法控制的方向发展…',
                  country_time:'韩国/99分钟',
                  date:'2020-10-15'
                },

                {
                  id:41,
                  title:'夺冠',
                  image:require('../assets/MoviePic/41.jpg'),
                  director:'陈可辛',
                  tag:['剧情 ','运动'],
                  actor:['巩俐','黄渤','吴刚'],
                  score:'7.3',
                  introduction:'2008年8月15日，北京奥运会女排比赛，中国VS美国。戴着金丝框眼镜的郎平（巩俐 饰）坐在美国队教练席上，大气沉稳，目光如电；中国队教练（黄渤 饰）站在场边，全神贯注，面带笑容。中国队教练望向郎平，目光充满深意，不断经过的人影遮蔽了他的视线，中国女排三十余年的沉浮图景被缓缓打开……',
                  country_time:'中国大陆 / 中国香港/135分钟',
                  date:'2020-09-25'
                },

                {
                  id:42,
                  title:'信条 Tenet',
                  image:require('../assets/MoviePic/42.jpg'),
                  director:'克里斯托弗·诺兰',
                  tag:['剧情 ','动作 ','科幻'],
                  actor:[' 约翰·大卫·华盛顿','罗伯特·帕丁森',' 伊丽莎白·德比茨基'],
                  score:'7.7',
                  introduction:'世界存亡危在旦夕，“信条”一词是唯一的线索与武器。主人公穿梭于全球各地，开展特工活动，力求揭示“信条”之谜，并完成一项超越了真实时间的神秘任务。这项任务并非时间之旅，而是【时空逆转】。',
                  country_time:'美国 / 英国/150分钟',
                  date:' 2020-09-04'
                },

                {
                  id:43,
                  title:'女人的碎片 Pieces of a Woman',
                  image:require('../assets/MoviePic/43.jpg'),
                  director:'凯内尔·穆德卢佐',
                  tag:['剧情'],
                  actor:['凡妮莎·柯比','希亚·拉博夫','艾伦·伯斯汀'],
                  score:'7.7',
                  introduction:'西恩（希亚·拉博夫 Shia LaBeouf 饰）和玛莎（凡妮莎·柯比 Vanessa Kirby 饰）正在充满期待的等待着两人爱情结晶的诞生，根据玛莎的要求，他们决定将助产士请到家里来，在家中分娩。然而，当玛莎开始了分娩过程后，她原先选中的助产士却因事无法前来，换成了另一个名叫艾娃（莫莉·帕克 Molly Parker 饰）助产士来接生。悲剧就这样发生了，玛莎的孩子在出世短短几分钟后便因为窒息而死亡了。当命运的重锤砸下时，人们只能选择咬紧牙关默默承受，为了替自己死去的孩子讨回一个公道，玛莎的母亲找来了律师苏姗妮（莎拉·斯努克 Sarah Snook 饰），将艾娃告上法庭。在面对自己支离破碎的内心的同事，玛莎还必须处理她和西恩之间濒临崩溃的夫妻关系，而控制欲极强的母亲的步步紧逼，更是夺走了玛莎得以呼吸的最后一丝空气。',
                  country_time:'加拿大 / 匈牙利 / 美国/128分钟',
                  date:'2020-09-05'
                },

                {
                  id:44,
                  title:'玫瑰岛的不可思议的历史 Lincredibile storia dellisola delle rose',
                  image:require('../assets/MoviePic/44.jpg'),
                  director:'希德尼·希比利亚',
                  tag:['喜剧'],
                  actor:['埃利奥·杰曼诺',' 莱昂纳多·利迪','马蒂尔达·德·安杰利斯'],
                  score:'8.0',
                  introduction:'有天赋却被人误解的工程师乔治奥跌入了人生谷底，他被解雇了，父母也不和他讲话，并且在他意外令自己和女友被捕后（说来话长…），女友抛弃了他。厌倦了 60 年代末沉闷的意大利社会，乔治奥制定了一个不可能的计划；他要在海中建造自己的岛。在一群革命者和被驱逐者的加入下，玫瑰岛共和国成立并宣布独立，乔治奥被任命为总统。然而，他们的团队价值观和应变能力将受到考验，因为意大利总理认为乔治奥的理想岛是意大利的头号敌人。《玫瑰岛》由希德尼·希比利亚（《玩命毒师》三部曲）执导，由 Grøenlandia（《The First King》）出品，是一部基于真实故事改编的滑稽喜剧，剧中充斥着反叛精神。',
                  country_time:'意大利/119分钟',
                  date:'2020-12-09'
                },

                {
                  id:45,
                  title:'八佰',
                  image:require('../assets/MoviePic/45.jpg'),
                  director:'管虎',
                  tag:['剧情 ','历史 ','战争'],
                  actor:[' 王千源','张译','姜武'],
                  score:'7.6',
                  introduction:'7.6',
                  country_time:'中国大陆/147分钟',
                  date:' 2020-08-21'
                },

                {
                  id:46,
                  title:'我和我的家乡',
                  image:require('../assets/MoviePic/46.jpg'),
                  director:'宁浩 / 徐峥 / 陈思诚 / 闫非 / 彭大魔 / 邓超 / 俞白',
                  tag:['剧情 ','喜剧'],
                  actor:[' 葛优 ',' 黄渤',' 范伟'],
                  score:'7.3',
                  introduction:'　电影《我和我的家乡》定档2020年国庆，延续《我和我的祖国》集体创作的方式，由张艺谋担当总监制，宁浩担任总导演，张一白担任总策划，宁浩、徐峥、陈思诚、闫非&彭大魔、邓超&俞白眉分别执导五个故事。',
                  country_time:'中国大陆/153分钟',
                  date:'2020-10-01'
                },

                {
                  id:47,
                  title:'电话 콜',
                  image:require('../assets/MoviePic/47.jpg'),
                  director:'李聪贤',
                  tag:['剧情 ','惊悚'],
                  actor:['朴信惠','全钟瑞','金成铃'],
                  score:'7.6',
                  introduction:'一通电话让来自过去和现在的两个女人产生了奇妙的联系，并引发了一场改变未来的危险游戏...她们将渐渐难以自拔。',
                  country_time:'韩国/112分钟',
                  date:'2020-11-27'
                },

                {
                  id:48,
                  title:'风平浪静',
                  image:require('../assets/MoviePic/48.jpg'),
                  director:'李霄峰',
                  tag:['剧情 ','爱情 ','犯罪'],
                  actor:[' 章宇','宋佳',' 王砚辉'],
                  score:'6.3',
                  introduction:'　十五年前的一次意外，成绩优异高中生宋浩离开了家乡，也离开了原本的人生轨迹。十五年后，他回到家乡，一切仿佛都已风平浪静。与老同学潘晓霜的重逢，给了他人生久违的光亮。他决定揭开那个十五年来不敢触碰的伤疤，重新掌控人生，完成一场似乎不可能的自我救赎。',
                  country_time:'中国大陆/119分钟',
                  date:'2020-11-06'
                },

                {
                  id:49,
                  title:'消失的情人节 消失的情人節',
                  image:require('../assets/MoviePic/49.jpg'),
                  director:'陈玉勋',
                  tag:['喜剧 ','爱情 ','奇幻'],
                  actor:[' 刘冠廷','李霈瑜',' 黑嘉嘉'],
                  score:'7.2',
                  introduction:'公车司机阿泰（刘冠廷/饰），是一个动作慢吞吞、连手表的时间、地震的感应都比别人慢的奇葩。他每天都会去邮局，找柜员杨晓淇（李霈瑜/饰）寄一封不知道给谁的平信。柜员杨晓淇和阿泰完全相反，是个凡事抢拍的超级急性子，唯独感情生活毫无进展，年近三十还是母胎单身。情人节前夕，杨晓淇被天菜阳光男刘老师（周群达Duncan/饰）搭讪，终于情窦初开的晓淇和刘老师天雷勾动地火；想不到一觉醒来，刘老师再无音讯、而且情人节居然已经过了？！每天来寄信的阿泰也再也没出现过...毫无记忆的杨晓淇，开始了一趟寻找真相的奇幻旅程...',
                  country_time:'中国台湾',
                  date:'2020-09-18'
                },

                {
                  id:50,
                  title:'酒精计划 Druk',
                  image:require('../assets/MoviePic/50.jpg'),
                  director:'7.5',
                  tag:['剧情 ','喜剧'],
                  actor:['麦斯·米科尔森','托玛斯·博·拉森','马格努斯·米兰'],
                  score:'7.5',
                  introduction:'本片将围绕马丁(米科尔森饰)和他三个朋友展开，这四个高中老师为了摆脱日常的循规蹈矩，开始了一项持续醉酒的实验。虽然计划最初很成功，但最终失败了。',
                  country_time:'丹麦 / 瑞典 / 荷兰/110分钟',
                  date:'2020-09-12'
                },
                {
                  id:54,
                  title:'天堂的张望 ',
                  image:require('../assets/MoviePic/54.jpg'),
                  director:' 杜斌',
                  tag:[' 剧情','家庭 ','儿童 '],
                  actor:[' 杜奕衡',' 王力可',' 马瑜遥'],
                  score:'7.0 ',
                  introduction:'　7岁女孩张望和父亲张国华相依为命，生活虽是清贫，但还是生活的很幸福。一天张望突然流鼻血不止，去医院检查，才知得了急性白血病，治疗需要30多万的费用，筹钱无果的张国华整日以泪洗面；而张望，清楚自己的家庭情况，毅然决定放弃治疗。记者王小月得知此事，赶往张国华家中，才得知了张望的真实身世....',
                  country_time:'中国/ 116分钟 ',
                  date:' 2020-11-20 '
                },

                {
                  id:55,
                  title:'福尔摩斯小姐：失踪的侯爵 Enola Holmes ',
                  image:require('../assets/MoviePic/55.jpg'),
                  director:'哈利·布拉德比尔',
                  tag:[' 剧情',' 悬疑 ',' 犯罪 ','冒险'],
                  actor:['米莉·波比·布朗 ',' 路易斯·帕特里奇',' 山姆·克拉弗林'],
                  score:'6.1 ',
                  introduction:'当母亲在自己十六岁生日那天神秘失踪后，伊诺拉·福尔摩斯向她的哥哥麦考夫和大名鼎鼎的神探夏洛克寻求帮助。但伊诺拉很快意识到，相较于侦破案件，这两人更愿意将她送到寄宿学校。于是伊诺拉做了一个聪明伶俐、足智多谋、无所畏惧的，19世纪80年代年轻女性唯一能做的举动——她逃到了伦敦。在那里，她开始了自己非凡的破案生涯，且总是能比神探夏洛克领先一步。 ',
                  country_time:' 美国/123分钟 ',
                  date:' 2020-09-23'
                },

                {
                  id:56,
                  title:' 釜山行2：半岛 부산행2-반도',
                  image:require('../assets/MoviePic/56.jpg'),
                  director:'延尚昊',
                  tag:['动作 ',' 惊悚',' 恐怖'],
                  actor:[' 姜栋元 ',' 李贞贤',' 权海骁'],
                  score:' 5.1',
                  introduction:'上集列车驶往釜山后，丧尸病毒瞬间全国爆发，4年后的韩国尸毒遍野，被全球孤立，沦为死城。所馀无几的生还者踏上最后一艘难民船，离开被世人遗弃的朝鲜半岛。退伍军人正锡(姜栋元 饰)和家人有幸登上难民船，但一上船便发现丧尸潜伏，幸得香港收容，这批韩国人才得以上岸，以「半岛难民」身分在香港重新生活。',
                  country_time:' 韩国/115分钟',
                  date:'2020-07-15'
                },

                {
                  id:57,
                  title:'恋途未卜 思い、思われ、ふり、ふられ ',
                  image:require('../assets/MoviePic/57.jpg'),
                  director:'三木孝浩',
                  tag:['爱情 '],
                  actor:['滨边美波 ','北村匠海 ','  福本莉子 '],
                  score:'6.7 ',
                  introduction:'根据同名少女漫画改编，描绘了4名高中生男女的青春爱情故事。山本朱里（滨边美波）是崇尚现实恋爱的女主角，山本理央（北村匠海）则是她没有血缘关系的弟弟。 ',
                  country_time:'日本/124分钟',
                  date:'2020-08-14 '
                },

                {
                  id:58,
                  title:'母亲 マザー ',
                  image:require('../assets/MoviePic/58.jpg'),
                  director:' 大森立嗣',
                  tag:['惊悚'],
                  actor:['长泽雅美 ','奥平大兼 ',' 阿部隆史'],
                  score:' 6.1',
                  introduction:'本片是根据实际发生的「少年杀害了祖父母事件」的构思而改编成电影的崭新故事。长泽扮演懒散奔放的母亲·秋子，挑战堕入了社会黑暗面的女人，而阿部サダヲ则饰演与秋子没有结婚登记而同居的丈夫·遼，影片将重点刻画秋子和她年幼的儿子·周平（郡司翔）之间所展开的关系。 ',
                  country_time:' 日本/126分钟',
                  date:'2020-07-03 '
                },

                {
                  id:59,
                  title:'凶宅怪谈 ',
                  image:require('../assets/MoviePic/59.jpg'),
                  director:' 中田秀夫',
          tag:[' 剧情','  恐怖'],
              actor:['  龟梨和也','奈绪 ',' 濑户康史'],
              score:' 5.4',
              introduction:'该片改编自寻找凶宅租住的艺人松原田螺根据真实经历创作的同名小说，龟梨和也饰演没什么名气的艺人山野，他因节目需求被制作人安排去住凶宅，故事就从他住进发生杀人案的凶宅后开始。 ',
              country_time:'日本/111分钟 ',
              date:'2020-08-28 '
        },

          {
            id:60,
                title:" '我想结束这一切 I'm Thinking of Ending Things'",
            image:require('../assets/MoviePic/60.jpg'),
                director:' 查理·考夫曼',
              tag:['剧情','惊悚 '],
              actor:['杰西·普莱蒙 ','杰西·巴克利 ',' 托妮·科莱特'],
              score:' 7.3',
              introduction:'剧本改编自伊恩·里德同名小说，小说审视了心灵的脆弱和孤独的极限。杰克原本带女友回家见父母，女友一路却在想着“结束这一切”，在杰克改变原定路线后，一切都朝着失控方向发展。',
              country_time:' 美国/134分钟',
              date:' 2020-08-28 '
          },

          {
            id:61,
                title:'神弃之地 The Devil All the Time ',
              image:require('../assets/MoviePic/61.jpg'),
              director:'安东尼奥·坎波斯 ',
              tag:['剧情 ','惊悚 ','犯罪 '],
              actor:[' 汤姆·赫兰德','罗伯特·帕丁森 ','比尔·斯卡斯加德 '],
              score:'7.0 ',
              introduction:'安东尼奥·坎帕斯(《克里斯汀》)执导，讲述俄亥俄州偏远之地Knockemstiff，男主角Willard Russell绝望地想拯救濒死的妻子，不惜屈服于牺牲，而他的儿子(霍兰德)正从一个在学校被虐待的孩子成长为知道何时出手的男人，角色包括一对连环杀手夫妇、一个考验人的信仰的传教士、一个腐败的当地警长(斯坦)。时间从二战末期到1960年代，地点从南俄亥俄州乡村到西维吉尼亚。 ',
              country_time:'美国/138分钟',
              date:'2020-09-16'
          },

          {
            id:62,
                title:'鲍勃的圣诞礼物 A Christmas Gift From Bob',
              image:require('../assets/MoviePic/62.jpg'),
              director:' 查尔斯·马丁·史密斯',
              tag:['剧情 ','喜剧 '],
              actor:['卢克·崔德威 ','安娜·威尔逊-琼斯 ',' 蒂姆· 普莱斯特  '],
              score:'7.5 ',
              introduction:'　电影将聚焦詹姆斯和爱喵鲍勃的生活，回顾詹姆斯和流浪猫鲍勃在街头度过的最后一个圣诞节，以及鲍勃如何帮他度过最艰难的时光，探索圣诞节的真谛。 ',
              country_time:'英国/ 92分钟',
              date:'2020-11-06 '
          },

          {
            id:63,
                title:' 乡下人的悲歌 Hillbilly Elegy',
              image:require('../assets/MoviePic/63.jpg'),
              director:'朗·霍华德 ',
              tag:['剧情 '],
              actor:['艾米·亚当斯','瓦内莎·泰勒 ','J. D.万斯 '],
              score:'7.6 ',
              introduction:'《绝望者之歌》改编自杰德·凡斯的《纽约时报》冠军畅销书，由奥斯卡得主朗·霍华德执导。剧中描绘三个分属不同世代的角色各自面临的课题，以及一路走来的悲欢与苦乐。这是一部充满力量的个人回忆录，也是一个家庭生存与胜利的故事。 ',
              country_time:' 美国/116分钟',
              date:' 2020-11-11'
          },

          {
            id:64,
                title:'妙先生 ',
              image:require('../assets/MoviePic/64.jpg'),
              director:'李凌霄 ',
              tag:[' 动画',' 奇幻',' 冒险'],
              actor:[' 小连杀','宝木中阳 '],
              score:' 6.4',
              introduction:'影片改编自不思凡 (《大护法》)的同名原创短片，由李凌霄执导，彩条屋影业(《哪吒之魔童降世》)出品，讲述一场关于“善恶抉择”的人性考验。 ',
              country_time:' 中国大陆/89分钟',
              date:'2020-07-31 '
          },

          {
            id:65,
                title:' 末日逃生 Greenland',
              image:require('../assets/MoviePic/65.jpg'),
              director:' 里克·罗曼·沃夫',
              tag:['剧情 ','科幻 ',' 灾难'],
              actor:[' 杰拉德·巴特勒','莫蕾娜·巴卡琳 ',' 大卫·丹曼 '],
              score:'5.5 ',
              introduction:'杰夫（杰拉德·巴特勒 Gerard Butler 饰）是一名建筑工程师，他得到了进入堡垒的机会，于是决定带着妻子艾莉森（莫瑞娜·巴卡琳 Morena Baccarin 饰）和儿子内森（罗杰·戴尔·弗洛伊德 Roger Dale Floyd 饰）一起前往格陵兰岛。哪知道旅途进行到一半，察觉到了事件真相的军方开始了暴乱行动',
              country_time:'美国/119分钟 ',
              date:' 2020-11-20'
          },

          {
            id:66,
                title:'狩猎 The Hunt ',
              image:require('../assets/MoviePic/66.jpg'),
              director:' 克雷格·卓贝',
              tag:['动作 ',' 惊悚'],
              actor:[' 贝蒂·吉尔平','希拉里·斯万克 ',' 艾玛·罗伯茨'],
              score:' 7.3',
              introduction:'12个陌生人在空地上醒来。他们不知道自己在哪里，或者是如何到达这里的。他们不知道他们已经被选中，为了一个非常特殊的目的——捕猎',
              country_time:'美国/90分钟 ',
              date:' 2020-03-13'
          },

          {
            id:67,
                title:'捕鲸男孩 Китобой ',
              image:require('../assets/MoviePic/67.jpg'),
              director:'菲利普·尤里耶夫 ',
              tag:[' 剧情'],
              actor:[' 克里斯蒂娜·阿斯姆斯',' 阿里耶·沃索尔特',' Vladimir Onokhov '],
              score:' 7.2',
              introduction:'莱斯卡住在白令海峡一个偏远的村庄里。白令海峡位于楚科奇和阿拉斯加之间，隔开了美国和俄罗斯。这个十几岁的少年，和村子里的大多数人一样，是一位捕鲸者，在遥远的世界边缘过着平静的生活。',
              country_time:'俄罗斯/ 94分钟',
              date:'2020-09-02 '
          },

          {
            id:68,
                title:'小确幸地图 The Map of Tiny Perfect Things ',
              image:require('../assets/MoviePic/68.jpg'),
              director:' 伊恩·塞缪尔斯',
              tag:[' ',' ',' '],
              actor:[' 凯瑟琳·纽顿','凯尔·艾伦 ','约什·汉密尔顿 '],
              score:'6.9 ',
              introduction:'Margaret和Mark都被困在不断循环重复的一天，他们都以为只有自己被困住了，直到他们碰到彼此。他们试图制作一张地图，记录所有以前被他们所忽视的小确幸。期间，他们也不断地了解彼此，也找到了打破循环的方法。',
              country_time:' 美国/99分钟',
              date:'2021-02-12 '
          },

          {
            id:69,
                title:' 真心半解 The Half of It',
              image:require('../assets/MoviePic/69.jpg'),
              director:' 伍思薇',
              tag:['喜剧 ','爱情 ',' 同性'],
              actor:[' 莉娅·刘易斯','丹尼尔·迪默 ',' 艾丽克西斯·勒梅尔'],
              score:'8.0',
              introduction:'个性体贴的运动健将保罗爱上了学校校花，但他实在不善言辞，于是决定僱用内向的高材生艾莉帮他展开追求，毫不相干的两人也因此成为朋友。然而，艾莉发现自己竟然也对校花产生好感，她和保罗的友谊因此变得複杂。本片为编剧兼导演伍思薇的最新力作。 ',
              country_time:'美国/104分钟',
              date:'2020-05-01 '
          },

          {
            id:70,
                title:' 女巫 The Witches',
              image:require('../assets/MoviePic/70.jpg'),
              director:'罗伯特·泽米吉斯 ',
              tag:[' 喜剧','奇幻 ',' 冒险'],
              actor:['安妮·海瑟薇 ','奥克塔维亚·斯宾瑟 ',' 斯坦利·图齐'],
              score:'5.8 ',
              introduction:'该片基于罗尔德·达尔（《查理和巧克力工厂》原著作者）所著同名儿童小说，部分设定在挪威，部分设定在英国，讲述一个7岁小男孩和祖母住在一起，这个世界中存在着邪恶女巫，某次他偶遇女巫，被变成了老鼠，他必须尽力阻止她们破坏世界。 ',
              country_time:' 美国/106分钟',
              date:' 2020-10-22'
          },

          {
            id:71,
                title:'反击  ',
              image:require('../assets/MoviePic/71.jpg'),
              director:' 赵文卓',
              tag:[' 动作',' 悬疑'],
              actor:[' 赵文卓','姜怡伊 ',' 火线 '],
              score:' 4.9',
              introduction:'该片讲述了作为安保专家的陆子明受邀为一场油气厂项目竞标活动提供安全保卫工作却遭到竞争对手的蓄意陷害及同组人员的背叛和恶势力的甩锅，陆子明为自证清白，查找事件真相，上演惊险刺激的丛林大追逐，绝地反击的故事。 ',
              country_time:'中国大陆/87分37秒 ',
              date:' 2021-02-15'
          },

          {
            id:72,
                title:' 骗子 꾼',
              image:require('../assets/MoviePic/72.jpg'),
              director:' 张昌原',
              tag:[' 剧情','犯罪 '],
              actor:['玄彬 ','刘智泰 ',' 朴圣雄'],
              score:' 7.5',
              introduction:'为了逮捕涉及4万亿韩元、造成3万名受害者的稀世大骗子，诈骗犯（玄彬饰）和检察官展开较量的诈骗犯罪。玄彬将在片中饰演设下完美骗局的诈骗犯黄智成，是一位专挑诈骗犯行骗的天才诈骗犯；',
              country_time:' 韩国/117分钟',
              date:'2017-11-22 '
          },

          {
            id:73,
                title:'记忆之夜 기억의 밤 ',
              image:require('../assets/MoviePic/73.jpg'),
              director:'张恒准 ',
              tag:[' 悬疑',' 惊悚'],
              actor:[' 姜河那',' 金武烈','文成根 '],
              score:' 7.5',
              introduction:'　《记忆之夜》是一部讲述兄弟故事的惊悚片，哥哥因绑架事件失去了记忆，弟弟则一直在为哥哥找寻记忆 。 ',
              country_time:'韩国/109分钟 ',
              date:' 2017-11-29'
          },

          {
            id:74,
                title:'镰仓物语 DESTINY 鎌倉ものがたり ',
              image:require('../assets/MoviePic/74.jpg'),
              director:' 山崎贵',
              tag:['剧情 ','奇幻 '],
              actor:['堺雅人 ',' 高畑充希 ','堤真一 '],
              score:'7.0 ',
              introduction:'　祖辈相传的民俗作家一色正和（堺雅人 饰）与仰慕他的青年编辑亚纪子（高畑充希 饰）结为夫妇，新婚燕尔，夫妇俩亲昵无间，携手返回一色的出生地镰仓。回到镰仓不久，单纯的亚纪子就被眼前走过的河童小人吓了一跳。',
              country_time:'日本/129分钟 ',
              date:' 2018-09-14'
          },

          {
            id:75,
                title:'铁雨 강철비 ',
              image:require('../assets/MoviePic/75.jpg'),
              director:'杨宇硕 ',
              tag:['动作','惊悚'],
              actor:[' 郑雨盛',' 郭度沅','金甲洙 '],
              score:'8.2 ',
              introduction:'原朝鲜侦察总局特工严铁雨(郑雨盛 饰)受到征召前去位于朝韩边境的开城工业园区刺杀意图政变的朝鲜高官，不料却在开城遇袭，迫使他带着重伤昏迷的朝鲜最高领导人逃往韩国，局势突变，',
              country_time:'韩国/139分钟 ',
              date:'2017-12-14 '
          },

          {
            id:76,
                title:'公牛历险记 Ferdinand ',
              image:require('../assets/MoviePic/76.jpg'),
              director:'卡洛斯·沙尔丹哈 ',
              tag:[' 喜剧',' 动画 ','冒险'],
              actor:['约翰·塞纳 ','凯特·麦克金农 ',' 莉莉·戴'],
              score:' 7.3',
              introduction:'影片根据曼罗·里夫1936年经典童书《爱花的牛》改编，讲述西班牙一头名为“费迪南德”（约翰·塞纳 John Cena 配音）的公牛的爆笑历险故事。费迪南德体型健壮，但却心地善良性格温和，它被误认为是危险的野兽，从而被捕送往他乡被逼做一只“斗牛”。为回到家人身边，他不得不踏上了一场终极冒险旅程…… ',
              country_time:' 美国/108分钟',
              date:'2018-01-19 '
          },

          {
            id:77,
                title:"'童年的许诺 La promesse de l'aube '",
            image:require('../assets/MoviePic/77.jpg'),
                director:'埃里克·巴比尔 ',
              tag:['爱情 ',' 传记',' '],
              actor:['皮埃尔·尼内  ',' 夏洛特·甘斯布','迪迪埃·布尔东 '],
              score:' 8.3',
              introduction:'改编全法国中学生指定重点读物《我答应》。《贝礼一家》王牌监製群操刀，又一喜泪交织的亲情暖心之作，坎城影后夏绿蒂甘丝柏格，动人演出全欧洲的母亲典范；横跨五个国家、耗时十四个星期、深入20至50年代历史核心的史诗钜作。 ',
              country_time:'法国/131分钟 ',
              date:' 2017-12-20'
          },

          {
            id:78,
                title:'马戏之王 The Greatest Showman ',
              image:require('../assets/MoviePic/78.jpg'),
              director:'迈克尔·格雷西 ',
              tag:['歌舞 ',' 剧情','传记 '],
              actor:['休·杰克曼 ','  米歇尔·威廉姆斯',' 扎克·埃夫隆'],
              score:'7.8 ',
              introduction:'《马戏之王》取材自真人真事，好莱坞全能巨星休·杰克曼在片中饰演“马戏团鼻祖”、传奇人物P.T.巴纳姆。故事讲述了身处社会底层的巴纳姆依靠自己无穷想象力和锲而不舍的精神，从经营博物馆到一手开创',
              country_time:' 美国/105分钟',
              date:'2018-02-01 '
          },

          {
            id:79,
                title:' 与神同行：罪与罚 신과함께-죄와 벌',
              image:require('../assets/MoviePic/79.jpg'),
              director:'金容华 ',
              tag:[' 剧情',' 奇幻'],
              actor:['河正宇 ','车太贤 ',' 朱智勋'],
              score:'7.8 ',
              introduction:'原来倘若阎罗大王在1000年内令49位亡者得以往生，三位使者也可以重新投胎至凡间。他们相信第48位亡者——19年来出现的这位贵人金子洪是可以顺利重获新生的。然而在各地狱里，金子洪的过去接二连三地出现，原来这位贵人也依然有“不能说的秘密”。 ',
              country_time:' 韩国/139分钟',
              date:' 2017-12-20'
          },

          {
            id:80,
                title:' 华盛顿邮报 The Post ',
              image:require('../assets/MoviePic/80.jpg'),
              director:' 史蒂文·斯皮尔伯格',
              tag:[' 剧情',' 传记',' 历史'],
              actor:['梅丽尔·斯特里普 ','汤姆·汉克斯 ',' 莎拉·保罗森'],
              score:'8.3 ',
              introduction:'关于“五角大楼文件”泄密案（Pentagon Papers）的新片《The Post》，将史蒂文·斯皮尔伯格、汤姆·汉克斯与梅丽尔·斯特里普聚到了一起。斯皮尔伯格将作为导演与制片人身份参与制作，而影片的男女主角分别是汉克斯与梅姨。',
              country_time:'美国/ 116分钟',
              date:' 2018-01-12'
          },

        ],
              moviegroup:[
                {
                  id:1,
                  title:'这个杀手不太冷 - Léon',
                  // image:'https://p1.meituan.net/movie/6bea9af4524dfbd0b668eaa7e187c3df767253.jpg@464w_644h_1e_1c',
                  image:'../src/assets/loginPic.jpg',
                  director:'吕克·贝松',
                  tag:['剧情','动作','犯罪'],
                  actor:['让·雷诺','娜塔丽·波特曼','加里·奥德曼'],
                  score:'3.5',
                  introduction:'里昂（让·雷诺 饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔德（纳塔丽·波特曼 饰）敲开他的房门……',
                  country_time:'法国 / 110 分钟',
                  date:'1994-09-14'
                },
                {
                  id:2,
                  title:'这个杀手不太冷 - Léon',
                  image:'https://p1.meituan.net/movie/6bea9af4524dfbd0b668eaa7e187c3df767253.jpg@464w_644h_1e_1c',
                  director:'吕克·贝松',
                  tag:['剧情','动作','犯罪'],
                  actor:['让·雷诺','娜塔丽·波特曼','加里·奥德曼'],
                  score:'4.5',
                  introduction:'里昂（让·雷诺 饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔德（纳塔丽·波特曼 饰）敲开他的房门……',
                  country_time:'法国 / 110 分钟',
                  date:'1994-09-14'
                },
                {
                  id:3,
                  title:'这个杀手不太冷 - Léon',
                  image:'https://p1.meituan.net/movie/6bea9af4524dfbd0b668eaa7e187c3df767253.jpg@464w_644h_1e_1c',
                  director:'吕克·贝松',
                  tag:['剧情','动作','犯罪'],
                  actor:['让·雷诺','娜塔丽·波特曼','加里·奥德曼'],
                  score:'4.5',
                  introduction:'里昂（让·雷诺 饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔德（纳塔丽·波特曼 饰）敲开他的房门……',
                  country_time:'法国 / 110 分钟',
                  date:'1994-09-14'
                },
              ],

                value1: 4.5,
                value2: 4.2,
                value3: 4.5
            }
        },
      methods: {
          //n是取值[1,n+1]

          productNum(n){
            this.numList=[];
            let num = this.numList;
            for(let i = 0; i < 5; i++){
              num[i] = Math.floor(Math.random()*n)+1;
              for(let j = 0; j < i; j++){
                if(num[i] == num[j]){
                  i--;
                }
              }
            }
            return num;

          },
        productMovieList(){
            let self=this;
            self.productNum(50);
            self.moviegroup=[];
            self.numList.forEach(function (item)
            {
              self.moviegroup.push(self.movieData[item])
            })



        },
        retrunPic(id){
          return '../assets/MoviePic/'+id+'.jpg'
        },

      }
    }
</script>

<style scoped>

</style>
