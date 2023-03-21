<template>
  <div class="table-container">
    <el-table :data="props.data" style="width: 100%">
      <el-table-column fixed prop="brand" label="品牌" width="100" />
      <el-table-column prop="name" label="名称" width="150" />
      <el-table-column prop="price" label="价格" width="120" />
      <el-table-column prop="no" label="产品编号" width="120" />
      <el-table-column prop="region" label="来源" v-slot="scope" width="120">
        {{ scope.row.region === "internal" ? "国产" : "进口" }}
      </el-table-column>

      <el-table-column prop="ingradient" label="材料" width="120" />
      <el-table-column prop="sold" label="已售" width="120" />
      <el-table-column prop="store" label="库存" width="120" />
      <el-table-column prop="weight" label="重量(kg)" width="120" />
      <el-table-column
        prop="approperate"
        v-slot="scope"
        label="适用人群"
        width="120"
      >
        {{
          scope.row.approperate === "normal"
            ? "通用"
            : scope.row.approperate === "baby"
            ? "婴儿"
            : scope.row.approperate === "child"
            ? "儿童"
            : "成人"
        }}
      </el-table-column>

      <el-table-column
        prop="back7day"
        v-slot="scope"
        label="7天无理由退货"
        width="120"
      >
        {{ scope.row.back7day ? "是" : "否" }}
      </el-table-column>

      <el-table-column
        prop="baitiaoPay"
        v-slot="scope"
        label="支持白条支付"
        width="120"
      >
        {{ scope.row.baitiaoPay ? "是" : "否" }}
      </el-table-column>

      <el-table-column prop="deliver" v-slot="scope" label="免运费" width="120">
        {{ scope.row.deliver ? "是" : "否" }}
      </el-table-column>

      <el-table-column
        prop="specification"
        v-slot="scope"
        label="规格"
        width="120"
      >
        {{
          scope.row.specification === "ge"
            ? "个"
            : scope.row.specification === "ping"
            ? "瓶"
            : scope.row.specification === "zhang"
            ? "张"
            : "片"
        }}
      </el-table-column>

      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="danger" :icon="Delete" circle />
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="props.total"
        :current="+(route.query.page as any)"
        :page-size="+(route.query.limit as any)"
        hide-on-single-page
        @current-change="changePage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { Goods } from "../../../types/Goods";
import { Delete, Edit } from "@element-plus/icons-vue";

const route = useRoute();
const router = useRouter();

interface PropsType {
  data: Goods[];
  total: number;
}

const props = defineProps<PropsType>();

function changePage(newPage: number) {
  router.push({
    query: {
      ...route.query,
      page: newPage,
    },
  });
}

function handleClick() {}
</script>

<style scoped lang="less">
.table-container {
  width: 100%;
  .page {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-right: 40px;
  }
}
</style>
