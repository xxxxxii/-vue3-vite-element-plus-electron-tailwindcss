/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-17 20:50:30
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 20:50:39
 * @FilePath: \vue3-element-admin\src\hooks\useNporgress.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";

//全局进度条的配置
NProgress.configure({
  easing: "ease", // 动画方式
  speed: 1000, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 更改启动时使用的最小百分比
  parent: "body", //指定进度条的父容器
});
// 打开进度条
export const nprogressStart = () => {
  NProgress.start();
};

// 关闭进度条
export const nprogressClose = () => {
  NProgress.done();
};
