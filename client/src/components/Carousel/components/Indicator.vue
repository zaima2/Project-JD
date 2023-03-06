<template>
  <div class="indicator-container">
    <div
      class="indicator-item"
      :class="{ active: index === props.active }"
      v-for="(item, index) in props.length"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  length: number;
  active: number;
}

const props = defineProps<PropsType>();
</script>

<style scoped lang="less">
.indicator-container {
  position: absolute;
  top: 90%;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  //   opacity: 0.3;
  .indicator-item {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: rgb(161, 159, 159);
    margin: 2px 5px;
    cursor: pointer;
    &.active {
      background-color: rgb(253, 186, 3);
    }
  }
}
</style>
