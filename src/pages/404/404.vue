<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-01 14:02:02
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-05 19:55:14
 * @FilePath: \yl-admin\src\pages\404\404.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { init } from "ityped";

const content = ref<null | Element>(null);

onMounted(() => {
  init(content.value as Element, {
    showCursor: false,
    disableBackTyping: true,
    strings: [" is not found!"],
  });
});

const router = useRouter();

const back = () => router.push("/");
</script>

<template>
  <div class="flex flex-wrap h-screen text-center justify-around items-center">
    <div class="font-blod desc">
      <div class="text-7xl code">404</div>
      <div ref="content" class="text-3xl content">The Page</div>
      <button
        active="scale-90 transform"
        class="rounded-lg transition btn"
        @click="back"
      >
        👉 Go Home
      </button>
    </div>

    <img src="./img/13.svg" class="cover" alt="page not found" />
  </div>
</template>

<style>
.code {
  margin-bottom: 20px;
}

.content {
  height: 40px;
}

.cover {
  height: auto;
  width: 700px;
  margin: 0 5px;
  max-width: 100%;
  max-height: 100%;
}

.desc {
  flex: 1;
  width: 300px;
}

.btn {
  font-size: 20px;
  margin-top: 30px;
  padding: 12px 20px;
  --tw-shadow-color: 8, 145, 178;
  --tw-shadow: 0 4px 6px -1px rgba(var(--tw-shadow-color), 0.1),
    0 2px 4px -1px rgba(var(--tw-shadow-color), 0.06);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-shadow);
}
</style>
