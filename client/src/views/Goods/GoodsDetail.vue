<template>
    <div class="goods-detail-container">
        <Menu />
        <RouterView />
    </div>
</template>


<script lang="ts" setup>
import Menu from "./Menu.vue";

</script>


<style scoped lang="less">
.goods-detail-container {
    width: 100%;
    padding: 10px 20px;
}
</style>