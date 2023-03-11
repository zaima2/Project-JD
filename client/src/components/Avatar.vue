<template>
  <div class="avatar-container">
    <img :src="props.src" alt="" />
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  src: string;
  size?: number;
}
const props = defineProps<PropsType>();

console.log(props.size);
</script>

<style scoped lang="less">
.avatar-container {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
