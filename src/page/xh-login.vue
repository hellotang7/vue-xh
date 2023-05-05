<template>
  <div class="login">
    <div class="mask">
      <div class="container">
        <div class="background">
          <div class="left">
            <div class="center">
              <img class="logo" src="../assets/logo.png" alt="">
              <div class="welcome-zh">欢迎登录</div>
              <div class="welcome">Welcome</div>
              <div class="application_name">智能库房资产管理系统</div>
            </div>
          </div>
          <div class="right">
            <div class="center">
              <el-form  class="login-container"  :model="loginForm"  ref="loginForm" :rules="rules">
                <div class="login_title">欢迎登录</div>
                <el-form-item  prop="userId" autocomplete="on">
                  <el-input  v-model="loginForm.userId" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item  prop="password" style="margin-bottom: 15px">
                  <el-input  v-model="loginForm.password" type="password" @keyup.enter="submitForm('loginForm')" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-checkbox @click="open()"  v-model="checked">记住密码</el-checkbox>
                </el-form-item>
                <el-form-item>
                  <el-button  @click="submitForm" type="primary">登录</el-button>
                </el-form-item>
              </el-form>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { getMenu } from '../api/index'
import Cookie from 'js-cookie'

export default {
  data(){
    return{
      loginForm: {
        userId: "",
        password: "",
      },
      rules: {
        userId: [
          {required: true, trigger: 'blur', messages: '请输入用户名'}
        ],
        password: [
          {required: true, trigger: 'blur', messages: '请输入密码'}
        ],
      },
      checked: false
    }
  },

  mounted() {

    let username = localStorage.getItem("userId");
    if (username) {
      this.loginForm.userId = localStorage.getItem("userId");
      this.loginForm.password = localStorage.getItem("password");
      this.checked = true;
    }
    window.addEventListener("keydown",this.keyDown)
  },
  methods: {

    keyDown(e){
      if(e.keyCode === 13){
        this.submitForm()
      }
    },


    submitForm() {

      this.$refs.loginForm.validate((valid) => {
        if (valid) {

          getMenu(this.loginForm).then(({data})=>{
            if (data.code === 20000) {
              this.$message({
                message: '登录成功',
                type: 'success'
              });

              // toKen信息存入cookie用于不同页面间的通信
              Cookie.set('toKen', data.data.toKen)
              // 跳转到页面
              this.$router.push({path: '/home'})
            }else {
              this.$message.error('密码错误');
            }


          })


          /* ------ 账号密码的存储 ------ */
          if (this.checked) {
            let password = this.loginForm.password;
            localStorage.setItem("userId", this.loginForm.userId);
            localStorage.setItem("password", password);
          } else {
            localStorage.removeItem("userId");
            localStorage.removeItem("password");
          }

          /* ------ http登录请求 ------ */
        } else {
          console.log("error submit!!");
          return false;
        }

      });
    },


  },
}
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/login_background.png");
}


.container {
  width: 1080px;
  height: 635px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  box-shadow: 0 0 50px #aab1b9;

  .background {
    width: 100%;
    height: 100%;
    background: url("@/assets/DM_20230504164306_001.png") center;
    display: flex;

    .center {
      width: 400px;
      text-align: center;
      height: 385px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 50%;
      height: 100%;
      color: #F5F5F5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .logo {
        width: 100px;
        height: 100px;
        margin-bottom: 35px;
      }


      .welcome-zh {
        font-size: 24px;
        font-weight: 400;
      }

      .welcome {
        font-family: '微软雅黑', sans-serif;
        font-size: 34px;
        font-weight: 500;
        margin-bottom: 50px;
      }

      .application_name {
        color: #d3d8e0;
        font-size: 30px;
        font-weight: lighter;
        margin-bottom: 31px;
        height: 68px;
      }


    }


    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      background-color: #F5F5F5;

      .login_title {
        color: #5b8cff;
        font-size: 32px;
        margin-bottom: 50px;
      }

      .el-checkbox {
        position: absolute;
        left: 0;
        line-height: 0;
      }

      .el-button {
        margin-top: 15px;
        width: 400px;
        height: 40px;
      }

    }
  }
}
</style>
