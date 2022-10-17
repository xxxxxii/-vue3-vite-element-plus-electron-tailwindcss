/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 18:21:02
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 20:44:56
 * @FilePath: \vue3-element-admin\src\stores\useMenu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { userMenu } from "@/api/menus/menu";
import { menusConfig } from "@/sysConfig/config";

// 获取后台首页路由 menu:查找的菜单集合，key:需要匹配的属性，tagart:匹配的值
function getMneuItemByKey(menu: any, key: string, tagart: string) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i][key] === tagart) {
      return menu[i];
    }
    if ("children" in menu[i]) {
      let result = getMneuItemByKey(menu[i].children, key, tagart);
      if (result) {
        return result;
      }
    }
  }
}

// 找到菜单path 返回节点链
function findPathbyId(tree: any, sPath: string, path: string) {
  if (typeof path === "undefined") {
    path = [];
  }
  for (let i = 0; i < tree.length; i++) {
    const tempPath = [...path];
    tempPath.push(tree[i].path);
    if (tree[i].path === sPath) {
      return tempPath;
    }
    if (tree[i].children) {
      const reuslt = findPathbyId(tree[i].children, sPath, tempPath);
      if (reuslt) {
        return reuslt;
      }
    }
  }
}

const menuMode = true;
export const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      menuList: [],
      isCollapse: false,
      historyShow: true,
      history: null,
      breadcrumb: null,
    };
  },

  getters: {},
  actions: {
    // 初始化菜单设置
    async initMenuSet(path: string) {
      if (menuMode) {
        // 远程获取菜单
        const menus = await userMenu();
        this.menuList = menus.data.menus;
      } else {
        // 本地获取菜单
        // 通过用户角色过滤菜单
        this.menuList = menusConfig;
      }
      // 面包屑导航初始化
      this.breadcrumb = findPathbyId(this.menuList, path);
      console.log(this.breadcrumb);

      let routerParam = getMneuItemByKey(this.menuList, "path", path);
      console.log(routerParam, this.history === null);
      if (this.history === null) {
        // 添加
        this.history = [];
        this.addHistory(routerParam);
      }
    },

    setBreadcrumb(breadcrumb: any) {
      this.breadcrumb = breadcrumb;
    },
    // 添加历史菜单
    addHistory(menu: any) {
      let isEx = this.history.find((item: any) => {
        return item.path === menu.path;
      });
      if (!isEx) {
        this.history.push(menu);
      }
    },
    // 移除历史菜单
    closeHistory(index: number) {
      this.history.splice(index, 1);
    },
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
      { storage: sessionStorage, paths: ["isCollapse", "historyShow"] },
      { storage: localStorage, paths: ["history"] },
    ],
  },
});
