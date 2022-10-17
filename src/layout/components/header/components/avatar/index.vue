<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 19:32:25
 * @FilePath: \vue3vite\src\layouts\components\avatar\index.vue
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
-->
<template>
  <el-avatar
    shape="square"
    :size="40"
    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
  />
  <div class="flex flex-col items-start">
    <span class="font-sans text-sm font-medium">{{ t("hello") }} {{}}</span>
    <span class="font-sans text-xs hidden md:block">{{ currentDate }}</span>
  </div>
  <el-dropdown>
    <el-icon
      style="font-size: 1.2em"
      class="ml-2 mt-[1px] hover:rotate-180 duration-500 cursor-pointer"
      ><Setting
    /></el-icon>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          @click="openNewTab('https://gitee.com/yulinzhu/vue3vite')"
        >
          {{ t("github") }}
        </el-dropdown-item>
        <el-dropdown-item @click="logout">{{ t("logout") }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import userServe from "@/hooks/useUsers";

const { t } = useI18n();
const router = useRouter();
let currentDate = ref(showtime());

setInterval(() => {
  currentDate.value = showtime();
}, 100);

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function showtime() {
  const nowdate = new Date();
  const year = nowdate.getFullYear();
  const month = nowdate.getMonth() + 1;
  const date = nowdate.getDate();
  const day = nowdate.getDay();
  const week = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  var h = nowdate.getHours();
  var m = nowdate.getMinutes();
  var s = nowdate.getSeconds();
  var h = checkTime(h);
  var m = checkTime(m);
  var s = checkTime(s);
  return year + "-" + month + "-" + date + "-" + " " + h + ":" + m + ":" + s;
}

function logout() {
  userServe.removeToken();
  router.push({ path: "/login" });
}

function openNewTab(url) {
  window.open(url, "_blank");
}
</script>
