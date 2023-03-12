<template>
  <div class="overview-container">
    <div class="person-pannel">
      <PersonPannel />
    </div>
  </div>
</template>

<script setup lang="ts">
import PersonPannel from "./components/OverView/PersonPannel.vue";
</script>

<style scoped lang="less">
.person-pannel {
  width: 100%;
  height: 240px;
  background: #fff;
}
</style>
