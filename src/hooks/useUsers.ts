/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-15 18:35:51
 * @FilePath: \vue3vite\src\hooks\useUsers.ts
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
 */
import { login } from "@/api/api.js";
import router from "@/router";

let role = null;
class useUsers {
  constructor() {
    // this.roleList = ref([]);
  }

  async login(data) {
    const result = await login(data);
    console.log(result.data);
    if (result.data.code === "200") {
      console.log(result.data);
      this.setToken(result.data.token);
      this.setUserInfo(result.data.info);

      this.setUserRole(result.data.info.role);

      ElNotification({
        type: "success",
        message: "登录成功",
        duration: 3600,
      });
      router.push({ path: "/" });
    }
  }

  setUserInfo(data) {
    this.userData = sessionStorage.setItem("userData", JSON.stringify(data));
  }

  setUserRole(data) {
    role = localStorage.setItem("role", JSON.stringify(data));
  }

  getUserRole() {
    return JSON.parse(localStorage.getItem("role"));
  }

  setToken(token) {
    this.token = sessionStorage.setItem("token", token);
  }

  getToken() {
    return sessionStorage.getItem("token");
  }

  getUserInfo() {
    return JSON.parse(sessionStorage.getItem("userData"));
  }

  removeToken() {
    sessionStorage.clear();
  }
}

export default new useUsers();
