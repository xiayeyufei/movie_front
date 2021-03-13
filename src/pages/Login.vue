<template>
    <div id="poster">
        <el-form :model="ruleForm"
                 status-icon
                 :rules="rules"
                 ref="ruleForm"
                 class="login-container"
                 label-width="0px">
            <h2 style="text-align: center ;color: #4ea4dc;border-bottom: #4ea4dc ;border-bottom-style:solid;border-bottom-width: 0.25rem;font-size: 1.6rem;
line-height: 3rem;">豆瓣瓣登录</h2>
          <p>
            <br>
          </p>
            <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm.username"
                          auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password"
                          auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item style="width: 100%">
                <v-btn color="light-blue lighten-3" style="color:white;width: 100%;background: #505458;border: none" v-on:click="handleSubmit"
                           :loading="login">登录
                </v-btn>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                login: false,
                //表单对象
                ruleForm: {
                    username: '',
                    password: '',
                },
                //表单校验规则
                rules: {
                    username: [{required: true, message: 'please enter your account', trigger: 'blur'}],
                    password: [{required: true, message: 'enter your password', trigger: 'blur'}]
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.login = false;
                        sessionStorage.setItem('user', this.ruleForm.username);
                        this.$router.push({path: '/home'});

                    } else {
                        console.log('error submit!');
                        return false;
                    }
                })
            }
        }
    };
</script>


<style scoped>
    #poster {
        background: url("../assets/59190594_p0.jpg") no-repeat center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }

    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 200px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }



</style>
