<template>
  <div class="uploads-container">
    <el-upload
      v-model:file-list="state.fileList"
      class="upload"
      :action="`/api/uploads/${props.sigle}`"
      :name="props.sigle"
      @success="successHandle"
      multiple
      :on-preview="handlePreview"
      :show-file-list="false"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :accept="props.accepts?.join(',')"
      :limit="props.limit"
      :on-exceed="handleExceed"
    >
      <el-button type="primary">上传</el-button>
      <template #tip>
        <div class="el-upload__tip">
          封面限制在3个以内，支持类型：{{ props.accepts?.join("、") }}
        </div>
      </template>
    </el-upload>
    <div class="preview" v-if="props.preview">
      <Preview :data="state.uploads" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { UploadProps, UploadUserFile } from "element-plus";
import Preview from "./Preview.vue";

interface PropsType {
  sigle: string;
  limit: number;
  accepts?: string[];
  preview?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  preview: true,
});

const state = reactive({
  fileList: [],
  uploads: [] as string[],
});

const emits = defineEmits(["upload"]);

function successHandle(response: any) {
  state.uploads.push(response.data);
  emits("upload", state.uploads);
}

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

function beforeUpload(file: any) {
  if (!props.accepts?.includes(file.type.split("/")[1])) {
    ElMessage.warning("不支持该类型，请检查后重试");
    return false;
  }
  return true;
}

// const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
//   return ElMessageBox.confirm(
//     `Cancel the transfert of ${uploadFile.name} ?`
//   ).then(
//     () => true,
//     () => false
//   );
// };
</script>
