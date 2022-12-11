/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 18:21:02
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 16:59:22
 * @FilePath: \vue3-element-admin\src\stores\useMenu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import _ from "lodash";

const menuMode = import.meta.env.VITE_REMOTE_MENUS as boolean;
export const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      isCollapse: false,
      historyShow: true,
    };
  },

  getters: {},
  actions: {
    // 菜单折叠设置
    toggleState() {
      this.isCollapse = !this.isCollapse;
    },
    // 是否显示历史菜单
    toggleHistoryState() {
      this.historyShow = !this.historyShow;
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
        paths: ["isCollapse", "historyShow"],
      },
      { storage: localStorage, paths: [] },
    ],
  },
});
