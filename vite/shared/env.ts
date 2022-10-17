/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-15 18:52:41
 * @FilePath: \vue3vite\vite\shared\env.ts
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
 */
import { loadEnv } from "vite";

const { NODE_ENV } = process.env;

// 是否是开发环境
export const isDevelopment = NODE_ENV === "development";

// 是否是生产环境
export const isProduction = NODE_ENV === "production";

const stringToBoolean = (v: string) => {
  return Boolean(v === "true" || false);
};

// 获取环境变量
const useEnv = () => {
  const env = isProduction
    ? loadEnv("production", ".")
    : loadEnv("development", ".");

  const {
    VITE_GLOB_APP_TITLE,
    VITE_PORT,
    VITE_API_URL,
    VITE_APP_INSPECT,
    VITE_APP_MARKDOWN,
    VITE_DEVTOOLS,
    VITE_APP_API_AUTO_IMPORT,
    VITE_APP_MOCK_IN_PRODUCTION,
    VITE_APP_DIR_API_AUTO_IMPORT,
    VITE_APP_COMPRESSINON_ALGORITHM,

    VITE_BUILD_DIR,
    VITE_REMOTE_MENUS,

    VITE_ROUTER_MODE,
    VITE_AIUTO_IMPORT_ICONS,
  } = env;

  const newEnv = {
    VITE_GLOB_APP_TITLE,
    VITE_APP_COMPRESSINON_ALGORITHM,
    VITE_PORT,
    VITE_BUILD_DIR,
    VITE_API_URL,
    VITE_DEVTOOLS: stringToBoolean(VITE_DEVTOOLS),
    VITE_APP_INSPECT: stringToBoolean(VITE_APP_INSPECT),
    VITE_APP_MARKDOWN: stringToBoolean(VITE_APP_MARKDOWN),
    VITE_APP_API_AUTO_IMPORT: stringToBoolean(VITE_APP_API_AUTO_IMPORT),
    VITE_APP_MOCK_IN_PRODUCTION: stringToBoolean(VITE_APP_MOCK_IN_PRODUCTION),
    VITE_APP_DIR_API_AUTO_IMPORT: stringToBoolean(VITE_APP_DIR_API_AUTO_IMPORT),
    VITE_REMOTE_MENUS: stringToBoolean(VITE_REMOTE_MENUS),

    VITE_ROUTER_MODE,

    VITE_AIUTO_IMPORT_ICONS,
  };
  return newEnv;
};

export const env = useEnv();
