<template>
  <div class="title-container">
    <el-icon>
      <slot name="default"></slot>
    </el-icon>

    <span class="title">{{ props.title }}</span>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  title: string;
}
const props = defineProps<PropsType>();
</script>

<style scoped lang="less">
.title-container {
  width: 100%;
  height: @titleHeight;
  background-color: @titleBgColor;
  box-sizing: border-box;
  padding-left: 30px;
  color: #fff;
  line-height: 50px;
  .title {
    margin-left: 10px;
  }
}
</style>
