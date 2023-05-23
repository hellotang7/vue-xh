<template>
    <div class="mbx">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item v-for="bread in breadCrumb" :key="bread.path" :to="bread.path || '/'">
                {{ bread.meta.title }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        computed: {
            key() {
                return this.$route.path + Math.random();
            },

            breadCrumb() {
                return this.$route.matched
            },


        },
    }
</script>

<style scoped>
    .mbx {

        border-bottom: 2px solid rgba(177, 193, 196);
        position:fixed;
        width: 100%;
        background-color: #f0f3f6;
        padding: 10px ;
    }
</style>
