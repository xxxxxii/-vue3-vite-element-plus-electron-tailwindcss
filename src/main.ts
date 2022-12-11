/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 17:17:23
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 22:24:39
 * @FilePath: \vue3-element-admin\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./styles/style.scss";
import "./styles/github-markdown.scss";
import "element-plus/theme-chalk/dark/css-vars.css";

import App from "./App.vue";

import router, { setupRouter } from "./router/index";
import plugins from "./plugins/index";
import { registerStore } from "./stores";
import pinia from "@/stores/store";
import { useUserStore } from "@/stores/useUser";

async function bootstrap() {
  const app = createApp(App);
  app.use(pinia);
  app.use(plugins);
  // app.use(router);
  setupRouter(app);
  // registerStore();
  let jwt = (sessionStorage.getItem("user") as string) || "";
  if (jwt) {
    let token = null;
    try {
      token = JSON.parse(jwt).token;
    } catch (e) {
      console.log("%c The user's JWT is error", "color:red");
    }
    console.log("222222");
    // !!token && useUserStore().setUser({ role: [1, 2] });
  }

  console.log(useUserStore().routers);
  await router.isReady();
  app.mount("#app");
}

// permission control
void bootstrap();
