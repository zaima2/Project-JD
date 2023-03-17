<template>
    <div class="tools-bar-container">
        <div class="tools">
            <div class="total">
                总数据： {{ props.total }} 条
            </div>
        </div>
        <div class="search-box">
            <Input />
        </div>
    </div>
</template>


<script lang="ts" setup>
import Input from './Input.vue';

interface PropsType {
    total: number
}


const props = defineProps<PropsType>()
</script>


<style scoped lang="less">
.tools-bar-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;

    .tools {
        flex: 1 0 auto;
        height: 100%;
    }

    .search-box {
        width: 300px;
        justify-self: flex-end;
        height: 100%;
    }
}
</style>