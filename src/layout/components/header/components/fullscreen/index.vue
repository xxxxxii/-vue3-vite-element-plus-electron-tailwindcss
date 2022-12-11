<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:39:47
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 18:38:06
 * @FilePath: \vue3vite\src\layouts\components\fullscreen\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cursor-pointer fullScreen" style="font-size: 1.4em">
    <abbr title="全屏">
      <i-mdi-fullscreen
        v-show="!isFullScreen"
        @click="() => fullScreen()"
        class="fullscreen hover:scale-110"
      />
      <i-mdi-fullscreen-exit
        v-show="isFullScreen"
        class="fullscreen hover:scale-110"
        @click="() => fullScreen()"
      />
    </abbr>
  </div>
</template>

<script setup>
import { useFullScreen } from "@/hooks/useFullScreen";

const { isFullScreen, fullScreen } = useFullScreen();
</script>

<style scoped>
.fullScreen {
  display: flex;
  align-items: center;
}
</style>
