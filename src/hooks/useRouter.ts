/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 21:33:24
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 21:16:10
 * @FilePath: \vue3-element-admin\src\hooks\useMenu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, markRaw } from "vue";
import { useStorage } from "@vueuse/core";

import usersServe from "@/hooks/useUsers";

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
