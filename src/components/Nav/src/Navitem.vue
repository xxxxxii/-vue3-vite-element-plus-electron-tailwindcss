<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-20 20:18:28
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-21 03:40:47
 * @FilePath: \vue3-element-admin\src\components\Nav\src\Navitem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <li>
    <a
      :href="href"
      :class="[
        'block px-4 py-2 rounded-md',
        { 'bg-amber-100 text-amber-700': isActive },
      ]"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  href: String,
  isActive: Boolean,
});
</script>
