<template>
    <div class="role-container">
        <div class="title">角色管理</div>
        <div class="content">
            <div class="toolsBar">
                <ToolBar :total="state.total" @addRoler="addRoler" />
            </div>
            <div class="table" v-loading="state.pageLoading">
                <el-table :data="state.data" style="width: 70%">
                    <el-table-column prop="id" label="角色唯一标识" width="350" />
                    <el-table-column prop="name" label="角色名" width="120" />
                    <el-table-column prop="total" label="当前角色总人数" width="150" />
                    <el-table-column fixed="right" label="操作" width="120">
                        <template #default>
                            <el-button type="primary" :icon="Edit" circle />
                            <el-button type="danger" :icon="Delete" circle />
                        </template>
                    </el-table-column>
                </el-table>
                <Diolog :show="state.show" :title="state.title" :loading="state.loading" @submitRoler="sumbitRoler"
                    @close="state.show = false" />
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import ToolBar from './ToolBar.vue';
import {
    Delete,
    Edit
} from '@element-plus/icons-vue';
import { reactive } from 'vue';
import { getRolers, createRoler } from "../../api/roler";
import { ResponseWithCount } from "../../types/response";
import Diolog from './Diolog.vue';

const state = reactive({
    data: [] as any,
    total: 0,
    show: false,
    loading: false,
    title: "",
    pageLoading: false
});

(async function () {
    state.pageLoading = true;
    const data = await getRolers() as ResponseWithCount;
    state.pageLoading = false;
    state.total = data.count;
    state.data = data.rows;
})();


function addRoler() {
    state.show = true;
    state.title = "添加角色"
}

async function sumbitRoler(name: string) {
    state.loading = true;
    const resp = await createRoler(name);
    state.loading = false;
    state.show = false;
    state.data.unshift(resp);
    state.total++;

}
</script>


<style scoped lang="less">
.role-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .title {
        width: 100%;
        height: @titleHeight;
        background-color: @titleBgColor;
        color: aliceblue;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 20px;
    }

    .content {
        flex: 1 0 auto;
        width: 100%;

        .toolsBar {
            width: 100%;
            height: 50px;
        }
    }
}
</style>