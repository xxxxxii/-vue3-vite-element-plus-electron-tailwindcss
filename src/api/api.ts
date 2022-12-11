/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 14:48:23
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

export const loginApi = (data: any) => {
  return http(api_list.login, "post", data);
};

export const articleList = (data: any) => {
  return http(api_list.articleList, "get", data);
};
