<template>
  <div class="func-menu-container">
    <div
      class="func-menu-item"
      v-for="(item, index) in state.functionMenu"
      :key="item.id"
    >
      <FuncItem :data="item" :hover="state.hover[index]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FuncItem from "./FuncItem.vue";
import { FunctionMenu } from "../../../../types/functionMenu";
import { reactive } from "vue";
const state = reactive({
  functionMenu: [
    { url: "/src/assets/card_default.png", path: "/", text: "礼品卡" },
    {
      url: "/src/assets/institution_default.png",
      path: "/",
      text: "企业购",
    },
    { url: "/src/assets/call_default.png", path: "/", text: "话费" },
    { url: "/src/assets/baitiao_default.png", path: "/", text: "白条" },
    { url: "/src/assets/game_default.png", path: "/", text: "游戏" },
    { url: "/src/assets/plane_default.png", path: "/", text: "机票" },
    { url: "/src/assets/gas_default.png", path: "/", text: "加油" },
    { url: "/src/assets/train_default.png", path: "/", text: "火车票" },
    { url: "/src/assets/wujin_default.png", path: "/", text: "五金城" },
  ] as FunctionMenu[],
  hover: [
    { url: "/src/assets/card_hover.png", path: "/", text: "礼品卡" },
    {
      url: "/src/assets/institution_hover.png",
      path: "/",
      text: "企业购",
    },
    { url: "/src/assets/call_hover.png", path: "/", text: "话费" },
    { url: "/src/assets/baitiao_hover.png", path: "/", text: "白条" },
    { url: "/src/assets/game_hover.png", path: "/", text: "游戏" },
    { url: "/src/assets/plane_hover.png", path: "/", text: "机票" },
    { url: "/src/assets/gas_hover.png", path: "/", text: "加油" },
    { url: "/src/assets/train_hover.png", path: "/", text: "火车票" },
    { url: "/src/assets/wujin_hover.png", path: "/", text: "五金城" },
  ] as FunctionMenu[],
});
</script>

<style scope lang="less">
.func-menu-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .func-menu-item {
    flex: 0 0 33%;
  }
}
</style>
