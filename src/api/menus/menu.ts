/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-15 18:48:02
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-15 18:49:37
 * @FilePath: \vue3vite\src\api\menus\menu.ts
 * @Description:
 *
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved.
 */
import { http } from "@/axios/axios";

const api_list = {
  user_menu: "/menus",
};

export const userMenu = (data) => {
  return http(api_list.user_menu, "get", data);
};
