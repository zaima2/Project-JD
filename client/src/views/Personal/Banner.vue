<template>
  <div class="personal-banner-container">
    <div class="logo">
      <div class="img">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="title">我的京东</div>
    </div>
    <div class="navigator">
      <div class="home">首页 <Icon :type="StyleType.arrowRightSmall" /></div>
      <div class="account-title">
        账户设置 <Icon :type="StyleType.arrowRightSmall" />
      </div>
    </div>
    <div class="searcher-and-cart">
      <Search />
      <Cart />
    </div>
  </div>
</template>

<script setup lang="ts">
import { StyleType } from "../../types/enum";
import Icon from "../../components/Icon.vue";
import Search from "./Searcher.vue";
import Cart from "./Cart.vue";
</script>

<style scoped lang="less">
.personal-banner-container {
  width: 1200px;
  height: 100%;
  //   background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 300px;
    height: 100%;
    // background-color: brown;
    display: flex;
    align-items: center;
    .img {
      width: 180px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      font-size: 20px;
      box-sizing: border-box;
      padding: 10px;
    }
  }
  .navigator {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-start;
    margin-left: 100px;
    font-size: 18px;
    .home {
      font-size: inherit;
      margin-right: 30px;
    }
    .account-title {
      font-size: inherit;
    }
  }

  .searcher-and-cart {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
