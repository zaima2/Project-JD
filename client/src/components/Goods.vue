<template>
  <div class="goods-container">
    <div class="thumb" v-if="props.data.thumbs.length >= 1">
      <img :src="props.data.thumbs[0]" alt="" />
    </div>
    <div class="goods-info">
      <div class="price">￥{{ props.data.price }}</div>
      <div class="goods-name hover-base">
        {{ props.data.name }}
      </div>
      <div class="comment">
        <span>{{ 35320 }} </span>条评价
      </div>
      <div class="store-name">
        <div class="name">
          IU发撒来看房价开始阶段了空间啊立刻就付了款解放军佛挖树机发
        </div>
        <div class="icon">
          <Icon :type="StyleType.chat" />
        </div>
      </div>
      <div class="tags">
        <span class="tag-item" v-for="item in props.data.tags">{{ item }}</span>
      </div>
      <div class="footer">
        <div class="like">
          <Icon :type="StyleType.chat" />
          <span>关注</span>
        </div>
        <div class="cart hover-base">
          <Icon :type="StyleType.cartFiled" :size="30" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Goods } from "../types/Goods";
import Icon from "./Icon.vue";
import { StyleType } from "../types/enum";
interface PropTypes {
  data: Goods;
}

const props = defineProps<PropTypes>();
</script>

<style scoped lang="less">
.goods-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .thumb {
    width: 100%;
    height: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .goods-info {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;

    .price {
      width: 100%;
      height: 50px;
      font-size: 30px;
      color: @baseColor;
      font-weight: bold;
    }

    .goods-name {
      width: 100%;
      height: 35px;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: calc(35px / 2);
    }

    .comment {
      width: 100%;
      height: 30px;
      line-height: 30px;
    }

    .store-name {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;

      .name {
        line-height: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1 1 auto;
      }

      .icon {
        width: 60px;
      }
    }

    .tags {
      width: 100%;
      height: 30px;
      display: flex;

      .tag-item {
        margin: 0 5px;
        box-sizing: border-box;
        padding: 3px 5px;
        border-radius: 5px;
        color: #fff;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: @baseColor;
      }
    }

    .footer {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
