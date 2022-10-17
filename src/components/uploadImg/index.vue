<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-14 00:09:53
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 00:10:53
 * @FilePath: \vue3vite\src\components\uploadImg\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <el-upload
    class="avatar-uploader"
    action="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
    :auto-upload="false"
    :on-change="fileAdd"
    :show-file-list="false"
    list-type="picture"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <template #tip>
      <div class="el-upload__tip">
        <el-button type="danger" size="small" circle>
          <template #icon>
            <IEpDelete />
          </template>
        </el-button>
      </div>
    </template>
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><IEpPlus /></el-icon>
  </el-upload>
</template>

<script setup lang="ts">
const imageUrl = ref("");

const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const fileAdd = (file, fileList) => {
  fileList = [];
  fileList.push(file);
  imageUrl.value = URL.createObjectURL(file.raw); //图片链接
};

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};
</script>

<style scoped lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 125px;
  height: 125px;
  text-align: center;
}
</style>
