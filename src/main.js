/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-02 13:56:52
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-02 16:56:37
 * @Description: file content
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import './theme/index.less';
import '@/mock';
Vue.config.productionTip = false;
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
