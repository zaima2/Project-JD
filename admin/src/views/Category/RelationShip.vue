<template>
  <el-tree
    :data="props.data"
    :props="NodeProp"
    :load="loadNode"
    lazy
    show-checkbox
    :on-current-change="handleChange"
  />
</template>

<script lang="ts" setup>
import type Node from "element-plus/es/components/tree/src/model/node";
import { reactive, watchEffect } from "vue";
import { getCategory } from "../../api/category";

interface Tree {
  name: string;
  leaf?: boolean;
}

interface PropsType {
  data: Array<any>;
}

const emits = defineEmits(["updateData"]);

const NodeProp = {
  label: "name",
  children: "children",
  isLeaf: "done",
};

const props = defineProps<PropsType>();

const state = reactive({
  data: [],
});

function handleChange(current: any) {
  console.log(current);
}

const loadNode = async (node: Node, resolve: (data: Tree[]) => void) => {
  console.log("node:", node);
  emits("updateData", node.data, resolve);
};
</script>
