<template>
  <div class="director-container">
    <div class="left">&lt;</div>
    <div class="right">&gt;</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.director-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  width: 100%;
  justify-content: space-between;
  .left,
  .right {
    width: 40px;
    height: 60px;
    background-color: black;
    opacity: 0.4;
    font-size: 30px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
  }
}
</style>
