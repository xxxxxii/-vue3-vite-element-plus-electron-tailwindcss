/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 21:33:24
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-19 23:22:50
 * @FilePath: \vue3-element-admin\src\hooks\useMenu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, markRaw } from "vue";
import { useStorage } from "@vueuse/core";

import router from "@/router";
import { userMenu } from "@/api/menus/menu";

export default {
  linkPage(menu) {
    console.log(menu);
    if (router.currentRoute.fullPath != menu.path) {
      router.push({ path: menu.path });
    }
  },
};
