<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:39:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 10:19:01
 * @FilePath: \yl-admin\src\layouts\components\banner\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useMenuStore } from "@/stores/useMenu";
import { storeToRefs } from "pinia";

const menuStore = useMenuStore();
const { isCollapse } = storeToRefs(menuStore);
</script>

<template>
  <div
    class="flex align-center items-center py-2 w-[220px] cursor-pointer"
    @click="$router.push('/')"
  >
    <div class="w-10 ml-4">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <div v-show="!isCollapse" class="flex-1 duration-500 ml-2 mr-1 w-[160px]">
      <span class="text-lg font-bold">yl 后台模版</span>
    </div>
  </div>
</template>

<style scoped></style>
