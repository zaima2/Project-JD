<template>
    <div class="diolog-container">
        <el-dialog v-model="props.show" :before-close="close" :title="props.title">
            <el-form :model="state.form">
                <el-form-item label="角色名称" label-width="100">
                    <el-input v-model="state.form.name" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="cancelModel">取消</el-button>
                    <el-button type="primary" :loading="props.loading" @click="confirmModal">
                        确认
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>


<script lang="ts" setup>
import { reactive } from 'vue';

interface PropsType {
    show: boolean,
    loading: boolean,
    title: string
}

const emits = defineEmits(["submitRoler", "close"])

const props = defineProps<PropsType>();

const state = reactive({
    form: {
        name: ""
    }
})

function confirmModal() {
    if (!state.form.name) {
        return;
    }

    emits("submitRoler", state.form.name);

}

function cancelModel() {
    close();
}

function close() {
    emits("close")
}

</script>


<style scoped lang="less"></style>