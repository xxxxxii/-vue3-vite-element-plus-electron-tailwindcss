/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-18 21:21:53
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-18 21:22:13
 * @FilePath: \vue3-element-admin\src\stores\store.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
const pinia = createPinia().use(piniaPersist);
export default pinia;
