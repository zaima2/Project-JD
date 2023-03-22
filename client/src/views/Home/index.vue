<template>
  <div class="home-container">
    <Navigator />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import Navigator from "../../components/Navigator.vue";
</script>

<style scoped lang="less">
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
