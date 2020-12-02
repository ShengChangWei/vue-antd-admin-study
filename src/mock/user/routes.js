/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-02 17:27:42
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-02 17:27:47
 * @Description: file content
 */
import Mock from 'mockjs';

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/routes`, 'get', () => {
  const result = {};
  result.code = 0;
  result.data = [{
    router: 'root',
    children: [
      {
        router: 'dashboard',
        children: ['workplace', 'analysis']
      },
      {
        router: 'form',
        children: ['basicForm', 'stepForm', 'advanceForm']
      },
      {
        router: 'basicForm',
        name: '验权表单',
        icon: 'file-excel',
        authority: 'form'
      }
    ]
  }];
  return result;
});
