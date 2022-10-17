/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-13 00:38:37
 * @FilePath: \vue3vite\src\hooks\useDialog.ts
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
 */

import { h } from "vue";

const ELEMENT_MESSAGE_BOX_SIZE = "300px";

export function useDialog(msg: any, params: any) {
  return new Promise((resove, reject) => {
    ElMessageBox({
      message: () => {
        return params ? h(msg, params) : h("div", {}, msg);
      },
      lockScroll: false,
    })
      .then(() => {
        resove(true);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
}
