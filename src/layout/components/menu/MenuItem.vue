<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 21:25:51
 * @FilePath: \vue3vite\src\layouts\components\menu\MenuItem.vue
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
-->
<script setup lang="ts">
import routerServe from "@/hooks/useRouter";
import { useI18n } from "vue-i18n";

import { useMenuStore } from "@/stores/useMenu";
const menuStore = useMenuStore();

const { t } = useI18n();

const props = defineProps({
  subMenu: {
    type: Array,
  },
});

function handleMenuClick(cmenu) {
  menuStore.addHistory(cmenu);
  routerServe.linkPage(cmenu);
}
</script>

<template>
  <template v-for="(menu, index) of props.subMenu">
    <el-sub-menu v-if="menu.children" :key="index" :index="menu.path!">
      <template #title>
        <el-icon v-if="menu.icon"><component :is="menu.icon" /></el-icon>
        <span>{{ t(menu.title!) }}</span>
      </template>
      <template v-for="(cmenu, key) of menu.children">
        <menu-item
          v-if="cmenu.children"
          :key="'sub_ ' + key"
          :sub-menu="menu.children"
        />
        <el-menu-item
          v-else
          :key="key"
          :index="cmenu.path!"
          @click="handleMenuClick(cmenu)"
        >
          <el-icon v-if="cmenu.icon"><component :is="cmenu.icon" /></el-icon>
          <span>{{ t(cmenu?.title!) }}</span>
        </el-menu-item>
      </template>
    </el-sub-menu>
    <template v-else>
      <el-menu-item
        :key="index"
        :index="menu.path!"
        @click="handleMenuClick(menu)"
      >
        <el-icon v-if="menu.icon"><component :is="menu.icon" /></el-icon>
        <span>{{ t(menu.title) }}</span>
      </el-menu-item>
    </template>
  </template>
</template>

<style scoped></style>
