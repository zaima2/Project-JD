<template>
    <div class="search-container">
        <div class="input-box">
            <div class="inputInner">
                <input type="text">
                <div class="camera">
                    <Icon :type="StyleType.camera" :size="16" />
                </div>
            </div>

            <div class="search-button">
                <Icon :type="StyleType.search" :size="20" />
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import Icon from "../../../components/Icon.vue";
import { StyleType } from "../../../types/enum";


</script>


<style scope lang="less">
.search-container {
    display: flex;
    height: 30px;
    margin-top: 20px;

    .input-box {
        flex: 1;
        display: flex;
        height: 100%;

        .inputInner {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;

            .camera {
                position: absolute;
                right: 20px;
                cursor: pointer;
                &:hover {
                    color:@baseColor;
                }
            }

            input {
                flex: 1;
                height: 100%;
                box-sizing: border-box;
                padding: 10px;
                border-color: @baseColor;
                outline: none;
                color:#000;
            }
        }

        .search-button {
            width: 60px;
            height: 30px;
            background-color: @baseColor;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            font-weight: bold;
        }
    }
}
</style>