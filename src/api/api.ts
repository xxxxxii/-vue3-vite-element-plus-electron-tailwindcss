/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 23:06:03
 * @FilePath: \vue3vite\src\api\api.ts
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
 */
import { http } from "../axios/axios";

const api_list = {
  login: "/user/login",
  articleList: "/v1/article",
};

export const login = (data) => {
  return http(api_list.login, "post", data);
};

export const articleList = (data) => {
  return http(api_list.articleList, "get", data);
};
