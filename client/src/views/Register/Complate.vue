<template>
  <div class="complate-container">
    <div class="complate-icon">
      <Icon :type="StyleType.chat" :size="70" />
    </div>
    <div class="complate-title">注册完成</div>
    <div class="complate-description">
      将在<span>{{ 10 }}</span
      >秒后自动跳转到登录前的页面
    </div>
    <div class="routerTo">立即跳转</div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../../components/Icon.vue";
import { StyleType } from "../../types/enum";
</script>

<style scoped lang="less">
.complate-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //   background: red;
  flex-direction: column;
  .complate-title {
    margin-top: 20px;
    font-size: 22px;
    font-weight: bolder;
    color: @baseColor;
  }
  .complate-description {
    margin-top: 20px;
    span {
      color: #000;
    }
  }
  .routerTo {
    margin-top: 20px;
    color: @baseColor;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
