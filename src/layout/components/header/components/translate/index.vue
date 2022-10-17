<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:39:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 10:01:49
 * @FilePath: \vue3vite\src\layouts\components\translate\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import i18nService from "@/hooks/useI18n";

const { locale } = useI18n();

const toggleLocales = () => {
  locale.value = i18nService.locale.value === "zh-CN" ? "en" : "zh-CN";
  i18nService.toggleLocale();
};
</script>

<template>
  <div style="font-size: 1.3em">
    <abbr title="国际化">
      <i-mdi-google-translate
        class="fullscreen"
        @click="() => toggleLocales()"
      />
    </abbr>
  </div>
</template>

<style lang="scss" scoped>
.fullscreen {
  @apply cursor-pointer mx-1  duration-500;
}

@media screen and (max-width: 768px) {
  .fullscreen {
    display: none;
  }
}
</style>
