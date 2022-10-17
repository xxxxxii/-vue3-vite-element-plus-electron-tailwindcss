<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-14 23:51:57
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 19:21:47
 * @FilePath: \vue3vite\src\layouts\components\historyPages\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div @click="menuStore.toggleHistoryState()">
    <abbr title="历史标签">
      <IEpMore />
    </abbr>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from "@/stores/useMenu";
const menuStore = useMenuStore();
</script>
