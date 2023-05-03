<template>
  <div class="home">
    <div class="mbx">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="bread in breadCrumb" :key="bread.path">{{bread.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    breadCrumb() {
      return this.$route.matched
    },
  },}
</script>

<style lang="scss" scoped>
.home {
  margin: 10px 10px;
  flex: 1;
  background: rgba(240, 243, 246);

  .mbx {
    font-size: 15px;
    height: 20px;
    border-bottom: 2px solid rgba(177, 193, 196);
    padding-bottom: 4px;
    color: #999;
  }
}
</style>
