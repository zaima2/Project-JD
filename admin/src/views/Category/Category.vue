<template>
  <div class="category-container">
    <Title title="分类管理" />
    <div class="content">
      <div class="toolBar">
        <div class="total">总分类：{{ state.data.length }}</div>
        <el-button type="primary" @click="state.dialogShow = true"
          >创建一级分类</el-button
        >
      </div>
      <RelationShip
        :data="state.data"
        @updateData="handleUpdate"
        @addCategory="addCategory"
      />
      <el-dialog v-model="state.dialogShow" title="创建一级类型">
        <el-form :model="state.form">
          <el-form-item label="类型名" :label-width="state.form.formLabelWidth">
            <el-input v-model="state.form.name" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="state.dialogShow = false">取消</el-button>
            <el-button
              :loading="state.loading"
              type="primary"
              @click="createCategory"
            >
              添加
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { getCategory, appendCategory } from "../../api/category";
import Title from "../../components/Title.vue";
import RelationShip from "./RelationShip.vue";
const state = reactive({
  data: [],
  dialogShow: false,
  form: {
    name: "",
    formLabelWidth: 120,
  },
  loading: false,
});

const router = useRouter();

(async function () {
  state.data = (await getCategory(1)) as any;
  console.log(state.data);
})();

async function handleUpdate(data: any, resolve: Function) {
  if (data.level + 1 > 4) {
    resolve([]);
    return;
  }
  const resp = (await getCategory(data.level + 1, data.id)) as any;
  resolve(resp);
}

async function addCategory(value: string, data: any, callback: Function) {
  console.log("value:", value, " ", "add:", data);
  const resp = (await appendCategory(data.level + 1, value, data.id)) as any;
  if (!data.children) {
    data.children = [];
  }

  data.children.push(resp);
  callback();
}

async function createCategory() {
  await appendCategory(1, state.form.name);
  router.go(0);
}
</script>

<style scoped lang="less">
.category-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    .toolBar {
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      padding-left: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
