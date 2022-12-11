/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-11 05:13:53
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-11 17:08:59
 * @FilePath: \-vue3-vite-element-plus-electron-tailwindcss\src\types\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface Meta {
  title?: string;
  icon?: string;
  roles?: any[];
  redirect?: any;
  needCache?: boolean;
  fixed?: boolean;
}
export interface MenuProps {
  path?: string;
  name?: string;
  redirect?: any;
  hidden?: boolean;
  component?: any;
  meta?: Meta | any;
  children?: Array<MenuProps>;
}
