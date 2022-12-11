<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-09 17:46:20
 * @FilePath: \vue3vite\src\pages\test\components\editor.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved. 
-->
<template>
  <div class="h-full">
    <div class="flex h-full">
      <md-editor
        class="md-editor"
        :showCodeRowNumber="true"
        previewTheme="default"
        codeTheme="github"
        v-model="state.text"
        :editor-id="state.id"
        :theme="themeMode"
        @onSave="save"
        @onGetCatalog="onGetCatalog"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MdEditor, { HeadList } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
// import { saveAs } from "file-saver";
import useDarks from "@/hooks/useDarks";
const { isDark, toggleDark } = useDarks();

const state = reactive({
  theme: "dark",
  text: `# 标题\n## 这是markdown 编辑器`,
  id: "my-editor",
});

const themeMode = computed(() => {
  return isDark.value ? "dark" : "light";
});

const save = (v: string) => {};

const onGetCatalog = (list: HeadList[]) => {
  console.log(list);
};
</script>

<style scoped>
.arc-box {
  border: 1px solid #969696;
}
.atalog {
}
.md {
  width: 100%;
  height: 100%;
}
:deep(.md-catalog-link) {
  padding: 5px 1em !important;
}
:deep(.default-theme pre code) {
  background-color: v-bind(
    themeMode === "dark" ? "rgba(0,1,1,1)": "rgba(1,1,1,0)"
  ) !important;
}
.md-editor {
  height: calc(100% - 40px);
}
</style>
