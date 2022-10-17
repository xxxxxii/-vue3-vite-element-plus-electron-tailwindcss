/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:23:43
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-05 19:57:38
 * @FilePath: \yl-admin\vite\util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import _ from "lodash";

export function parseEnv(env: Record<string, any>): ImportMetaEnv {
  const envs: any = _.cloneDeep(env);

  Object.entries(env).forEach(([key, value]) => {
    if (value == "true" || value == "false")
      envs[key] = value == "true" ? true : false;
    else if (/^\d+$/.test(value)) envs[key] = Number(value);
    else if (value == "null") envs[key] = null;
    else if (value == "undefined") envs[key] = undefined;
  });
  return envs;
}
