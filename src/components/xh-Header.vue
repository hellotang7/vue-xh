<template>
  <div class="header">
    <div class="log">
<!--      <router-link to="/home">-->
      <img alt="" src="@/assets/logo.png">
<!--      </router-link>-->
    </div>
    <div class="header-left">
<!--      <router-link to="/home">-->
        <h1>智能库房资产管理系统</h1>
<!--      </router-link>-->
      <div class="user">
        <img src="@/assets/logo.png" alt="">
        <p>管理员(admin)</p>
      </div>
    </div>

    <div class="header-right">
      <div class="f5"><i class="el-icon-refresh"></i></div>
      <div class="quit"><i class="el-icon-close"></i></div>
      <div class="c"><i class="el-icon-info"></i></div>
    </div>

  </div>
</template>

<script>
export default {}
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

    i {

      transform: scale(2);
    }

    .f5 {
    }

    .quit {
    }

    .c {
    }
  }
}
</style>
