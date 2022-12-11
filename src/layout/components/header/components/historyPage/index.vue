<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-14 18:17:56
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 22:45:58
 * @FilePath: \my-blog\src\layouts\components\header\historyPage\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="tag-main">
    <el-tag
      class="mr-1 cursor-pointer"
      v-for="(tag, index) in historyList"
      :key="tag.path"
      :closable="tag.path != currentRoute.path"
      @close="removeHistoryMenu(index)"
      @contextmenu.prevent="mouseRightClick(tag, index, $event)"
      :effect="currentRoute.path === tag.path ? 'dark' : 'light'"
    >
      <span @click.stop="toRouter(tag)" class="">{{ t(tag.meta.title) }}</span>
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import routerServe from "@/hooks/useRouter";
import { useHistoryStore } from "@/stores/history";
import { remove } from "lodash";
import { _RouteRecordBase } from "vue-router";
console.log(useHistoryStore().historyList);

const historyList: any = computed(() => useHistoryStore().historyList);
console.log(historyList);
const { t } = useI18n();

const router = useRouter();
const route = useRoute();

const currentRoute = useRouter().currentRoute;

function closeLeftMenu() {
  let rightMenuDom = document.getElementById("right-menu") as HTMLElement;
  rightMenuDom?.remove();
}

function toRouter(menu: object) {
  closeLeftMenu();
  routerServe.linkPage(menu);
}
function removeHistoryMenu(index: number) {
  useHistoryStore().closeHistory(index);
}
function removeHistoryAll(view: _RouteRecordBase) {
  useHistoryStore().deleteOtherVisitedView(view);
  if (route.fullPath != view.path) {
    router.replace({ path: view.path });
  }
}
async function refresh() {
  console.log(clikcTag.value.path);
  if (clikcTag.value?.name === route.name) {
    await router.push({ path: "/" });
    router.replace({ name: clikcTag.value?.name });
  } else {
    router.push({ name: clikcTag.value?.name });
  }
}

// 关闭右键菜单
const hideMenu = (e: any) => {
  let rightMenuDom = document.getElementById("right-menu") as HTMLElement;
  // let isClick = rightMenuDom.click ? true : false;
  console.log(e.target.parentNode === rightMenuDom);

  if (e.target.parentNode === rightMenuDom) {
    console.log(route.path, clikcTag.value.path);
    if (route.path === clikcTag.value.path) {
      console.log("2222222222222222222222222222222");
      ElMessage.warning("当前路由正在使用，不可关闭");
      return;
    }
    switch (e.target.innerText) {
      case "刷新":
        refresh();
        break;
      case "关闭":
        removeHistoryMenu(clickIndex.value);
        break;
      case "全部关闭":
        removeHistoryAll(clikcTag.value);
        break;
    }
    closeLeftMenu();
    // rightMenuDom.remove();
  } else {
    console.log("2");
    closeLeftMenu();
    // rightMenuDom?.remove();
  }
};
function createRightMenu(clientX: number, clientY: number) {
  let rightMenuDom = document.getElementById("right-menu") as HTMLElement;
  if (rightMenuDom) {
    rightMenuDom.remove();
  }
  const tagDomBox = document.querySelector(".tag-main");
  tagDomBox?.insertAdjacentHTML(
    "beforeend",
    `<ul id="right-menu" class="right-menu">
      <li class="px-2 py-1 cursor-pointer">刷新</li>
      <li v-if="false" class="px-2 py-1 cursor-pointer">关闭</li>
      <li class="px-2 py-1 cursor-pointer">全部关闭</li>
    </ul>`
  );
  rightMenuDom = document.getElementById("right-menu") as HTMLElement;

  rightMenuDom!.style!.left = clientX + 10 + "px";
  rightMenuDom!.style!.top = clientY + 10 + "px";
  console.log(tagDomBox, rightMenuDom);

  window.addEventListener("click", hideMenu);
}

const clikcTag: any = ref();
const clickIndex = ref();
const mouseRightClick = (view: _RouteRecordBase, index: number, e: any) => {
  // 存储右键view
  // mouseRightView.value = view;
  // 显示右键菜单
  // showMenu(e.clientX, e.clientY);
  console.log(view, e);
  clikcTag.value = view;
  clickIndex.value = index;
  createRightMenu(e.clientX, e.clientY);
};
</script>

<style lang="scss" scoped>
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
