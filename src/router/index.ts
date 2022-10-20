/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-01 12:53:46
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-21 04:27:11
 * @FilePath: \vue3vite\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

export const routes = [
  {
    path: "/",
    title: "首页",
    name: "Home",
    redirect: "/dashboard",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/article",
        name: "Article",
        component: () => import("@/pages/article/index.vue"),
      },
      {
        path: "/articleList",
        name: "ArticleList",
        component: () => import("@/pages/articleList/index.vue"),
      },
      {
        path: "/md",
        name: "Md",
        component: () => import("@/pages/md/index.md"),
      },
      {
        path: "/test",
        name: "Test",
        component: () => import("@/pages/test/index.vue"),
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/pages/dashboard/Analysis.vue"),
      },

      {
        path: "/user",
        name: "User",
        component: () => import("@/pages/user/index.vue"),
      },
      {
        path: "/iframe/vue",
        name: "iframe.vue",
        component: () => import("@/router/iframeRouter.vue"),
        meta: {
          iframe_link: "https://cn.vuejs.org",
        },
      },
      {
        path: "/iframe/echarts",
        name: "iframe.echarts",
        component: () => import("@/router/iframeRouter.vue"),
        meta: {
          iframe_link: "https://echarts.apache.org/zh/index.html",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/index.vue"),
  },
];
const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_MODE === "hash"
      ? createWebHashHistory()
      : createWebHistory(),
  routes,
});

export default router;
