/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-02 12:50:05
 * @FilePath: \vue3vite\src\plugins\i18n\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
 */

import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

export const i18n = createI18n({
  locale: localStorage.getItem("locale") || "zh-CN", // zh-CN
  messages,
});
