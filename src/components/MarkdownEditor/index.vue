<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-20 17:58:29
 * @FilePath: \vue3vite\src\pages\test\components\editor.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved. 
-->
<template>
  <div class="">
    <div>
      <div class="text-left">
        <el-icon
          class="el-icon--right cursor-pointer"
          @click="atalogShow = !atalogShow"
        >
          <IEpFinished />
        </el-icon>
      </div>
    </div>
    <div class="flex h-full">
      <md-atalog
        v-show="atalogShow"
        class="atalog border-solid h-full"
        :editor-id="state.id"
        :scroll-element="scrollElement"
        :theme="state.theme"
      />
      <md-editor
        class="h-full"
        :showCodeRowNumber="true"
        :toolbars="toolbarsConfig"
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
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { saveAs } from "file-saver";
const MdAtalog = MdEditor.MdCatalog;
import useDarks from "@/hooks/useDarks";
const { isDark, toggleDark } = useDarks();

import DialogHtml from "./dialogHtml.vue";

const saveMode = ref(null);

const atalogShow = ref(false);

const state = reactive({
  theme: "dark",
  text: `# 标题 
          ## 3333`,
  id: "my-editor",
});

const scrollElement = document.documentElement;

const themeMode = computed(() => {
  return isDark.value ? "dark" : "light";
});

let text = ref("# 123153425");

const toolbarsConfig = [
  "bold",
  "underline",
  "italic",
  "-",
  "title",
  "strikeThrough",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "-",
  "codeRow",
  "code",
  "link",
  "image",
  "table",
  "mermaid",
  "katex",
  "-",
  "revoke",
  "next",
  "save",
  "=",
  "pageFullscreen",
  "fullscreen",
  "preview",
  "htmlPreview",
  "catalog",
];

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
</style>
