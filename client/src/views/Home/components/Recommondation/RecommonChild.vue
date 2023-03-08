<template>
  <div class="recommonChild-container">{{ props.data.title }}</div>
</template>

<script setup lang="ts">
import { RecommondationChild } from "../../../../types/recommondation";

interface PropsType {
  data: RecommondationChild;
}

const props = defineProps<PropsType>();
</script>

<style scoped lang="less"></style>
