<template>
    <el-menu
            :default-active="'/index'"
            router
            mode="horizontal"
            background-color="white"
            text-color="#222"
            active-text-color="red"
            style="min-width: 1300px">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
        </el-menu-item>
        <el-link @click="goHome"
                 style="position: absolute;padding-top: 17px;margin-left:275px;font-size: 18px;font-weight: bold">
            {{username}}的空间
        </el-link>
        <!--        <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>-->
        <!--        <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">White Jotter - Your Mind Palace</span>-->
        <!--        <el-menu-item @click="loginOut">注销</el-menu-item>-->

        <el-submenu index="6" style="float:right;">
            <template slot="title">{{user}}</template>
            <el-menu-item index="6-1" @click="help">帮助</el-menu-item>
            <el-menu-item index="6-1" @click="loginOut">注销</el-menu-item>
        </el-submenu>
        <el-menu-item index="user" @click="user" style="float:right;">
            <template slot="title">
                <el-avatar size="small" src="http://pic2.zhimg.com/50/v2-fb824dbb6578831f7b5d92accdae753a_hd.jpg"></el-avatar>
                <span>用户中心</span>
            </template>
        </el-menu-item>
        <el-menu-item index="4" @click="sys" style="float:right;">
            <template slot="title">
                <i class="el-icon-bell"></i>
                <span>消息提醒</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
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
