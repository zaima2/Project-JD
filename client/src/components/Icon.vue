<template>
  <span :class="`iconfont icon-${fonts[props.type]}`"></span>
</template>

<script setup lang="ts">
import { StyleType } from "../types/enum";

interface PropsType {
  type: StyleType;
}

const props = defineProps<PropsType>();

const fonts = {
  camera: "zhaoxiangji",
  local: "weizhi",
  cartFiled: "gouwuche",
  chat: "chat",
  search: "fangdajing",
  arrowUp: "xiangshangjiantou",
  arrowDown: "icon-xiangshangjiantou",
  view: "view",
  arrowRight: "zuojiantou",
  cartEmpty: "gouwuche1",
  edit: "edit",
  arrowRightSmall: "youjiantou",
  arrowLeftSmall: "zuojiantou1",
  arrowRightBold: "youjiantou1",
} as any;
</script>

<style scoped lang="less">
@import "//at.alicdn.com/t/c/font_3925574_1xd9etwm0fs.css";
</style>
