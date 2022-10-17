export const menusConfig = [
  {
    title: "router.home",
    icon: "House",
    path: "/home",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        type: "index",
        title: "router.dashboard",
        icon: "Odometer",
        meta: {
          role: [1],
        },
      },
      {
        path: "/user",
        name: "user",
        title: "router.user",
        icon: "User",
        meta: {
          role: [1],
        },
      },
    ],
  },
  {
    title: "router.articleMarger",
    path: "/articleMarger",
    icon: "Notebook",
    children: [
      {
        path: "/article",
        name: "article",
        title: "router.article",
        icon: "Tickets",
        meta: {
          role: [1],
        },
      },
      {
        path: "/articleList",
        name: "articleList",
        title: "router.articleList",
        icon: "Memo",
        meta: {
          role: [1],
        },
      },
    ],
  },
  {
    title: "router.postcard",
    icon: "Brush",
    path: "/postcard",
    children: [
      {
        path: "/md",
        name: "md",
        icon: "Notification",
        title: "router.markdown",
        meta: {
          role: [2],
        },
      },
    ],
  },
  {
    title: "router.test",
    path: "/test",
    icon: "DocumentRemove",
    meta: {
      role: [2],
    },
  },
  {
    title: "router.ifarme",
    icon: "",
    path: "/ifarme",
    meta: {
      role: [2],
    },
    children: [
      {
        path: "/iframe/vue",
        name: "iframe.vue",
        title: "router.iframe.vue",
        meta: {
          role: [2],
          iframe_link: "https://cn.vuejs.org",
        },
      },
      {
        path: "/iframe/echarts",
        name: "iframe.echarts",
        title: "router.iframe.echarts",
        meta: {
          role: [2],
          iframe_link: "https://echarts.apache.org/zh/index.html",
        },
      },
    ],
  },
];
