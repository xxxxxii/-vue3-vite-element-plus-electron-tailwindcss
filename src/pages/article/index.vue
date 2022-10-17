<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-07 18:45:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 21:39:03
 * @FilePath: \vue3vite\src\pages\arc\addOrEdit.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <el-button type="primary" @click="titleSetting()">标题信息设置</el-button>
    <div>
      <editor />
    </div>
  </div>
</template>

<script setup lang="ts">
import Editor from "./components/editor.vue";
import ArcAddOption from "./components/arcAddOption.vue";
import { useDialog } from "@/hooks/useDialog";

const titleSetting = () => {
  useDialog(ArcAddOption, { onConfirm: () => {} });
  // ElMessageBox({
  //   title: "Message",
  //   closeOnClickModal: false,
  //   message: () => h(ArcAddOption),
  // });
};
</script>
