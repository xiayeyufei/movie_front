<template>
    <div>
        <NavBar></NavBar>
        <router-view/>
        <div style="width: 1000px;margin: 25px auto auto;">
            <el-row>
                <el-card>
                    <el-row>
                        <el-steps :active="active" finish-status="success">
                            <el-step title="基本信息"></el-step>
                            <el-step title="高级搜索"></el-step>
                            <el-step title="排序"></el-step>
                        </el-steps>
                    </el-row>
                    <el-row style="margin-top: 15px">
                        <BasicInfo v-show="basicInfoHidden"></BasicInfo>
                    </el-row>
                    <el-row>
                        <AdvanceInfo v-show="advInfoHidden"></AdvanceInfo>
                    </el-row>
                    <el-row>
                        <el-col span="2" offset="8">
                            <el-button @click="back" v-show="nextHidden" size="medium">上一步</el-button>
                        </el-col>
                        <el-col span="2" offset="4">
                            <el-button @click="next" v-show="nextHidden" size="medium">下一步</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <Sort v-show="sortHidden"></Sort>
                    </el-row>
                    <el-row style="margin-top: 10px">
                        <div align="center">
                            <el-button @click="reset" v-show="sortHidden" size="medium">重置</el-button>
                        </div>
                    </el-row>
                </el-card>
            </el-row>
        </div>

        <div style="width: 1000px;margin: 25px auto auto;">
            <Results v-show="resultsHidden"></Results>
        </div>

    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";
    import BasicInfo from "@/components/BasicInfo";
    import AdvanceInfo from "@/components/AdvanceInfo";
    import Results from "@/components/Results";
    import Sort from "@/components/Sort";

    export default {
        name: "Recommend",
        components: {Sort, Results, AdvanceInfo, BasicInfo, NavBar},
        data() {
            return {
                active: 0,
                dynamicTags: ['标签一', '标签二', '标签三'],
                basicInfoHidden: true,
                advInfoHidden: false,
                resultsHidden: false,
                backHidden: true,
                nextHidden: true,
                sortHidden: false
            };
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
                this.basicInfoHidden = this.active === 0;
                this.advInfoHidden = this.active === 1;
                this.resultsHidden = (this.active === 2 || this.active === 3);
                this.nextHidden = (this.active !== 2);
                this.sortHidden = (this.active === 2);

            },
            back() {
                if (this.active-- < 0) this.active = 0;
                this.basicInfoHidden = this.active === 0;
                this.advInfoHidden = this.active === 1;
                this.resultsHidden = (this.active === 2 || this.active === 3);
                this.nextHidden = (this.active !== 2);
                this.sortHidden = (this.active === 2);
            },
            reset() {
                this.$router.go(0)
            }
        }
    }
</script>

<style scoped>

</style>
