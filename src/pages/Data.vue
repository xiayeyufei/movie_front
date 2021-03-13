<template>
    <div>
        <NavBar></NavBar>
        <div style="width: 1000px;margin: 20px auto auto auto">
          <v-card color="basil">
            <v-card-title class="text-center justify-center py-6">
              <h1 class="font-weight-bold display-3 basil--text">
                大数据可视化
              </h1>
            </v-card-title>

            <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                grow
            >
              <v-tab href="#tabaa">柱状图</v-tab>
              <!--<v-tab href="#tab2" @click="majorSelect()">专业优先</v-tab>-->
              <v-tab href="#tab2" >折线图</v-tab>
              <v-tab href="#tab3" >网络拓扑图</v-tab>
              <v-tab href="#tab4" >散点图</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item
                  :value="'tabaa'"
              >
                <v-card
                    color="basil"
                    flat
                >
                  <v-container>
                    <el-row>
                      <svg class="icon myIconStyle" >
                        <use xlink:href="#icon-fsux_tubiao_zhuzhuangtu"></use>
                      </svg>
                    </el-row>
                    <el-row style="margin-top: -15px">

                      <h2 class="text-center" style="margin-left:200px;margin-right:200px;color: #4ea4dc;border-bottom: #4ea4dc ;border-bottom-style:solid;border-bottom-width: 0.25rem;font-size: 1.6rem;
line-height: 3rem">柱状图</h2>
                    </el-row>

                    <el-row style="margin-top: 20px;text-align: center;font-size: large">
                      <span class="basil--text">探索观众最感兴趣的电影流派</span>
                    </el-row>
                    <el-row style="margin-top: 20px;text-align: center">
                      <span class="basil--text">下图显示了在各时间段发行的各流派电影的受欢迎程度（Facebook赞数 / 电影数量）。</span>
                    </el-row>
                    <el-row style="margin-top: 40px;margin-left: 140px">
                      <iframe src="/barchart/barchart.html"
                              style="top: 0;bottom: 0;left: 0;width: 100%;height: 600px;border: 0"></iframe>
                    </el-row>
                  </v-container>
                </v-card>
              </v-tab-item>
              <v-tab-item
                  :value="'tab2'"
              >
                <v-card
                    color="basil"
                    flat
                >
                  <el-row>
                    <svg class="icon myIconStyle" aria-hidden="true">
                      <use xlink:href="#icon-fsux_zhexiantu"></use>
                    </svg>
                  </el-row>
                  <el-row>
                    <h2 class="text-center" style="margin-left:200px;margin-right:200px;color: #4ea4dc;border-bottom: #4ea4dc ;border-bottom-style:solid;border-bottom-width: 0.25rem;font-size: 1.6rem;
line-height: 3rem">折线图</h2>
                  </el-row>
                  <el-row style="margin-top: 20px;text-align: center;font-size: large">
                    <span class="basil--text">探索电影流派趋势</span>
                  </el-row>
                  <el-row style="margin-top: 20px;text-align: center">
                    <span class="basil--text">该图展示了一定时期内发行的电影数量，以此可以知道该时期内的电影趋势。</span>
                  </el-row>
                  <el-row style="margin-top: 40px;margin-left: 80px">
                    <iframe src="/linechart/linechart.html"
                            style=" top: 0;bottom: 0;left: 0;width: 100%;height: 600px;border: 0;"></iframe>
                  </el-row>
                </v-card>
              </v-tab-item>
              <v-tab-item
                  :value="'tab3'"
              >
                <v-card
                    color="basil"
                    flat
                >
                  <el-row>
                    <svg class="icon myIconStyle" aria-hidden="true">
                      <use xlink:href="#icon-fsux_tubiao_guanxitu"></use>
                    </svg>
                  </el-row>
                  <el-row>
                    <h2 class="text-center" style="margin-left:200px;margin-right:200px;color: #4ea4dc;border-bottom: #4ea4dc ;border-bottom-style:solid;border-bottom-width: 0.25rem;font-size: 1.6rem;
line-height: 3rem">网络拓扑图</h2>
                  </el-row>
                  <el-row style="margin-top: 20px;text-align: center;font-size: large">
                    <span class="basil--text">探索最佳拍档</span>
                  </el-row>
                  <el-row style="margin-top: 20px;text-align: center">
                    <span class="basil--text">下图显示了各个导演和演员在各流派电影中的合作关系。这些影片的IMDb得分均在7.5以上。</span>
                  </el-row>
                  <el-row style="margin-top: 10px;text-align: center">
                    <span class="basil--text">导演表示为黄色节点，而演员表示为蓝色节点。您可以在下拉菜单中更改流派。</span>
                  </el-row>
                  <el-row style="margin-top: 40px;margin-left: 5px">
                    <iframe src="/networkchart/networkchart.html"
                            style=" top: 0;bottom: 0;left: 0;width: 100%;height: 600px;border: 0;"></iframe>
                  </el-row>
                </v-card>
              </v-tab-item>
              <v-tab-item
                  :value="'tab4'"
              >
                <v-card
                    color="basil"
                    flat
                >
                  <el-row>
                    <svg class="icon myIconStyle" aria-hidden="true">
                      <use xlink:href="#icon-fsux_tubiao_sandiantu"></use>
                    </svg>
                  </el-row>
                  <el-row>
                    <h2 class="text-center" style="margin-left:200px;margin-right:200px;color: #4ea4dc;border-bottom: #4ea4dc ;border-bottom-style:solid;border-bottom-width: 0.25rem;font-size: 1.6rem;
line-height: 3rem">散点图</h2>
                  </el-row>

                  <el-row style="margin-top: 20px;text-align: center;font-size: large">
                    <span class="basil--text">探索电影评分与票房之间的关系</span>
                  </el-row>
                  <el-row style="margin-top: 20px;text-align: center">
                    <span class="basil--text">下图显示了IMDb评分与影片票房之间的关系。尽管相关性不强，但足以说明影片评分与票房之间存在正相关关系。</span>
                  </el-row>
                  <el-row style="margin-top: 20px;margin-left: 100px">
                    <iframe src="/scatterchart/scatterchart.html"
                            style=" top: 0;bottom: 0;left: 0;width: 100%;height: 600px;border: 0;"></iframe>
                  </el-row>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </div>
    </div>

</template>

<script>
    import NavBar from '@/components/NavBar'
    // import SideMenu from "@/components/SideMenu";

    export default {
        name: "BigData",
        components: {NavBar},
        data() {
            return {
              tab: null,
              items: [
                '柱状图', '折线图', '网络拓扑图', '散点图',
              ],
            }
        },
        mounted() {
            document.querySelector('body').setAttribute('style', 'background-color:#f5f5f5')
        },

    }
</script>

<style scoped>
    .icon {
        width: 60px;
        height: 60px;
        margin-left: 455px;
        fill: currentColor;
    }
    .basil {
      background-color: #FFFBE6 !important;
    }
    .basil--text {
      color: #356859 !important;
    }
</style>
