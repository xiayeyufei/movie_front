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


</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
              links: [
                {title:'主页',url:'/home'},
                {title:'电影推荐',url:'/recommend'},
                {title:'收藏夹',url:'/library'},
                {url: '/cinema', title: '院线排雷'},
                {url: '/data', title: '大数据可视化'}
              ],
                username: sessionStorage.getItem('user'),
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
