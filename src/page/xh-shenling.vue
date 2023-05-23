<template>
  <div class="ym">
      <div class="function-box">
          <div class="function-box-title">申领相关</div>
          <hr>

          <router-link to="/churu">
              <div class="function-item">
                  <div class="function-item-inner">
                      <img src="../assets/danju.png">
                      <div class="function-item-text" title="历史申领">历史申领</div>
                  </div>

              </div>
          </router-link>

          <router-link to="/churu">
              <div class="function-item">
                  <div class="function-item-inner">
                      <img src="../assets/danju.png">
                      <div class="function-item-text" title="新增申领">新增申领</div>
                  </div>

              </div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "xh-shenling"
}
</script>

<style scoped>

</style>
