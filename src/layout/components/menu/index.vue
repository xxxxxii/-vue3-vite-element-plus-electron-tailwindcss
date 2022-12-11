<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 19:42:12
 * @FilePath: \vue3vite\src\layouts\components\menu\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved. 
-->
<script lang="ts" setup>
import MenuItem from "./MenuItem.vue";
import Banner from "./components/banner/index.vue";
import { ref, watch } from "vue";
import { useMenuStore } from "@/stores/useMenu";
import { useUserStore } from "@/stores/useUser";
const { routers } = useUserStore();

const menuStore = useMenuStore();
const { isCollapse } = storeToRefs(menuStore);

const route = useRoute();
const active = ref(route.fullPath);

watch(
  () => route,
  (to) => {
    active.value = to.fullPath;
  },
  {
    deep: true,
  }
);

// 设置展开的菜单项
let defalutOpens: any = useStorage("defalutOpens", new Set());
let menu = ref();
watch(isCollapse, (newVal, oldVal) => {
  console.log(newVal);
  if (!newVal) {
    defalutOpens.value.forEach((item: string) => {
      try {
        menu.value.open(item);
      } catch (err) {
        console.log(err);
      }
    });
  }
});

const menuMode = computed(() => {
  return import.meta.env.VITE_MENU_OPENS as boolean;
});

const openMenus = computed(() => {
  return menuMode ? [...defalutOpens.value] : [];
});

const handleOpen = (key: string, keyPath: string[]) => {
  defalutOpens.value.add(key);
};

const handleClose = (key: string, keyPath: string[]) => {
  defalutOpens.value.delete(key);
};
</script>

<template>
  <el-aside class="admin-menu" :class="{ close: isCollapse }">
    <div class="w-full h-full">
      <div class="flex justify-center">
        <Banner />
      </div>

      <el-menu
        ref="menu"
        :hide-timeout="100"
        :collapse="isCollapse"
        :default-active="active"
        :unique-opened="!menuMode"
        :default-openeds="openMenus"
        @open="handleOpen"
        @close="handleClose"
      >
        <menu-item :sub-menu="routers" />
      </el-menu>
      <teleport to="body">
        <div
          v-show="!isCollapse"
          class="block bg md:hidden"
          @click="menuStore.toggleState"
        ></div>
      </teleport>
    </div>
  </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
  color: var(--el-text-color-primary);
  overflow-x: hidden;
}
.el-menu {
  border-right: none;
  height: calc(100vh - 70px);
}
.admin-menu {
  @apply w-[220px]  bg-white dark:bg-black min-h-screen h-full border-r border-solid z-50;
  &.close {
    @apply w-[70px];
  }
}

@media screen and (max-width: 766px) {
  .admin-menu {
    @apply w-[220px]  bg-white dark:bg-black absolute top-0 left-0 min-h-screen h-full border-r border-solid;
    &.close {
      @apply left-[-220px];
    }
  }
  .bg {
    @apply bg-gray-600 w-screen h-screen z-20 opacity-75  absolute left-0 top-0;
  }
}
</style>
