<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-07 18:45:51
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-09 17:34:11
 * @FilePath: \vue3vite\src\pages\arc\addOrEdit.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved. 
-->
<template>
  <div class="h-full flex flex-col">
    <!-- <Editor /> -->
    <MarkdownEditor />
    <div class="">
      <el-button>发布</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkdownEditor from "@/components/MarkdownEditor/index.vue";
</script>
