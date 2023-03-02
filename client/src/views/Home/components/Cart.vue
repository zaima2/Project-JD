<template>
    <div class="cart-inner-container">
        <div class="icon">
            <Icon :type="StyleType.cartFiled" :size="40"/>
        </div>
        <div class="title">我的购物车</div>
    </div>

</template>


<script lang="ts" setup>
import Icon from "../../../components/Icon.vue";
import {StyleType} from "../../../types/enum";
</script>


<style scope lang="less">
.cart-inner-container {
    display:flex;
    .icon {
        color:@baseColor
    }
    .title {
        margin-left:5px;
    }
}

</style>