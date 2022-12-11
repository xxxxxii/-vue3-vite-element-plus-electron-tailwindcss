/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:23:43
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 16:40:30
 * @FilePath: \vue3vite\vite\vite.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "@vitejs/plugin-vue";
import autoImport from "./plugins/autoImport";
import { setMarkdown } from "./plugins/markdown";
import { setupHtmlPlugin } from "./plugins/html";
import { setupI18n } from "./plugins/i18n";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { getEnv } from "./util";
const env = getEnv();
console.log(env);

export default () => {
  return [
    Vue({
      include: [/\.vue$/, /\.md$/, /\.jsx$/, /\.tsx$/],
    }),
    VueJsx(),
    autoImport(),
    setupI18n(),
    setMarkdown(),
    setupHtmlPlugin(true, env),
  ];
};
