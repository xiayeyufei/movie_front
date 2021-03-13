<template>
    <div>
        <NavBar></NavBar>
        <router-view/>
      <v-container>
        <el-row>
          <el-col span="18" offset="3">
            <v-carousel :interval="4000" height="400px">
              <v-carousel-item v-for="item in carousels" :key="item.img">
                <img class="carousel-img" :src="item.img" @click="goDetail(item.id)" alt="No Network.">
              </v-carousel-item>
            </v-carousel>
          </el-col>
        </el-row>

        <el-row style="padding-top: 50px">
          <el-col span="18" offset="3">
            <el-card>
              <el-row>
                <el-col span="8">
                  <a href="#/details?id=6534248">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3654606833,2475380010&fm=26&gp=0.jpg"
                         alt="《无敌破坏王2：大闹互联网》：最具互联网精神的动画佳作">
                  </a>
                </el-col>
                <el-col span="15" offset="1">
                  <!--                            <h4 style="text-align: center">s</h4>-->
                  <el-link href="#/details?id=6534248"
                           style="text-align: center;font-weight: bold;font-size: large">
                    《无敌破坏王2：大闹互联网》：最具互联网精神的动画佳作
                  </el-link>
                  <p class="txt-abstract">
                    去年11月，由迪士尼打造的动画电影《无敌破坏王2：大闹互联网》在国内上映。影片继续围绕生活在电玩游戏厅的破坏王拉尔夫和赛车女孩云妮洛普展开。因为一次意外，云妮洛普所在的游戏装备损坏，他们决定前往互联网寻...</p>
                  <div class="txt-date">2019-03-01</div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>


        <el-row style="margin-top: 20px">
          <el-col span="18" offset="3">
            <el-card>
              <el-row>
                <el-col span="8">
                  <a href="#/details?id=26266893">
                    <img src="http://image11.m1905.cn/uploadfile/2019/0208/thumb_1_320_174_20190208021755258444.jpg"
                         alt="独家解析《流浪地球》中国表达带给科幻的独特情怀">
                  </a>
                </el-col>
                <el-col span="15" offset="1">
                  <!--                            <h4 style="text-align: center">s</h4>-->
                  <el-link href="#/details?id=26266893"
                           style="text-align: center;font-weight: bold;font-size: large">
                    独家解析《流浪地球》中国表达带给科幻的独特情怀
                  </el-link>
                  <p class="txt-abstract">
                    本期《今日影评》特邀导演郭帆，送出新年“振兴福”。为您解析《流浪地球》：中国表达带给科幻的独特情怀。</p>
                  <div class="txt-date">2019-02-08</div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>


        <el-row style="margin-top: 20px">
          <el-col span="18" offset="3">
            <el-card>
              <el-row>
                <el-col span="8">
                  <a href="#/details?id=26374197">
                    <img src="http://image13.m1905.cn/uploadfile/2018/1225/thumb_1_320_174_20181225093645278589.jpg"
                         alt="《蜘蛛侠：平行宇宙》跳出舒适圈 开启多远宇宙空间">
                  </a>
                </el-col>
                <el-col span="15" offset="1">
                  <!--                            <h4 style="text-align: center">s</h4>-->
                  <el-link href="#/details?id=26374197"
                           style="text-align: center;font-weight: bold;font-size: large">
                    《蜘蛛侠：平行宇宙》跳出舒适圈 开启多远宇宙空间
                  </el-link>
                  <p class="txt-abstract">
                    本期《今日影评》特邀中国电影艺术研究中心副研究员左衡，为您解析《蜘蛛侠：平行宇宙》：六个蜘蛛侠会发生怎样的故事？</p>
                  <div class="txt-date">2018-12-24</div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </v-container>



    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    export default {
        name: "Home",
        components: {NavBar},
        data() {
            return {

                carousels: [
                    {
                        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=257249189,2109112446&fm=26&gp=0.jpg',
                        id: '257249189'
                    },
                    {
                        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649557168,2712487236&fm=26&gp=0.jpg',
                        id: '2649557168'
                    },

                    {
                        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2162235035,4028825346&fm=26&gp=0.jpg',
                        id: '2162235035'
                    },
                    {
                        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3028762620,2746527171&fm=26&gp=0.jpg',
                        id: '3028762620'
                    }
                ]
            }
        },
        methods: {
            goDetail(val) {
                this.$router.push({path: '/details', query: {id: val}})
            }
        }
    }
</script>
<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

</style>

<style scoped>
    img {
        width: 100%;
    }

    .carousel-img {
        width: 100%;
        height: 100%;
        background: white;
        border: 1px solid #ddd;
        padding: 4px;
        cursor: pointer;
    }

    .command-list li {
        padding-bottom: 50px;
        cursor: pointer;
    }

    .list-txt a {
        display: block;
    }

    .txt-abstract {
        color: #888888;
        font: 14px/2 "Microsoft YaHei";
        margin-top: 25px;
        height: 84px;
    }

    .txt-date {
        float: right;
        height: 20px;
        font: 14px/20px "Microsoft YaHei";
        font-family: Verdana, serif;
    }
</style>
