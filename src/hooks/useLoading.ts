/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-12 22:44:12
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-09 15:58:50
 * @FilePath: \vue3vite\src\hooks\useLoading.ts
 * @Description:
 *
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved.
 */

let loading: any = null;

class Loading {
  showLoading(el = ".body") {
    console.log("show");
    loading = ElLoading.service({
      target: el,
      lock: true,
      text: "Loading...",
      background: "rgba(0, 0, 0, 0.7)",
    });
  }
  hideLoading() {
    loading.close();
  }
}

export default new Loading();
