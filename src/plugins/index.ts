/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 20:44:22
 * @FilePath: \vue3vite\src\plugins\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
 */

import { App } from "vue";
import { i18n } from "./i18n";
import elemnetIcon from "./elementIcon";

// import VueMarkdownEditor from './mdEditor'

const pluginList = [
  // 如果有使用到别的插件，引入放在这个位置就好
  i18n,
  elemnetIcon,
];
const plugins = {
  install(app: App<Element>) {
    // 批量注册插件  改用自动引入
    Object.entries(pluginList).forEach(([, v]) => {
      app.use(v);
    });
  },
};

export default plugins;
