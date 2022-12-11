/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-09 14:06:42
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-09 14:56:36
 * @FilePath: \-vue3-vite-element-plus-electron-tailwindcss\src\vite-env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.ts";
