<template>
    <div class="navigator-container">
        <div class="navigator-bar">
            <div class="left  hover-base">
                <div class="icon">
                    <Icon :type="StyleType.local" />
                </div>
                <div class="locate">广东</div>
            </div>
            <div class="right">
                <div class="navigator-item">
                    <router-link :to="{ path: '/' }">
                        <span class="hover-base">
                            你好，请登录
                        </span>
                    </router-link>
                </div>

                <div class="navigator-item hover-base">
                    <router-link class="sideLine" :to="{ path: '/' }">
                        <span class="base">
                            免费注册
                        </span>

                    </router-link>
                </div>


                <div class="navigator-item hover-base">
                    <router-link :to="{ path: '/' }">
                        <span class="hover-base">
                            我的订单
                        </span>
                    </router-link>
                </div>

                <div class="navigator-item hover-base">
                    <router-link :to="{ path: '/' }">
                        <span class="hover-base">
                            我的京东
                        </span>
                    </router-link>
                </div>

                <div class="navigator-item hover-base">
                    <router-link :to="{ path: '/' }">
                        <span class="base">
                            企业采购
                        </span>
                    </router-link>
                </div>
                <div class="navigator-item hover-base">
                    <router-link :to="{ path: '/' }">
                        <span class="hover-base">
                            商家服务
                        </span>
                    </router-link>
                </div>
                <div class="navigator-item hover-base">
                    <router-link :to="{ path: '/' }">
                        <span class="hover-base">
                            网站导航
                        </span>
                    </router-link>
                </div>
                <div class="navigator-item hover-base">
                    <router-link :to="{ path: '/' }">
                        <span class="hover-base">
                            手机京东
                        </span>
                    </router-link>
                </div>
                <div class="navigator-item hover-base">
                    <router-link :to="{ path: '/' }">
                        <span class="hover-base">
                            网站无障碍
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import Icon from "./Icon.vue";
import { StyleType } from "../types/enum"
</script>


<style scoped lang="less">
.navigator-container {
    width: 100%;
    height: 30px;
    background-color: #eceaea;
    display: flex;
    justify-content: center;
    color: #999;

    .navigator-bar {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .left {
            width: 50px;
            height: 100%;
            // background-color: #fc4;
            display: flex;
            align-items: center;
            cursor: pointer;

            .icon {
                margin-right: 10px;
                color: inherit
            }

            .locate {
                color: inherit
            }
        }

        .right {
            width: 60%;
            height: 100%;
            // background-color: #ff0;
            display: flex;
            align-items: center;

            .navigator-item {
                flex: 1;
                flex-shrink: 0;
                box-sizing: border-box;
                text-align: center;

                // &::after {
                //     content: "";
                //     display: inline-block;
                //     width: 1px;
                //     height: 16px;
                //     background-color: #999;
                // }

                .sideLine {
                    padding: 0 3px;
                }
            }
        }
    }
}
</style>