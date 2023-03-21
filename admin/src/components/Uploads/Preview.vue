<template>
  <div class="preview-uploads-container">
    <div class="preview-item" v-for="item in props.data">
      <el-image
        style="width: 100px; height: 100px"
        :src="'http://localhost:3200' + item"
        fit="cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  data: string[];
}
const props = defineProps<PropsType>();
</script>

<style scoped lang="less">
.preview-uploads-container {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  .preview-item {
    margin-right: 10px;
  }
}
</style>
