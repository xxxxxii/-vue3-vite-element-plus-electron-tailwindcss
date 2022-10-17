/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 17:17:23
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 23:37:43
 * @FilePath: \vue3-element-admin\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import viteSetting from "./vite/vite";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [

  //   vue({ include: [/\.vue$/, /\.md$/] }),
  //   setupI18n(),
  //   AutoImport({
  //     resolvers: [ElementPlusResolver()],
  //     imports: ["vue", "vue-router", "@vueuse/core", "vue-i18n", "pinia"],
  //     // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
  //     dts: "src/auto-import.d.ts",
  //   }),
  //   Components({
  //     resolvers: [ElementPlusResolver()],
  //   }),
  // ],
  plugins: viteSetting(),
  server: {
    host: true,
    port: 3000,
    proxy: {
      "/blogApi": {
        target: "https://www.blogyl.top/blogApi",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blogApi/, ""),
      },
      "/api": {
        target:
          "https://api.virapi.com/vir_gitee2630fa082da7c/vue3viteelement-plus",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
});
