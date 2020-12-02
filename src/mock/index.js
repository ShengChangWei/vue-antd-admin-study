/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-02 16:57:05
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-02 17:30:00
 * @Description: file content
 */
import Mock from 'mockjs';
import '@/mock/user/login';
import '@/mock/user/routes';
// 设置全局延时
Mock.setup({
  timeout: '300-600'
});
