<template>
    <div class="selection-container">
        <div class="title">{{ props.data.name }}</div>
        <div class="price">
            <div class="inner-price">
                <div class="price-content">
                    <div class="value-box">
                        <span>京东价：</span><span class="base">￥</span>
                        <span class="value base">{{ props.data.price }}</span>
                    </div>
                    <div class="dePrice-notify pointer hover-base">降价通知</div>
                </div>
                <div class="off">
                    <span class="title">优惠券 </span>
                    <span class="value">满4000减5</span>
                </div>
                <div class="cuxiao">
                    <span class="title">促销</span>
                    <span class="manjian">满减</span>
                    <span class="m">满50元减5元</span>
                </div>
            </div>
            <div class="comment">
                <div class="title">累计评论</div>
                <span>2000</span>
            </div>
        </div>
        <div class="secion">
            <div class="weight t">
                <span class="title">重量(kg)</span>
                <span>{{ props.data.weight }}</span>
            </div>
            <div class="support t">
                <span class="title">服务支持</span>
                <div class="support-item">
                    <div class="item hover-base pointer" v-for="item in props.data.serviceSupport">{{ item }}</div>
                </div>
            </div>
            <div class="store t flex">
                <span class="title">库存</span>
                <div class="hover-base pointer">{{ props.data.store }}</div>
            </div>
            <div class="sold t flex">
                <span class="title">销量</span>

                <div class="hover-base pointer">{{ props.data.sold }}</div>

            </div>
        </div>
        <div class="add-to-cart-action">
            <input v-model="state.count" type="number">
            <div class="addCart pointer">加入购物车</div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { reactive } from 'vue';
import { Goods } from '../../types/Goods';


interface PropTypes {
    data: Goods
}

const props = defineProps<PropTypes>();

const state = reactive({
    count: 1
})

</script>


<style scoped lang="less">
.selection-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 10px;

    &>.title {
        font-size: 14px;
        color: #000;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 40px;
        line-height: 20px;
    }

    .price {
        width: 100%;
        height: 130px;
        background: #f5f3f3;
        margin-top: 10px;
        box-sizing: border-box;
        padding: 15px 10px;
        display: flex;
        justify-content: space-between;

        .inner-price {
            width: 260px;
            height: 100%;

            .price-content {
                display: flex;
                align-items: center;

                .dePrice-notify {
                    margin-left: 30px;
                    color: rgb(22, 15, 119);
                }

                .value-box {
                    .value {
                        font-size: 20px;
                    }
                }
            }

            .off {
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;

                .value {
                    margin-left: 15px;
                    padding: 5px;
                    color: #fff;
                    border-radius: 5px;
                    height: fit-content;
                    width: fit-content;
                    background-color: @baseColor;
                }
            }

            .cuxiao {
                width: 100%;
                height: 30px;

                .manjian {
                    margin: 0px 15px;
                    box-sizing: border-box;
                    border: 1px solid @baseColor;
                    padding: 3px;
                    border-radius: 2px;
                    background: #f7cdcd;
                    color: @baseColor;
                }
            }
        }



        .comment {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;

        }
    }

    .secion {
        width: 100%;
        height: auto;
        margin-top: 20px;

        .t {
            margin-top: 10px;
        }

        .title {
            margin-right: 15px;
        }

        .support {
            display: flex;

            .support-item {
                display: flex;

                .item {
                    margin-right: 10px;
                    color: rgb(22, 15, 119);
                }

            }
        }
    }

    .add-to-cart-action {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        margin-top: 15px;

        input {
            width: 60px;
            height: 35px;
            margin-right: 20px;
            box-sizing: border-box;
            padding-left: 20px;
        }

        .addCart {
            width: 200px;
            height: 35px;
            background-color: @baseColor;
            color: #fff;
            text-align: center;
            line-height: 35px;
            font-size: 20px;
        }
    }
}
</style>