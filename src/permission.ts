/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-18 20:49:53
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-19 19:35:11
 * @FilePath: \vue3-element-admin\src\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "./router";
import { nprogressStart, nprogressClose } from "@/hooks/useNporgress";

import pinia from "@/stores/store";
import { useUserStore } from "@/stores/useUser";

// 路由白名单，不需要登陆即可使用
const whiteList = ["/login", "/index"];

router.beforeEach(async (to, from, next) => {
  const useUser = useUserStore(pinia);
  const { token } = storeToRefs(useUser);
  console.log(useUser);
  // start progress bar
  nprogressStart();
  // set page title
  //   document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in

  let hasToken = useUser.getToken;
  console.log(hasToken);
  if (hasToken) {
    console.log(to, from);

    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
      nprogressClose(); // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      console.log(to, from);
      // determine whether the user has obtained his permission roles through getInfo
      let roles = useUser.roles;
      const hasRoles = roles.length > 0;

      if (hasRoles) {
        router.addRoute({
          path: "/:w+",
          name: "*",
          component: () => import("@/pages/404/404.vue"),
        });
        next();
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          //   const { roles } = await store.dispatch("user/getInfo");

          // generate accessible routes map based on roles
          //   const accessRoutes = await store.dispatch(
          //     "permission/generateRoutes",
          //     roles
          //   );

          // dynamically add accessible routes
          //   router.addRoutes(accessRoutes);

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
        } catch (error) {
          // remove token and go to login page to re-login
          //   await store.dispatch("user/resetToken");
          ElMessage.error(error || "Has Error");
          next(`/login?redirect=${to.path}`);
          nprogressClose();
        }
      }
    }
  } else {
    /* has no token*/

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

router.afterEach(() => {
  // finish progress bar
  nprogressClose();
});
