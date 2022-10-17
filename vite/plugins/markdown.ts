/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-06 13:33:52
 * @FilePath: \vue3vite\vite\plugins\markdown.ts
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
 */
import { env } from "./../shared/env";
import Prism from "markdown-it-prism";
import Markdown from "vite-plugin-md";
export const markdownWrapperClasses =
  "prose md:prose-lg lg:prose-lg dark:prose-invert text-left p-10 prose-slate prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600";

export function setMarkdown() {
  return (
    env.VITE_APP_MARKDOWN &&
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      markdownItSetup(md) {
        md.use(Prism);
      },
    })
  );
}
