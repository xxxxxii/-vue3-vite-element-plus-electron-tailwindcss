<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:39:47
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 14:42:16
 * @FilePath: \yl-admin\src\layouts\components\breadcrumb\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      :to="{ path: '#' }"
      v-for="(item, index) in breadNav"
      :key="index"
      >{{ t(item?.title) }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { useUserStore } from "@/stores/useUser";
const breadNav = computed(() => useUserStore().getBread.splice(1));
const { t } = useI18n();
</script>
