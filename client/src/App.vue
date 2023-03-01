<template>
  <div class="home-container">
    <Navigator />
    <Home />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Navigator from "./components/Navigator.vue";
import Home from "./views/Home/index.vue";
</script>

<style scope lang="less"></style>
