<template>
    <div class="search-container">
        <div class="banner">
            <Banner />
        </div>
        <div class="content">
            <div class="recommadation">推荐栏</div>
            <div class="main">
                <div class="item" v-for="item in state.data">
                    <GoodComp :data="item" />
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { watchEffect, reactive } from "vue";
import { useRoute } from "vue-router";
import { searchGoods } from "../../api/goods";
import { ResponseWithCount } from "../../types/response";
import { Goods } from "../../types/Goods";
import Banner from "../Home/components/Banner.vue";
import GoodComp from "../../components/Goods.vue";
const route = useRoute();
const state = reactive({
    total: 0,
    data: [] as Goods[]
});

watchEffect(async () => {
    if (route.query.page && route.query.limit) {
        const resp = await searchGoods(route.query.keyword as string, +route.query.page, +route.query.limit) as unknown as ResponseWithCount<Goods>;
        state.total = resp.count;
        state.data = resp.rows;
        console.log("resp:", resp);
    }
})


</script>


<style scoped lang="less">
.search-container {
    width: 100%;
    flex: 1;
    // background-color: #fff;
    background-color: red;
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;

    .content {
        width: 1400px;
        height: 100%;
        background-color: blue;
        margin-right: 200px;
        margin-top: 20px;
        display: flex;

        .recommadation {
            width: 200px;
            height: 100%;
        }

        .main {
            flex: 1 0 auto;
            background-color: aqua;
            display: flex;
            flex-wrap: wrap;

            .item {
                width: 260px;
                height: 450px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                margin: 10px;
                padding: 10px;
            }
        }
    }
}
</style>