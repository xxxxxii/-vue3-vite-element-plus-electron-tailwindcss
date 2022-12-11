/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-18 20:22:19
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 19:17:45
 * @FilePath: \vue3-element-admin\src\stores\useUser.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { filterAsyncRouter } from "@/utils/permission";
import { dynaRouters } from "@/router";

import { loginApi } from "@/api/api";
import { _RouteRecordBase } from "vue-router";
export const useUserStore = defineStore("user", {
  state: (): {
    token: string;
    users: any;
    routers: any[];
    currentRouteName: any[];
  } => {
    return {
      token: "",
      users: {},
      routers: [],
      currentRouteName: [],
    };
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    // 获取 面包屑导航数据
    getBread: (state) => state.currentRouteName,
  },
  actions: {
    setUser(user: any) {
      console.log(user, dynaRouters);
      const routers = markRaw(dynaRouters);
      const accessedRouters = filterAsyncRouter(routers, user.role);
      this.users = user;
      console.log(user, accessedRouters);
      this.routers = accessedRouters;
      // handleFixedVisitedViews(tagsStore(), routers);
    },
    setBreadcrumb(arr: any[]) {
      const newBreadArr = arr?.filter((item) => {
        return item.meta && JSON.stringify(item.meta) != "{}";
      });
      const titles = newBreadArr?.map((item) => {
        return {
          title: item?.meta?.title,
          path: item?.path,
        };
      });
      console.log(titles);
      this.currentRouteName = titles;
    },
    // user login
    login(userInfo: { username: string; password: string }) {
      const { username, password } = userInfo;
      const loginFrom: { username: string; password: string } = {
        username: username.trim(),
        password,
      };
      return new Promise<void>((resolve, reject) => {
        loginApi(loginFrom)
          .then((response: { data: any }) => {
            const { token, info } = response.data;
            // console.log(info);
            this.token = token;
            // this.avatar = info.avatar || "";
            // this.roles = info.role;
            // this.name = info.username;
            //
            this.setUser(info);
            resolve();
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },

    clearToken() {
      this.token = "";
    },
  },

  persist: {
    enabled: true,
    // strategies: [
    //   {
    //     storage: sessionStorage,
    //     paths: ["routers"],
    //   },
    //   // { storage: localStorage, paths: ["history"] },
    // ],
  },
});
