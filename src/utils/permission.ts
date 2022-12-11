/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-10 23:21:11
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-10 23:59:29
 * @FilePath: \-vue3-vite-element-plus-electron-tailwindcss\src\utils\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "@/router";
import { _RouteRecordBase } from "vue-router";
//处理权限
export const hasPermission = (route: any, role: any) => {
  if (route.meta && route.meta.roles) {
    let tag = false;
    for (const ival of role) {
      if (route.meta.roles.includes(ival)) {
        tag = true;
        break;
      }
    }
    return tag;
    // console.log(route, route.meta.roles.includes(role));
  }
  //默认不设置权限
  return true;
};
// 菜单权限处理
export const filterAsyncRouter = (routerMap: any, roles: any) => {
  const accessedRouters = routerMap.filter((route: any) => {
    if (hasPermission(route, roles)) {
      if (route.children && route.children.length > 0) {
        route.children = filterAsyncRouter(route.children, roles);
      }

      return true;
    }
    return false;
  });
  return accessedRouters;
};
