/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-01 12:53:46
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 21:56:29
 * @FilePath: \vue3vite\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { App } from "vue";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

import { guard } from "@/permission";
import { MenuProps } from "@/types";
import Layout from "@/layout/index.vue";

export const constantRouter: Array<any> = [
  {
    path: "/",
    name: "Layout",
    redirect: "/dashboard",
    meta: {
      title: "首页",
    },
    component: Layout,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/pages/404/404.vue"),
  },
];

export const dynaRouters: Array<RouteRecordRaw & MenuProps> = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/pages/dashboard/Analysis.vue"),
    meta: {
      type: "index",
      fixed: true,
      title: "router.dashboard",
      icon: "Odometer",
    },
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/pages/test/index.vue"),
    meta: {
      title: "router.test",
      icon: "DocumentRemove",
      roles: [1],
    },
  },
  {
    path: "/user",
    name: "User",
    meta: { title: "router.user", icon: "House" },
    children: [
      {
        path: "/userList",
        name: "UserList",
        component: () => import("@/pages/user/index.vue"),
        meta: {
          title: "router.userList",
          icon: "User",
          roles: [1],
        },
      },
      {
        path: "/userPermissions",
        meta: {
          title: "router.userPermissions",
          icon: "User",
          roles: [2],
        },
        children: [
          {
            path: "/userPermissionsList",
            name: "UserPermissionsList",
            component: () => import("@/pages/user/index.vue"),
            meta: {
              title: "router.userPermissionsSetting",
              roles: [2],
            },
          },
        ],
      },
    ],
  },
  {
    path: "/articleMarger",
    name: "ArticleMarger",
    meta: {
      title: "router.articleMarger",
      icon: "Notebook",
    },
    children: [
      {
        path: "/article",
        name: "Article",
        component: () => import("@/pages/article/index.vue"),
        meta: {
          title: "router.article",
          icon: "Tickets",
          roles: [1],
          keepAlive: true,
        },
      },
      {
        path: "/articleList",
        name: "ArticleList",
        component: () => import("@/pages/articleList/index.vue"),
        meta: {
          title: "router.articleList",
          icon: "Memo",
          roles: [1],
        },
      },
    ],
  },
  {
    path: "/postcard",
    name: "Postcard",
    meta: {
      title: "router.postcard",
      icon: "Brush",
    },
    children: [
      {
        path: "/md",
        name: "Md",
        component: () => import("@/pages/md/index.md"),
        meta: {
          icon: "Notification",
          title: "router.markdown",
          roles: [2],
        },
      },
    ],
  },

  {
    path: "/ifarme",
    name: "Ifarme",
    meta: {
      title: "router.ifarme",
      icon: "Notification",
      roles: [2],
    },
    children: [
      {
        path: "/ylBlog",
        name: "YlBlog",
        component: () => import("@/layout/ifarme-page.vue"),
        meta: {
          title: "router.iframe.yl-blog",
          iframe_link: "http://139.159.200.153/",
        },
      },
      {
        path: "/vue",
        name: "Vue",
        component: () => import("@/layout/ifarme-page.vue"),
        meta: {
          roles: [2],
          title: "router.iframe.vue",
          iframe_link: "https://cn.vuejs.org",
        },
      },
      {
        path: "/vue-router",
        component: () => import("@/layout/ifarme-page.vue"),
        meta: {
          title: "router.iframe.vue-router",
          roles: [2],
          iframe_link: "https://router.vuejs.org/",
        },
      },
    ],
  },

  {
    path: "/error",
    name: "NotFound",
    hidden: true,
    meta: { title: "router.404" },
    component: () => import("@/pages/404/404.vue"),
  },
  {
    path: "/somewhere",
    name: "404",
    hidden: true,
    redirect: { name: "NotFound" },
  },
];

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_MODE === "hash"
      ? createWebHashHistory()
      : createWebHistory(),
  routes: [...constantRouter],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
  guard(router);
}

export default router;
