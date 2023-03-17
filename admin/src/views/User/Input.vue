<template>
    <div class="input-container">
        <el-input v-model="state.keyword" class="w-50 m-2" placeholder="请输入用户名或手机号以搜索用户" :prefix-icon="Search" />
    </div>
</template>


<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { reactive } from 'vue';
const state = reactive({
    keyword: ""
})
</script>


<style scoped lang="less">
.input-container {
    width: 100%;
    height: 100%;
}
</style>