<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-02 13:56:52
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-02 16:03:06
 * @Description: file content
-->
<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>

</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'app',
  data() {
    return {
      locale: {}
    };
  },
  computed: {
    ...mapState('setting', ['lang'])
  },
  watch: {
    lang(val) {
      this.setLanguage(val);
    }
  },
  methods: {
    setLanguage(lang) {
      switch (lang) {
        case 'CN':
          this.locale = require('ant-design-vue/es/locale-provider/zh_CN').default;
          break;
        case 'HK':
          this.locale = require('ant-design-vue/es/locale-provider/zh_TW').default;
          break;
        case 'US':
        default:
          this.locale = require('ant-design-vue/es/locale-provider/en_US').default;
          break;
      }
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
