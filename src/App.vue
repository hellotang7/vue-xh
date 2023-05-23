<template>
  <div id="app">


    <router-view></router-view>

  </div>
</template>

<script>


export default {}
</script>

<style lang="scss">

a{
  text-decoration: none;
  color:#000;
}
.ym{margin-top: 36px}
.function-box {



  border-radius: 8px;
  box-shadow: 1px 1px 14px 5px #D7DADE;
  margin: 10px;
  background-color: white;
  height: 475px;
  width: 400px;
  float: left;

  .function-box-title {
    height: 60px;
    width: 100%;
    line-height: 60px;
    font-size: 18px;
    margin-left: 27px;
    padding-left: 5px;
    font-weight: 600;
    color: #676a6c;
  }

  hr {
    height: 5px;
    width: 346px;
    margin: 0 auto 36px auto;
    background-color: #5B8CFF;
    border-radius: 15px;
    border: none;
  }

  .function-item {
    border-radius: 15px;
    box-shadow: 0 0 10px #D7DADE;
    margin-left: 27px;
    margin-bottom: 27px;
    width: 160px;
    height: 160px;
    background-color: white;
    float: left;
    &:hover{
      background-color: rgb(242, 245, 252);
    }
    }
    .function-item-inner {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 70px;
        height: 70px;
      }

      .function-item-text {
        margin-top: 15px;
        font-size: 18px;
      }
    }

  }


</style>
