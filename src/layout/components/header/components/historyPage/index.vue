<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-14 18:17:56
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-21 01:07:07
 * @FilePath: \my-blog\src\layouts\components\header\historyPage\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="tag-main">
    <el-tag
      class="cursor-pointer"
      v-for="(tag, index) in history"
      :key="tag.path"
      :closable="tag.path != currentRoute.path"
      @close="removeHistoryMenu(index)"
      :effect="currentRoute.path === tag.path ? 'dark' : 'light'"
    >
      <span @click="toRouter(tag)">{{ t(tag.title) }}</span>
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import routerServe from "@/hooks/useRouter";
import { useMenuStore } from "@/stores/useMenu";
import { storeToRefs } from "pinia";
const menuStore = useMenuStore();
const { history } = storeToRefs(menuStore);
const { t } = useI18n();
const currentRoute = useRouter().currentRoute;

function toRouter(menu) {
  routerServe.linkPage(menu);
}
function removeHistoryMenu(index) {
  menuStore.closeHistory(index);
}
</script>

<style scoped>
.tag-main {
  width: 100%;
  overflow-x: scroll;
  display: flex;
  /* 隐藏滚动条 */
  /* scrollbar-width: none;
  -ms-overflow-style: none; */
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
