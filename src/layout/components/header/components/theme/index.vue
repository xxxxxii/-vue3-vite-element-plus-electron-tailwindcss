<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:39:47
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 18:40:17
 * @FilePath: \vue3vite\src\layouts\components\theme\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import useDarks from "@/hooks/useDarks";
const { isDark, toggleDark } = useDarks();
</script>

<template>
  <div style="font-size: 1.3em" @click="() => toggleDark()">
    <abbr title="主题切换">
      <i-mdi-white-balance-sunny v-show="!isDark" class="dark-mode" />
      <i-mdi-weather-night v-show="isDark" class="dark-mode" />
    </abbr>
  </div>
</template>

<style scoped>
.dark-mode {
  @apply cursor-pointer mx-1 hover:rotate-90 duration-500;
}
</style>
