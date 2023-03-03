<template>
  <div class="cart-inner-container">
    <div class="icon">
      <Icon :type="StyleType.cartFiled" :size="30" />
      <div class="badge">
        <span>0</span>
      </div>
    </div>
    <div class="title">我的购物车</div>
  </div>
</template>

<script lang="ts" setup>
import Icon from "../../../components/Icon.vue";
import { StyleType } from "../../../types/enum";
</script>

<style scope lang="less">
.cart-inner-container {
  display: flex;
  .icon {
    color: @baseColor;
    position: relative;
    .badge {
      width: 20px;
      height: 10px;
      background: red;
      text-align: center;
      line-height: 10px;
      position: absolute;
      border-radius: 10px;
      top: -5px;
      left: 10px;
      span {
        color: aliceblue;
      }
    }
  }
  .title {
    margin-left: 15px;
  }
}
</style>
