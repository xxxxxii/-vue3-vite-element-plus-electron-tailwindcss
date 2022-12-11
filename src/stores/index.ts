/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-11 01:54:44
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 01:55:33
 * @FilePath: \-vue3-vite-element-plus-electron-tailwindcss\src\stores\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useUserStore } from "@/stores/useUser";
export interface IAppStore {
  userStore: ReturnType<typeof useUserStore>;
}

const appStore: IAppStore = {} as IAppStore;

// 注册store
export const registerStore = () => {
  appStore.userStore = useUserStore();
};

export default appStore;
