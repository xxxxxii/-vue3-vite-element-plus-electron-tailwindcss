<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-19 21:10:49
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

import { userMenu } from "@/api/menus/menu";

const menuStore = useMenuStore();
const { isCollapse } = storeToRefs(menuStore);

const route = useRoute();

const menuLists = computed(() => {
  return menuStore.getMenuList;
});

// console.log(menuLists);
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

// const menuList = ref([]);
// async function initMenu() {
//   let res = await userMenu();
//   console.log(res.data.menus);
//   menuList.value = res.data.menus;
// }
// initMenu();
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

const menuSelect = (index, indexPath, item, routeResult) => {
  menuStore.setBreadcrumb(indexPath);
};

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
        :default-openeds="[...defalutOpens]"
        @select="menuSelect"
        @open="handleOpen"
        @close="handleClose"
      >
        <menu-item :sub-menu="menuLists" />
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
  // background-color: rgba(1, 1, 1, 0);
}
.admin-menu::-webkit-scrollbar {
  width: 0 !important;
}
.admin-menu {
  @apply w-[200px] min-h-screen h-full border-r border-solid z-50 md:duration-300;
  &.close {
    @apply w-[70px];
  }
}

@media screen and (max-width: 766px) {
  .admin-menu {
    @apply w-[200px] bg-white dark:bg-black top-0 left-0 min-h-screen h-full border-r border-solid;
    &.close {
      @apply left-[-250px];
    }
  }
  .admin-menu {
    transition: all 0;
  }
  .bg {
    @apply bg-gray-600 w-screen h-screen z-20 opacity-75  absolute left-0 top-0;
  }
}
</style>
