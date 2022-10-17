/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:23:43
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-06 00:35:57
 * @FilePath: \yl-admin\vite\alias.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from "path";
import { AliasOptions } from "vite";

const Alias = {
  "@": path.resolve(__dirname, "../src"),
  "#": path.resolve(__dirname, "../types"),
} as AliasOptions;

export default Alias;
