<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:39:47
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 18:36:04
 * @FilePath: \vue3vite\src\layouts\components\header\header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import Breadcrumb from "./components/breadcrumb/index.vue";
import Avatar from "./components/avatar/index.vue";
import Fullscreen from "./components/fullscreen/index.vue";
import Themme from "./components/theme/index.vue";
import Translate from "./components/translate/index.vue";
import TagPages from "./components/historyPage/index.vue";
import HistoryShow from "./components/historyShow/index.vue";

import { useMenuStore } from "@/stores/useMenu";
import { storeToRefs } from "pinia";

const menuStore = useMenuStore();
const { isCollapse, historyShow } = storeToRefs(menuStore);

defineProps({
  msg: String,
});

function taget() {
  menuStore.toggleState();
}
</script>

<template>
  <el-header
    class="flex justify-between border-b"
    style="text-align: right; font-size: 12px"
  >
    <div class="flex items-center align-center" @click="taget">
      <!-- <Drawer /> -->
      <div class="pr-3 cursor-pointer">
        <i-ep-expand
          :class="{ 'rotate-180': !isCollapse }"
          class="duration-500"
          style="font-size: 1.3em"
        />
      </div>
    </div>
    <div class="flex items-center align-center">
      <Breadcrumb class="hidden md:block" />
    </div>
    <div class="flex items-center justify-end flex-1 h-full gap-2">
      <HistoryShow />
      <Fullscreen />
      <Translate />
      <Themme />
      <Avatar />
    </div>
  </el-header>
  <div v-if="historyShow" class="flex justify-between pl-1 pr-1">
    <TagPages />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.duration-300 {
  transition-duration: 300ms;
}
</style>
