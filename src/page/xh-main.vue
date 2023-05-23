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
                    <Mbx/>
                    <router-view :key="key"></router-view>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>

    import Header from "@/components/xh-Header.vue";
    import Aside from '@/components/xh-Aside.vue'
    import Mbx from "@/components/xh-mbx.vue";

    export default {

        components: {
            Header,
            Aside,
            Mbx
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
    height: calc(100vh - 80px);
    background-color: rgba(43, 48, 62);

  }

  .el-header {
    background-color: rgba(91, 140, 255);
    padding: 0;


  }

  .el-main {
    padding: 0;
    flex: 1;
    display: flex;
    background: rgba(240, 243, 246);
    flex-direction: column;
    height: calc(100vh - 80px);


  }


</style>
