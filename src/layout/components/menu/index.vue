<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 21:31:00
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

const menuStore = useMenuStore();
const { menuList, isCollapse } = storeToRefs(menuStore);

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

menuStore.initMenuSet(route.fullPath);

// 设置展开的菜单项
let defalutOpens = useStorage("defalutOpens", new Set());

let menu = ref(null);
watch(isCollapse, (newVal, oldVal) => {
  console.log(newVal);
  if (!newVal) {
    defalutOpens.value.forEach((item) => {
      try {
        menu.value.open(item);
      } catch (err) {
        console.log(err);
      }
    });
  }
});

// 默认选中的菜单
function defaultActive() {
  // addRedirect(router.currentRoute.value.path);
  // 设置当前路由
  localStorage.setItem("redirect_name", router.currentRoute.value.path);
  menuService.initTag(router.currentRoute.value.path);
  return router.currentRoute.value.path;
}

const menuSelect = (index, indexPath, item, routeResult) => {
  console.log(index, indexPath);
  menuStore.setBreadcrumb(indexPath);
  // console.log(index, indexPath, item, routeResult);
  // menuService.setBreadcrumb(indexPath);
};

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  defalutOpens.value.add(key);
  console.log(defalutOpens.value);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);

  defalutOpens.value.delete(key);
  console.log(defalutOpens.value);
};
</script>

<template>
  <el-aside class="admin-menu duration-500" :class="{ close: isCollapse }">
    <div class="w-full h-full" style="">
      <div class="flex justify-center">
        <Banner />
      </div>

      <el-menu
        ref="menu"
        :collapse="isCollapse"
        :default-active="active"
        :default-openeds="[...defalutOpens]"
        @select="menuSelect"
        @open="handleOpen"
        @close="handleClose"
      >
        <menu-item :sub-menu="menuList" />
      </el-menu>
      <teleport to="body">
        <div
          v-show="!isCollapse"
          class="bg block md:hidden"
          @click="menuStore.toggleState"
        ></div>
      </teleport>
    </div>
  </el-aside>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.admin-menu::-webkit-scrollbar {
  width: 0 !important;
}
.admin-menu {
  @apply w-[250px]  min-h-screen h-full border-r border-solid z-50;
  &.close {
    @apply w-[70px];
  }
}

@media screen and (max-width: 766px) {
  .admin-menu {
    @apply w-[250px] duration-500 bg-white dark:bg-black  absolute top-0 left-0 min-h-screen h-full border-r border-solid;
    &.close {
      @apply left-[-250px] duration-500;
    }
  }
  .bg {
    @apply bg-gray-600 w-screen h-screen z-20 opacity-75  absolute left-0 top-0;
  }
}
</style>
