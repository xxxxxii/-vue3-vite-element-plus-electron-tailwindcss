/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-18 20:22:19
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-19 19:33:28
 * @FilePath: \vue3-element-admin\src\stores\useUser.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";

import { login } from "@/api/api";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: null,
      name: "",
      avatar: "",
      introduction: "",
      roles: [],
    };
  },
  getters: {
    getToken() {
      return this.token;
    },
  },
  actions: {
    // user login
    login(userInfo: { username: any; password: any }) {
      const { username, password } = userInfo;
      return new Promise<void>((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then((response: { data: any }) => {
            const { token, info } = response.data;
            console.log(info);
            this.token = token;
            this.avatar = info.avatar || "";
            this.roles = info.role;
            this.name = info.username;

            resolve();
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },

    clearToken() {
      this.token = null;
    },
  },

  persist: {
    enabled: true,
    // strategies: [
    //   { storage: localStorage, paths: ["token", "name", "roles"] },
    //   //   { storage: localStorage, paths: [""] },
    // ],
  },
});
