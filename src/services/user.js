/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-02 16:23:24
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-02 16:31:04
 * @Description: file content
 */
import { LOGIN, ROUTES } from './api';
import { request, METHOD, removeAuthorization } from '@/utils/request';

export async function login(name, password) {
  return request(LOGIN, METHOD.POST, {
    name: name,
    password: password
  });
}

export async function getRoutesConfig() {
  return request(ROUTES, METHOD.GET);
}
