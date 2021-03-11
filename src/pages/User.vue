<template>
    <div>
        <NavBar></NavBar>
        <div style="width: 1000px;margin: 25px auto auto">
            <el-card>
                <el-row style="margin-top: 20px">
                    <div style="text-align: center">
                        <el-avatar :size="100"
                                   style="display: inline-block"
                                   src="http://pic2.zhimg.com/50/v2-fb824dbb6578831f7b5d92accdae753a_hd.jpg">
                        </el-avatar>
                    </div>
                </el-row>
                <el-row>
                    <h3 style="text-align: center">{{username}}</h3>
                </el-row>
                <el-row style="margin-top: 20px">
                    <el-col span="2" offset="10">
                        <span>姓名:</span>
                    </el-col>
                    <el-col span="4">
                        <span>野原新之助</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 15px">
                    <el-col span="2" offset="10">
                        <span>昵称:</span>
                    </el-col>
                    <el-col span="4">
                        <span>{{username}}</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 15px">
                    <el-col span="2" offset="10">
                        <span>年龄:</span>
                    </el-col>
                    <el-col span="4">
                        <span>5</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 15px">
                    <el-col span="2" offset="10">
                        <span>性别:</span>
                    </el-col>
                    <el-col span="4">
                        <span>男</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 15px">
                    <el-col span="2" offset="10">
                        <span>现居:</span>
                    </el-col>
                    <el-col span="4">
                        <span>日本/埼玉县/春日部市</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 15px">
                    <el-col span="2" offset="10">
                        <span>职业:</span>
                    </el-col>
                    <el-col span="4">
                        <span>幼稚园学生</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 15px">
                    <el-col span="2" offset="10">
                        <span>关联:</span>
                    </el-col>
                    <el-col span="1">
                        <svg class="icon myStyle" aria-hidden="true" ref="http://douban.com">
                            <use xlink:href="#icon-douban"></use>
                        </svg>
                    </el-col>
                    <el-col span="1">
                        <svg class="icon myStyle" aria-hidden="true">
                            <use xlink:href="#icon-weibo"></use>
                        </svg>
                    </el-col>
                    <el-col span="1">
                        <svg class="icon myStyle" aria-hidden="true">
                            <use xlink:href="#icon-imdb"></use>
                        </svg>
                    </el-col>
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";

    export default {
        name: "User",
        components: {NavBar},
        data() {
            return {
                username: sessionStorage.getItem('user'),
                form: {
                    name: '',
                    region: '',
                    type: ''
                }
            }
        }
    }
</script>

<style scoped>
    .myStyle {
        width: 22px;
        height: 22px;
        fill: currentColor;
    }

</style>
