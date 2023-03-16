<template>
    <div class="user-container" v-loading="state.loading">
        <div class="user-title">用户管理</div>
        <div class="content">
            <div class="tools">工具占位拦</div>
            <div class="table">
                <el-table :data="state.user" style="width: 100%">
                    <el-table-column fixed prop="username" label="用户名" width="150" />
                    <el-table-column prop="phone" label="手机号" width="120" />
                    <el-table-column prop="role" label="角色" width="120" />
                    <el-table-column prop="createdAt" label="注册时间" width="160" />
                    <el-table-column prop="updatedAt" label="上次更新" width="160" />
                    <el-table-column prop="deletedAt" label="注销时间" width="120" />
                    <el-table-column fixed="right" label="Operations" width="120">
                        <template #default>
                            <el-button link type="primary" size="small">
                                <el-button type="primary" :icon="Edit" circle />
                            </el-button>
                            <el-button link type="danger" size="small">
                                <el-button type="danger" :icon="Delete" circle />
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pager">
                <el-pagination background layout="prev, pager, next" :total="state.total" />
            </div>
        </div>

    </div>
</template>


<script lang="ts" setup>
import { fetchAllUser } from "../../api/user";
import { reactive } from "vue";
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'

const state = reactive({
    loading: true,
    total: 0,
    user: []
});

(async function () {
    const user = await fetchAllUser(1, 10);
    state.user = user.rows;
    state.total = user.count;
    state.loading = false;
    console.log(user);


})();



</script>


<style scoped lang="less">
.user-container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 20px;

    .user-title {
        width: 100%;
        height: 50px;
        background-color: #174d63;
        box-sizing: border-box;
        padding-left: 30px;
        color: #fff;
        line-height: 50px;
    }

    .content {
        width: 100%;
        // height: calc(100% - 50px);
        overflow-y: scroll;
        margin-bottom: 10px;

        .pager {
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>