<template>
    <el-row>
        <el-col span="12">
            <el-radio-group v-model="radio">
                <el-radio :label="6">按热度排序</el-radio>
                <el-radio :label="9">按评价排序</el-radio>
                <el-radio :label="3">按时间排序</el-radio>
            </el-radio-group>
        </el-col>
        <el-col span="12" push="7">
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="升序排列"></el-checkbox>
                <el-checkbox label="暂未收藏"></el-checkbox>
            </el-checkbox-group>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Sort",
        data() {
            return {
                radio: 3,
                checkList: []

            }
        }
    }
</script>

<style scoped>

</style>
