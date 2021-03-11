<template>
    <el-form>
        <el-row>
            <el-form-item label="电影标签" class="labels">
                <el-button round size="small" :style="{backgroundColor: color1}"
                           @click="color1=color1==='#ecf5ff'?'#ffffff':'#ecf5ff'">全部
                </el-button>
                <el-button round size="small" :style="{backgroundColor: color2}"
                           @click="color2=color2==='#ecf5ff'?'#ffffff':'#ecf5ff'">动作
                </el-button>
                <el-button round size="small" :style="{backgroundColor: color3}"
                           @click="color3=color3==='#ecf5ff'?'#ffffff':'#ecf5ff'">喜剧
                </el-button>
                <el-button round size="small" :style="{backgroundColor: color4}"
                           @click="color4=color4==='#ecf5ff'?'#ffffff':'#ecf5ff'">爱情
                </el-button>
                <el-button round size="small" :style="{backgroundColor: color5}"
                           @click="color5=color5==='#ecf5ff'?'#ffffff':'#ecf5ff'">科幻
                </el-button>
                <el-button round size="small" :style="{backgroundColor: color6}"
                           @click="color6=color6==='#ecf5ff'?'#ffffff':'#ecf5ff'">悬疑
                </el-button>
                <el-button round size="small" :style="{backgroundColor: color7}"
                           @click="color7=color7==='#ecf5ff'?'#ffffff':'#ecf5ff'">恐怖
                </el-button>
                <el-button round size="small" :style="{backgroundColor: color8}"
                           @click="color8=color8==='#ecf5ff'?'#ffffff':'#ecf5ff'">犯罪
                </el-button>
                <el-button round size="small" :style="{backgroundColor: color9}"
                           @click="color9=color9==='#ecf5ff'?'#ffffff':'#ecf5ff'">剧情
                </el-button>
            </el-form-item>
        </el-row>
        <el-row>
            <el-col span="12">
                <el-form-item label="导演姓名">
                    <el-select
                            v-model="state1"
                            multiple
                            filterable
                            remote
                            reserve-keyword
                            placeholder="请输入导演名"
                            :remote-method="remoteMethod1"
                            :loading="loading1">
                        <el-option
                                v-for="item in options1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col span="12">
                <el-form-item label="演员姓名">
                    <el-select
                            v-model="state2"
                            multiple
                            filterable
                            remote
                            reserve-keyword
                            placeholder="请输入演员名"
                            :remote-method="remoteMethod2"
                            :loading="loading2">
                        <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script>
    export default {
        name: "BasicInfo",
        data() {
            return {
                color1: "#ffffff",
                color2: "#ffffff",
                color3: "#ffffff",
                color4: "#ffffff",
                color5: "#ffffff",
                color6: "#ffffff",
                color7: "#ffffff",
                color8: "#ffffff",
                color9: "#ffffff",
                color10: "#ffffff",
                loading1: false,
                state1: '',
                directors: ["新房昭之", "冯小刚"],
                list1: [],
                options1: [],
                loading2: false,
                state2: '',
                actors: ["满岛光", "刘亦菲"],
                list2: [],
                options2: []
            }
        }, mounted() {
            this.list1 = this.directors.map(item => {
                return {value: `${item}`, label: `${item}`};
            });
            this.list2 = this.actors.map(item => {
                return {value: `${item}`, label: `${item}`};
            });
        }, methods: {
            remoteMethod1(query) {
                if (query !== '') {
                    this.loading1 = true;
                    setTimeout(() => {
                        this.loading1 = false;
                        this.options1 = this.list1.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options1 = [];
                }
            }, remoteMethod2(query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        this.options2 = this.list2.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options2 = [];
                }
            }
        }
    }
</script>

<style scoped>

</style>
