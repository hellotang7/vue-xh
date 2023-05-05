<template>
  <div class="header">
    <div class="log">
      <img alt="" src="@/assets/vue.png">
    </div>
    <div class="header-left">
      <h1>智能库房资产管理系统</h1>
      <div class="user">
        <img src="@/assets/vue.png" alt="">
        <p>管理员(admin)</p>
      </div>
    </div>

    <div class="header-right">
      <div class="f5" @click="open3"><i class="el-icon-refresh"></i></div>
      <div class="quit"><el-button type="text" @click="open1"><i class="el-icon-close"></i></el-button></div>
      <div class="c"><el-button type="text" @click="open2"><i class="el-icon-info"></i></el-button></div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$confirm('退出系统?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push({path: 'login'})
        this.$message({
          message: '退出登录',

        });

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        });
      });

    },
    open2() {
      this.$alert('<strong>版本号 : V0.0.0.0</br>杭州XXXXX有限公司版权所有</strong>', '提示', {
        dangerouslyUseHTMLString: true
      });
    },
    open3() {
      this.$router.go(0)
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  color: #F5F5F5;
  height: 80px;
  display: flex;

  .log {
    background-color: rgba(72, 118, 231);
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 50px;
      width: 50px;
    }
  }


  .header-left {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    border-right: 1px solid #fff;


    a {
      text-decoration: none;
      color: #fff;

      h1 {
        font-size: 25px;
      }
    }

    .user {
      display: flex;
      align-items: center;
      margin-right: 20px;

      img {
        width: 30px;
        height: 30px;
        margin-right: 20px;

      }
    }
  }

  .header-right {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .el-button{
      color: #F5F5F5;

    }
    i {

      transform: scale(2);
    }

    .f5 {
      cursor: pointer;
      font-size: 14px;
    }

    .quit {

    }


  }
}
</style>
