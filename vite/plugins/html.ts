/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:23:43
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-09 15:48:25
 * @FilePath: \yl-admin\vite\plugins\html.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createHtmlPlugin } from "vite-plugin-html";

export function setupHtmlPlugin(isBuild: boolean, env: any) {
  // const { VITE_GLOB_APP_TITLE } = env;

  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: env.VITE_GLOB_APP_TITLE,
      },
    },
  });
}
