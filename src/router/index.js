/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-02 13:56:52
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-02 15:40:25
 * @Description: file content
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views//login/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];
const router = new VueRouter({
  routes
});

export default router;
