<template>
<div>
  <el-container>
    <el-header height="80px">
      <Header/>
    </el-header>
    <el-container>

      <el-aside width="80px">
        <Aside/>
      </el-aside>

      <el-main>
        <div class="mbx">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="bread in breadCrumb" :key="bread.path" :to="bread.path || '/'">{{bread.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view  :key="key"></router-view>
      </el-main>

    </el-container>
  </el-container>
</div>
</template>

<script>

import Header from "@/components/xh-Header.vue";
import Aside from '@/components/xh-Aside.vue'

export default {
  computed: {
    key(){
      return this.$route.path + Math.random();
    },

    breadCrumb() {
      return this.$route.matched
    },


  },
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.el-aside {
  height:calc(100vh - 80px);
  background-color: rgba(43,48,62);

}

.el-header {
  background-color: rgba(91,140,255);
  padding: 0;


}

.el-main {
  padding: 10px;
  flex: 1;
  display: flex;
  background: rgba(240,243,246);
  flex-direction: column;
  .mbx {
    font-size: 15px;
    height: 20px;
    border-bottom: 2px solid rgba(177, 193, 196);
    padding-bottom: 4px;
  }
}


</style>
