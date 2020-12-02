/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-02 15:50:06
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-02 15:55:05
 * @Description: file content
 */
import config from '@/config';
export default {
  namespaced: true,
  state: {
    ...config
  },
  mutations: {
    setLang(state, lang) {
      state.lang = lang;
    }
  }
};
