<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:39:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 20:10:58
 * @FilePath: \yl-admin\src\layouts\components\breadcrumb\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      :to="{ path: '#' }"
      v-for="(item, index) in breadcrumb"
      :key="index"
      >{{ breadcrumbItem(item) }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useMenuStore } from "@/stores/useMenu";
const menuStore = useMenuStore();
const { breadcrumb } = storeToRefs(menuStore);
import { ArrowRight } from "@element-plus/icons-vue";
const { t } = useI18n();

const breadcrumbItem = computed(() => (item: String) => {
  return t("router" + item.replaceAll("/", "."));
});
</script>
