<template>
  <div class="category-container">
    <Title title="分类管理" />
    <div class="content">
      <div class="toolBar">
        <div class="total">总分类：{{ 0 }}</div>
      </div>
      <RelationShip :data="state.data" @updateData="handleUpdate" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { getCategory } from "../../api/category";
import Title from "../../components/Title.vue";
import RelationShip from "./RelationShip.vue";
const state = reactive({
  data: [],
});

(async function () {
  state.data = (await getCategory(1)) as any;
  console.log(state.data);
})();

async function handleUpdate(data: any, resolve: Function) {
  if (data.level + 1 > 4) {
    resolve([]);
    return;
  }
  const resp = (await getCategory(data.level + 1, data.id)) as any;
  resolve(resp);
}
</script>

<style scoped lang="less">
.category-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    .toolBar {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      padding-left: 20px;
      line-height: 30px;
    }
  }
}
</style>
