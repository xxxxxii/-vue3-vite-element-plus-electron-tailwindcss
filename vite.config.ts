/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 17:17:23
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-09 16:46:32
 * @FilePath: \vue3-element-admin\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import path from "path";
import { getEnv } from "./vite/util";
const env = getEnv();
import viteSetting from "./vite/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [...viteSetting()],
  server: {
    host: true,
    port: env.VITE_PORT as unknown as number,
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
  // resolve: {
  //   alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "#": path.resolve(__dirname, "./"),
    },
  },
});
