/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-02 16:23:46
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-02 16:34:44
 * @Description: file content
 */

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
console.log(BASE_URL);
module.exports = {
  LOGIN: `${BASE_URL}/login`,
  ROUTES: `${BASE_URL}/routes`
};
