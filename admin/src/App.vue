<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <Menu />
      </template>
      <template v-slot>
        <RouterView />
      </template>
      <!-- <template v-slot:right>右</template> -->
    </Layout>
  </div>
</template>


<script lang="ts" setup>
import Layout from './components/Layout.vue';
import Menu from "./components/Menu.vue"

</script>


<style scoped lang="less">
.app-container {
  width: 100%;
  height: 100%;

  &::-webkit-scroll {
    display: none;
    width: 0
  }

  & ::-webkit-scrollbar-track {
    background-color: #f5f5f5;

    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);

    border-radius: 5px;

  }
}
</style>