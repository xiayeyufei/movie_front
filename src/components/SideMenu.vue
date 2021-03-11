<template>
    <el-menu
            default-active="1"
            style="width: 130px">
        <a href="#header-div">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">折线图</span>
            </el-menu-item>
        </a>
        <a href="#update-card">
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">条形图</span>
            </el-menu-item>
        </a>
        <a href="#slogan">
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">网络拓扑图</span>
            </el-menu-item>
        </a>
        <a href="#about">
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">散点图</span>
            </el-menu-item>
        </a>
    </el-menu>
</template>

<script>
    export default {
        name: "SideMenu"
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
    }
</style>



