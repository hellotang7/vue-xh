<template>
  <div>

    <el-menu default-active="1-4-1"
             class="el-menu-vertical-demo"
             background-color="rgba(43,48,62)"
             text-color="#A1B9D1"
             active-text-color="#ffd04b"
             :router="true">

      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>

      <el-menu-item index="/churu">
        <i class="el-icon-files"></i>
        <span>出入管理</span>
      </el-menu-item>

      <el-menu-item index="/shenling">
        <i class="el-icon-document"></i>
        <span>申领管理</span>
      </el-menu-item>

      <el-menu-item index="/fenxi">
        <i class="el-icon-s-data"></i>
        <span>分析统计</span>
      </el-menu-item>

      <el-menu-item index="/taizhang">
        <i class="el-icon-document"></i>
        <span>台账管理</span>
      </el-menu-item>

      <el-menu-item index="/pandian">
        <i class="el-icon-s-claim"></i>
        <span>盘点管理</span>
      </el-menu-item>

      <el-menu-item index="/xitong">
        <i class="el-icon-menu"></i>
        <span>系统设置</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 数据对象
    };
  }
}
</script>

<style lang="scss" scoped>

.el-menu {
  border-right-width: 0;
}

.el-menu-item {
  border-bottom: 1px solid #3e4656;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    line-height: 22px;
  }

  i {
    transform: scale(1.6);
    margin-right: 0;

  }

  span {

  }

}
</style>
