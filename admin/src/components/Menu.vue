<template>
    <div class="menu-container">
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
            text-color="#fff" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <Histogram />
                    </el-icon>
                    <span>统计</span>
                </template>
                <el-menu-item-group title="总览">
                    <el-menu-item index="1-1">总概</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="子类">
                    <el-menu-item index="1-2">用户</el-menu-item>
                    <el-menu-item index="1-3">商品</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <User />
                    </el-icon>
                    <span>用户</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item @click="toUser" index="2-1">
                        用户管理
                    </el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <ShoppingCartFull />
                    </el-icon>
                    <span>商品</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="3-1">item one</el-menu-item>
                    <el-menu-item index="3-2">item two</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="4">
                <template #title>
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>设置</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="3-1">item one</el-menu-item>
                    <el-menu-item index="3-2">item two</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>

    </div>
</template>


<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    User,
    Histogram,
    ShoppingCartFull
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

function toUser() {
    router.push({
        name: "User",
        query: {
            limit: 10,
            page: 1
        }
    })
}

</script>


<style scoped lang="less">
.menu-container {
    width: 200px;
    height: 100%;
    overflow-y: scroll;
    background-color: #131b29
}
</style>