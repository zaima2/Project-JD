<template>
  <div class="user-container" v-loading="state.loading">
    <div class="user-title">
      <el-icon>
        <User />
      </el-icon>
      <span>用户管理</span>
    </div>
    <div class="content">
      <div class="tools">
        <ToolBar :total="state.total" />
      </div>
      <div class="table">
        <el-table :data="state.user" style="width: 100%">
          <el-table-column fixed prop="username" label="用户名" width="150" />
          <el-table-column prop="phone" label="手机号" width="120" />
          <el-table-column prop="role" label="角色" v-slot="scope" width="120">
            {{ scope.row.role === "user" ? "普通用户" : "商户" }}
          </el-table-column>
          <el-table-column
            prop="status"
            v-slot="scope"
            label="用户状态"
            width="120"
          >
            {{
              scope.row.status === "normal"
                ? "正常"
                : scope.row.status === "limit"
                ? "限制"
                : scope.row.status === "suspend"
                ? "冻结"
                : "冻结"
            }}
          </el-table-column>
          <el-table-column prop="credit" label="信用分" width="120" />
          <el-table-column
            prop="createdAt"
            v-slot="scope"
            label="注册时间"
            width="160"
          >
            {{ formatDate(scope.row.createdAt, "-", true) }}
          </el-table-column>
          <el-table-column
            prop="updatedAt"
            v-slot="scope"
            label="上次更新"
            width="160"
          >
            {{ formatDate(scope.row.updatedAt, "-", true) }}
          </el-table-column>
          <el-table-column
            prop="deletedAt"
            v-slot="scope"
            label="注销时间"
            width="120"
          >
            {{ formatDate(scope.row.deletedAt, "-", true) || "--" }}
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template #default>
              <div class="but">
                <el-button link type="primary" size="small">
                  <el-button type="primary" :icon="Edit" circle />
                </el-button>
                <el-select
                  v-model="state.opeate"
                  class="m-2"
                  placeholder="Select"
                  size="large"
                >
                  <el-option
                    v-for="item in state.userOpeates"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pager">
        <el-pagination
          background
          layout="prev, pager, next"
          v-model:current-page="state.currentPage"
          :total="state.total"
          @update:current-page="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchAllUser } from "../../api/user";
import { reactive, watchEffect } from "vue";
import ToolBar from "./ToolBar.vue";
import { ResponseWithCount } from "../../types/response";
import formatDate from "../../utils/formatDate";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  User,
} from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";

const state = reactive({
  loading: true,
  total: 0,
  currentPage: 1,
  limit: 10,
  user: [] as any,
  userOpeates: [
    { label: "label-1", value: 1 },
    { label: "label-1", value: 2 },
    { label: "label-1", value: 3 },
    { label: "label-1", value: 4 },
  ],
  opeate: null as any,
});

const router = useRouter();
const route = useRoute();

watchEffect(async () => {
  if (route.query.page && route.query.limit) {
    await getUser(+route.query.page, +route.query.limit);
  }
});

async function getUser(page: number, limit: number) {
  const user = (await fetchAllUser(
    page,
    limit
  )) as unknown as ResponseWithCount;
  state.user = user.rows;
  state.total = user.count;
  state.loading = false;
}

(async function () {
  if (route.query.page && route.query.limit) {
    state.currentPage = +route.query.page;
    state.limit = +route.query.limit;
  }
})();

function changePage(currentPage: number) {
  if (route.query.page) {
    if (currentPage === +route.query.page) {
      return;
    }
  }

  router.push({
    query: {
      ...route.query,
      page: currentPage,
    },
  });
}
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

    .tools {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
    }

    .table {
      width: 100%;
    }

    .pager {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }
  }
}

.but {
  display: flex;
}
</style>
