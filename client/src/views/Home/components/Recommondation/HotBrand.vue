<template>
  <div class="hot-brand-container"></div>
</template>

<script setup lang="ts">
import { RecommondationHot } from "../../../../types/recommondation";

interface PropsType {
  data: RecommondationHot;
}

const props = defineProps<PropsType>();
</script>

<style scoped lang="less"></style>
