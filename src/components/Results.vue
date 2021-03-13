<template>
    <div>
      <div >
        <el-row type="flex" justify="end" style="margin-bottom: 20px">
          <el-button plain type="primary" icon="el-icon-refresh">再来一批</el-button>
        </el-row>
        <el-row style="margin-bottom: 20px" v-for="movieitem in moviegroup" :key="movieitem.id">
            <el-card body-style="padding: 0" style="height: auto" >
                <el-row >
                    <el-col span="4">
                        <img :src=movieitem.image
                             :alt=movieitem.title
                             style="background-size: cover;height: 220px">
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
                                    v-model="movieitem.score"
                                    disabled
                                    medium
                                    background-color="orange lighten-3"
                                    color="orange">
                            </v-rating>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <span style="color: #475669;font-style: italic;font-size: small">{{movieitem.introduction}}</span>
                        </el-row>
                    </el-col>
                </el-row>
            </el-card>
        </el-row>
      </div>
        <el-row style="margin-top: 20px">
            <el-card body-style="padding: 0" style="height: 220px">
                <el-row>
                    <el-col span="4">
                        <img src="https://p1.meituan.net/movie/92198a6fc8c3f5d13aa1bdf203572c0f99438.jpg@464w_644h_1e_1c"
                             alt="美国往事 - Once Upon a Time in America"
                             style="background-size: cover;height: 220px">
                    </el-col>
                    <el-col span="15" offset="1">
                        <el-row style="margin-top: 15px">
                            <h2 style="margin: 0 0">美国往事 - Once Upon a Time in America</h2>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <el-button type="danger" round size="mini">剧情</el-button>
                            <el-button type="danger" round size="mini">犯罪</el-button>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <el-tag size="small">瑟吉欧·莱昂</el-tag>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <el-tag size="small">罗伯特·德尼罗</el-tag>
                            <el-tag size="small" style="margin-left: 15px">詹姆斯·伍兹</el-tag>
                            <el-tag size="small" style="margin-left: 15px">伊丽莎白·麦戈文</el-tag>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <span style="font-size: 13px">意大利、美国 / 229 分钟</span>
                        </el-row>
                        <el-row style="margin-top: 6px">
                            <span style="font-size: 13px">2015-04-23</span>
                        </el-row>
                    </el-col>
                    <el-col span="4" pull="1">
                        <el-row>
                            <span style="color: #ffb400;font-size: 40px;font-weight: 700;">{{value2}}</span>
                        </el-row>
                        <el-row>
                            <el-rate
                                    v-model="value2"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    score-template="">
                            </el-rate>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <span style="color: #475669;font-style: italic;font-size: small">"二十年代的美国，纽约少年“面条”（罗伯特·德尼罗 饰）和几个同龄朋友一起认识了聪明狡黠的“麦大”（詹姆斯·伍兹 饰），他们开始从事走私活动……"</span>
                        </el-row>
                    </el-col>
                </el-row>
            </el-card>
        </el-row>


        <el-row style="margin-top: 20px">
            <el-card body-style="padding: 0" style="height: 220px">
                <el-row>
                    <el-col span="4">
                        <img src="https://p0.meituan.net/movie/1199dc6273680f175fd9b06c9c36d08a219658.jpg@464w_644h_1e_1c"
                             alt="教父 - The Godfather"
                             style="background-size: cover;height: 220px">
                    </el-col>
                    <el-col span="15" offset="1">
                        <el-row style="margin-top: 15px">
                            <h2 style="margin: 0 0">教父 - The Godfather</h2>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <el-button type="danger" round size="mini">剧情</el-button>
                            <el-button type="danger" round size="mini">犯罪</el-button>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <el-tag size="small">弗朗西斯·福特·科波拉</el-tag>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <el-tag size="small">马龙·白兰度</el-tag>
                            <el-tag size="small" style="margin-left: 15px">阿尔·帕西诺</el-tag>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <span style="font-size: 13px">美国 / 175 分钟</span>
                        </el-row>
                        <el-row style="margin-top: 6px">
                            <span style="font-size: 13px">1972-03-24</span>
                        </el-row>
                    </el-col>
                    <el-col span="4" pull="1">
                        <el-row>
                            <span style="color: #ffb400;font-size: 40px;font-weight: 700;">{{value3}}</span>
                        </el-row>
                        <el-row>
                            <el-rate
                                    v-model="value3"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    score-template="">
                            </el-rate>
                        </el-row>
                        <el-row style="margin-top: 10px">
                            <span style="color: #475669;font-style: italic;font-size: small">"40年代的美国，“教父”维托·唐·柯里昂（马龙·白兰度 饰）是黑手党柯里昂家族的首领，带领家族从事非法的勾当，但同时他也是许多弱小平民的保护神……"</span>
                        </el-row>
                    </el-col>
                </el-row>
            </el-card>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Results",
        data() {
            return {
              moviegroup:[
                {
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
              ],

                value1: 4.5,
                value2: 4.2,
                value3: 4.5
            }
        }
    }
</script>

<style scoped>

</style>
