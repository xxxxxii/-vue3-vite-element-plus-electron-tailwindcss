/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-09 19:25:57
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 22:36:21
 * @FilePath: \-vue3-vite-element-plus-electron-tailwindcss\src\stores\asyncRoute.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { constantRouter, dynaRouters } from "@/router/index";
import _ from "lodash";
import { _RouteRecordBase } from "vue-router";
export const useHistoryStore = defineStore({
  id: "app-history-route",
  state: (): {
    historyList: _RouteRecordBase[];
    cachedViews: string[];
  } => ({
    historyList: [],
    cachedViews: [],
  }),

  actions: {
    // 本地菜单 根据路由元数据构建菜单列表
    // 添加访问过的路由
    addVisitedView(view: _RouteRecordBase) {
      if (
        view?.meta?.title &&
        !this.historyList.find((item) => item.name === view.name)
      ) {
        this.historyList.push(view);
      }
    },
    closeHistory(index: number) {
      this.historyList.splice(index, 1);
    },
    // 添加缓存路由
    addCacheView(name: string) {
      if (!this.cachedViews.includes(name)) {
        this.cachedViews.push(name);
      }
    },
    // 删除其他的路由
    deleteOtherVisitedView(view: _RouteRecordBase) {
      console.log(view);
      this.historyList = this.historyList.filter((item) => {
        return item.path === view.path;
      });
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
        paths: ["historyList"],
      },
    ],
  },
});
