<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 17:17:23
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 14:21:58
 * @FilePath: \vue3-element-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import i18nService from "./hooks/useI18n";
import { useUserStore } from "@/stores/useUser";
import useLoading from "@/hooks/useLoading"
const { showLoading,hideLoading } = useLoading
const locale = computed(() => {
  return i18nService.locale.value === "zh-CN" ? zhCn : en;
});
const route = useRoute();
console.log(route);
watchEffect(() => {
  // handleBreadcrumb(route.matched);
  useUserStore().setBreadcrumb(route.matched);
});
showLoading()
nextTick(() => { 
  hideLoading()
})
</script>

<template>
  <el-config-provider :locale="locale" v-cloak />
  <div class="h-full min-w-mobile">
    <router-view />
  </div>
  <el-config-provider />
</template>
