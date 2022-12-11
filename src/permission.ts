/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-18 20:49:53
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 19:55:43
 * @FilePath: \vue3-element-admin\src\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { nprogressStart, nprogressClose } from "@/hooks/useNporgress";

import pinia from "@/stores/store";
import { useUserStore } from "@/stores/useUser";
import { useHistoryStore } from "@/stores/history";
import useLoading from "@/hooks/useLoading";
const { hideLoading, showLoading } = useLoading;
import { RouteLocationNormalized, Router, _RouteRecordBase } from "vue-router";

// 路由白名单，不需要登陆即可使用
const whiteList = ["/login"];

export function guard(router: Router) {
  let hasRoles = true;
  router.beforeEach(async (to, from, next) => {
    const useUser = useUserStore(pinia);
    // start progress bar
    showLoading();
    nprogressStart();

    let hasToken = useUser.getToken;

    if (hasToken) {
      if (to.path === "/login") {
        // if is logged in, redirect to the home page
        next({ path: "/" });
        nprogressClose(); // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
      } else {
        // determine whether the user has obtained his permission roles through getInfo
        // let roles = useUser.roles;
        // let hasRoles = roles.length > 0;

        // 动态生成路由 根据role 生成动态菜单，路由
        useUserStore().setUser({ role: useUserStore().users.role });
        let routes = useUserStore().routers;
        if (hasRoles) {
          routes.forEach((item) => {
            console.log(item);
            router.addRoute("Layout", item);
          });

          // router.addRoute({
          //   path: "/:w+",
          //   name: "*",
          //   component: () => import("@/pages/404/404.vue"),
          // });
          hasRoles = false;
          next({ ...to, replace: true }); // 这里相当于push到一个页面 不在进入路由拦截
        } else {
          next(); // 如果不传参数就会重新执行路由拦截，重新进到这里
        }
      }
    } else {
      /* has no token*/
      // 是否在白名单内
      if (whiteList.indexOf(to.path) !== -1) {
        // in the free login whitelist, go directly
        next();
      } else {
        // other pages that do not have permission to access are redirected to the login page.
        next(`/login?redirect=${to.path}`);
        nprogressClose();
      }
    }
  });

  router.afterEach((to: RouteLocationNormalized): void => {
    hideLoading();
    nprogressClose();

    // 添加缓存路由
    if (to.name && to.meta && to.meta.needCache) {
      useHistoryStore().addCacheView(to.name.toString());
    }
    const { name, path, meta, params, query } = to;
    if (to.meta && !to.meta.notNeedAuth) {
      useHistoryStore().addVisitedView({
        name,
        path,
        meta,
        params,
        query,
      } as _RouteRecordBase);
    }
  });
}
