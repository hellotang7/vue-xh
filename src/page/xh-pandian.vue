<template>
  <div class="ym">

      <div class="function-box">
          <div class="function-box-title">盘点相关</div>
          <hr>
          <router-link to="/churu">
              <div class="function-item">
                  <div class="function-item-inner">
                      <img src="../assets/danju.png">
                      <div class="function-item-text" title="盘点单据">盘点单据</div>
                  </div>

              </div>
          </router-link>

          <router-link to="/churu">
              <div class="function-item">
                  <div class="function-item-inner">
                      <img src="../assets/danju.png">
                      <div class="function-item-text" title="新增盘点">新增盘点</div>
                  </div>

              </div>
          </router-link>
      </div>

  </div>
</template>

<script>
export default {
  name: "xh-pandian"
}
</script>

<style scoped>

</style>
