/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-16 17:17:23
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 17:51:20
 * @FilePath: \vue3-element-admin\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./styles/style.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";

import router from "./router/index";
import plugins from "./plugins/index";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

const app = createApp(App);

app.use(router);
app.use(plugins);
app.use(createPinia().use(piniaPersist));
app.mount("#app");
