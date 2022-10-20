<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-16 17:17:23
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-18 14:01:52
 * @FilePath: \vue3-element-admin\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Vue 3 + Vite + Electron + Tailwindcss

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

# yl admin 框架，基本功能以实现，国际化，暗黑主题切换,路由角色匹配

## 使用技术栈 taillwindcss + element-plus + electron + vite

#

# 使用方法

1. 安装 pnpm i
2. 运行 不使用 electron: pnpm dev , 使用 electron: pnpm electron:serve
3. 打包：
   打包 web
   pnpm build
   打包 electron：
   1. electron 不支持 history 路由，需要改为 hash 模式打包才能正常跳转路由
   2. 根目录需要设置为"./" vite-config 中 base:"./" 即可
   3. 根目录创建 dist_electron 文件夹
   4. pnpm electron:build 运行打包

# 更新日志

## 2022-8-29

1. 登录页面更新（页面退出后重定向）
2. nprogress 顶部路由跳转加载条（/src/progress/index.js 中配置）
   nprogress 样式：全局样式可设置：

```
#nprogress .bar {
     background: #0276f3 !important;
}
```

## 2022-9-23

1. 增加了 electron 支持 可以 编译桌面端，可以热更新，yarn electron:serve 运行服务，默认运行在 3000 端口，如需修改，在 env.development VITE_PORT = 3000 ,package.json 中 scripts -> "electron": "wait-on tcp:3000 && electron ." 自行修改端口即可。
2. 修复页面暗色模式下，颜色色差问题。

## 2022-9-26

1. 完善 electron 打包配置，执行打包命令自动生成各种图标，在 dist_electron/build 文件夹下，可以自行设置，修改 package.json ->scripts->electron:generate-icons 即可
   ![](mdImage/2022-09-26-21-47-58.png)
1. 优化菜单 之前只能使用 element plus 的图标库，而且是全部引入的 element 图标，目前自动引入图标，可以使用更多的图标，// https://icones.netlify.app/ 网站上的图标都可使用

## 2022-10-06

1. 更新文件统一类型
2. 更新项目 logo
3. 去除多余代码
