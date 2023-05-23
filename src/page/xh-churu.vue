<template>
        <div class="ym">

            <keep-alive>
                <router-view></router-view>
            </keep-alive>


            <div class="function-box">
                <div class="function-box-title">出入相关</div>
                <hr>

                <router-link to="/churu/danju" >
                    <div class="function-item" >
                        <div class="function-item-inner" >
                            <img src="../assets/danju.png">
                            <div class="function-item-text" title="出入单据">出入单据</div>
                        </div>

                    </div>
                </router-link>

                <router-link to="/churu/mingxi">
                    <div class="function-item">
                        <div class="function-item-inner">
                            <img src="../assets/danju.png">
                            <div class="function-item-text" title="出入明细">出入明细</div>
                        </div>

                    </div>
                </router-link>
            </div>

            <div class="function-box">
                <div class="function-box-title">出入相关</div>
                <hr>

                <router-link to="/churu/daoru">
                    <div class="function-item">
                        <div class="function-item-inner">
                            <img src="../assets/danju.png">
                            <div class="function-item-text" title="作业单据导入">作业单据导入</div>
                        </div>

                    </div>
                </router-link>

            </div>

        </div>

</template>

<script>
    export default {

        // created() {
        //     console.log(this.$route.path);
        //
        // },


    }
</script>

<style lang="scss" scoped>

</style>
