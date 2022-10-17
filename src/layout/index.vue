<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 17:25:15
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 22:55:22
 * @FilePath: \vue3-element-admin\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container class="home-main h-screen w-full">
    <Menu />
    <el-container direction="vertical">
      <Header />
      <MainPages />
      <!-- <RouterView /> -->
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Menu from "./components/menu/index.vue";
import Header from "./components/header/header.vue";
import MainPages from "./components/mainPages/index.vue";
</script>

<style scoped>
.home-main {
  width: 100%;
  height: 100vh;
}
</style>
