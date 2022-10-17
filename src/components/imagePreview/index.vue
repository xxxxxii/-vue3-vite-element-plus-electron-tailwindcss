<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-12 19:41:10
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-12 20:41:32
 * @FilePath: \vue3vite\src\components\imagePreview\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <teleport to="body">
    <div>
      <el-dialog
        :lock-scroll="false"
        v-model="imagePriview"
        title="预览图片"
        class="dialog"
      >
        <el-image
          class=""
          style="width: 100%"
          :src="url"
          @click="imagePriview = true"
          fit="cover"
        />
      </el-dialog>
    </div>
  </teleport>
  <el-image
    class="rounded-2xl"
    style="width: 100%; height: 80px"
    :src="url"
    @click="imagePriview = true"
    fit="cover"
  />
</template>

<script setup lang="ts">
const { url } = defineProps({
  url: String,
});
const imagePriview = ref(false);
</script>

<style lang="scss" scoped>
:deep(.dialog) {
  @apply w-11/12 md:max-w-[720px];
}
</style>
