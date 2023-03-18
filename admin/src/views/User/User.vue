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
        <ToolBar :total="state.total" @input="handleInput" />
      </div>
      <div class="table">
        <el-table :data="state.user" style="width: 100%">
          <el-table-column fixed prop="username" label="用户名" width="150" />
          <el-table-column prop="phone" label="手机号" width="120" />
          <el-table-column prop="role" label="角色" v-slot="scope" width="120">
            {{ scope.row.roler.name }}
          </el-table-column>
          <el-table-column prop="status" v-slot="scope" label="用户状态" width="120">
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
          <el-table-column prop="createdAt" v-slot="scope" label="注册时间" width="180">
            {{ formatDate(scope.row.createdAt, "-", true) }}
          </el-table-column>
          <el-table-column prop="updatedAt" v-slot="scope" label="上次更新" width="180">
            {{ formatDate(scope.row.updatedAt, "-", true) }}
          </el-table-column>
          <el-table-column prop="deletedAt" v-slot="scope" label="注销时间" width="180">
            {{ formatDate(scope.row.deletedAt, "-", true) || "--" }}
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template v-slot="scope">
              <div class="but">
                <el-button link type="primary" size="small">
                  <el-button type="primary" :icon="Edit" circle />
                </el-button>
                <el-select class="m-2" placeholder="用户操作" size="large" @change="handleAction($event, scope.row)">
                  <el-option v-for="item in state.userOpeates" :key="item.label" :label="item.label"
                    :value="item.value" />
                </el-select>
              </div>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog v-model="state.comfirmModel" :before-close="closeModal" title="确认操作吗？" width="30%">
          <div class="title">确认对用户 <span class="user">{{ 'zaima' }}</span> 进行 <span class="action">{{ '注销' }} </span>操作吗？
          </div>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="cancel">取消</el-button>
              <el-button type="primary" :loading="state.excutting" @click="comfirm">
                确认
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
      <div class="pager">
        <el-pagination background layout="prev, pager, next" v-model:current-page="state.currentPage" :total="state.total"
          @update:current-page="changePage" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchAllUser, searchUser } from "../../api/user";
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
import delay from "../../utils/delay";
import { createLogger } from "vuex";

const state = reactive({
  loading: false,
  total: 0,
  comfirmModel: false,
  excutting: false,
  // orginalData: null as null | ResponseWithCount,
  currentPage: 1,
  limit: 10,
  user: [] as any,
  userOpeates: [
    {
      label: "冻结", value: {
        name: "冻结",
        value: "suspend"
      }
    },
    {
      label: "注销", value: {
        nmae: "注销",
        value: "determine"
      }
    },
    {
      label: "限制", value: {
        name: "限制",
        value: "limit"
      }
    }
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
  state.loading = true;
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


async function handleInput(val: string) {
  state.loading = true;
  const result = (await delay(searchUser, val)) as ResponseWithCount;
  state.total = result.count;
  state.user = result.rows;
  state.loading = false;
}

function handleAction(target: any, e: any) {
  state.comfirmModel = true;
  console.log(target, e);

}

function cancel() {
  console.log("取消");

}

function comfirm() {
  state.excutting = true;
  console.log("确认");

}


function closeModal(done: Function) {
  state.excutting = false;
  done();
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
    height: @titleHeight;
    background-color: @titleBgColor;
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

.user,
.action {
  color: red;
}
</style>
