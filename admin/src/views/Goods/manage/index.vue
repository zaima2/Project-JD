<template>
  <div class="goods-manage-container">
    <Title title="商品管理" />
    <div class="toolsBar">
      <div class="total">商品总量: {{ state.total }}</div>
    </div>
    <div class="content">
      <Table :data="state.data" :total="state.total" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "../../../components/Title.vue";
import { getGoods } from "../../../api/goods";
import { useRoute } from "vue-router";
import { reactive, watchEffect } from "vue";
import { ResponseWithCount } from "../../../types/response";
import { Goods } from "../../../types/Goods";
import Table from "./Table.vue";
const route = useRoute();
const state = reactive({
  data: [] as Goods[],
  total: 0,
});

watchEffect(async () => {
  if (route.query.page && route.query.limit) {
    const resp = (await getGoods(
      +route.query.page,
      +route.query.limit
    )) as unknown as ResponseWithCount;
    state.total = resp.count;
    state.data = resp.rows as Goods[];
  }
});

(async function () {})();
</script>

<style scoped lang="less">
.goods-manage-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .toolsBar {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    box-sizing: border-box;
  }
  .content {
    width: 100%;
    flex: 1 0 auto;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    // padding: 20px;
    .goods-item {
      margin: 10px;
    }
  }
}
</style>
