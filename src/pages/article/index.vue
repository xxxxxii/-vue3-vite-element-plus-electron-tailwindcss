<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-07 18:45:51
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-20 17:48:46
 * @FilePath: \vue3vite\src\pages\arc\addOrEdit.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <el-button type="primary" @click="titleSetShow = true"
      >标题信息设置</el-button
    >
    <div>
      <!-- <Editor /> -->
      <MarkdownEditor></MarkdownEditor>
    </div>
    <ArcAddOption :isShow="titleSetShow" @getForm="getForm" />
  </div>
</template>

<script setup lang="ts">
import ArcAddOption from "./components/arcAddOption.vue";
import MarkdownEditor from "@/components/MarkdownEditor/index.vue";

const titleSetShow = ref(false);
const getForm = (val: any) => {
  console.log(val);
};
</script>
