<template>
    <v-app-bar
        app
        color="light-blue lighten-3"

    >
      <v-container class="py-0 fill-height" elevation="5">
        <v-menu
            class="d-flex justify-start mb-6 "
            offset-y
            open-on-hover
            v-for="(link,index) in links" :key="index"
        >
          <template v-slot:activator="{ on, attrs }" >
            <v-btn class="light-blue lighten-3" style="color: white"
                   elevation=0
                   v-bind="attrs"
                   v-on="on"
                   @click="$router.push(link.url)"
            >
              {{link.title}}
            </v-btn>
          </template>
          <v-spacer></v-spacer>
        </v-menu>

        <v-spacer></v-spacer>

        <v-responsive max-width="260" height="100%" style="padding-top: 20px">
          <v-row>

            <v-menu
                class="d-flex justify-start mb-6 "
                offset-y
                open-on-hover
            >
              <template v-slot:activator="{ on, attrs }" >
                <v-btn  v-bind="attrs"
                        height="100%"
                        v-on="on" color="light-blue lighten-3" elevation="0" style="text-align: center;color:white;" @click="$router.push('/login')">
                  <v-avatar
                      size="40"

                  ><img src="../assets/185ca9e54910fd64a7b7a7704d62ff2f34ef7b3a.jpg@518w_1e_1c.jpg">
                  </v-avatar>
                </v-btn>

              </template>
              <v-list >
                <v-list-item
                    @click="$router.push('/user')"
                >
                  <v-list-item-title>个人中心</v-list-item-title>
                </v-list-item>
                <v-list-item
                    @click="$router.push('/login')"
                >
                  <v-list-item-title>注销</v-list-item-title>
                </v-list-item>
              </v-list>
              <v-spacer></v-spacer>
            </v-menu>

          </v-row>
        </v-responsive>
      </v-container>
    </v-app-bar>

<!--    <el-menu-->
<!--            :default-active="'/index'"-->
<!--            router-->
<!--            mode="horizontal"-->
<!--            background-color="white"-->
<!--            text-color="#222"-->
<!--            active-text-color="red"-->
<!--            style="min-width: 1300px">-->
<!--        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">-->
<!--            {{ item.navItem }}-->
<!--        </el-menu-item>-->
<!--        <el-link @click="goHome"-->
<!--                 style="position: absolute;padding-top: 17px;margin-left:275px;font-size: 18px;font-weight: bold">-->
<!--            {{username}}的空间-->
<!--        </el-link>-->
<!--        &lt;!&ndash;        <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>&ndash;&gt;-->
<!--        &lt;!&ndash;        <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">White Jotter - Your Mind Palace</span>&ndash;&gt;-->
<!--        &lt;!&ndash;        <el-menu-item @click="loginOut">注销</el-menu-item>&ndash;&gt;-->

<!--        <el-submenu index="6" style="float:right;">-->
<!--            <template slot="title">{{user}}</template>-->
<!--            <el-menu-item index="6-1" @click="help">帮助</el-menu-item>-->
<!--            <el-menu-item index="6-1" @click="loginOut">注销</el-menu-item>-->
<!--        </el-submenu>-->
<!--        <el-menu-item index="user" @click="user" style="float:right;">-->
<!--            <template slot="title">-->
<!--                <el-avatar size="small" src="http://pic2.zhimg.com/50/v2-fb824dbb6578831f7b5d92accdae753a_hd.jpg"></el-avatar>-->
<!--                <span>用户中心</span>-->
<!--            </template>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="4" @click="sys" style="float:right;">-->
<!--            <template slot="title">-->
<!--                <i class="el-icon-bell"></i>-->
<!--                <span>消息提醒</span>-->
<!--            </template>-->
<!--        </el-menu-item>-->
<!--    </el-menu>-->
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
              links: [
                {title:'电影推荐',url:'/recommend'},
                {title:'收藏夹',url:'/library'},
                {url: '/cinema', title: '院线排雷'},
                {url: '/data', title: '大数据可视化'}
              ],
                username: sessionStorage.getItem('user'),
                navList: [
                    {name: '/recommend', navItem: '电影推荐'},
                    {name: '/library', navItem: '收藏夹'},
                    {name: '/cinema', navItem: '院线排雷'},
                    {name: '/data', navItem: '大数据可视化'}
                ]
            }
        }, methods: {
            goHome() {
                this.$router.push({path: '/home'});
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    span {
        pointer-events: none;
    }
</style>
