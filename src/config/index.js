/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-02 14:15:01
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-02 16:21:00
 * @Description: file content
 */
const deepMerge = require('deepmerge');
const _config = require('./config');
const { setting } = require('./default');
const config = deepMerge(setting, _config);

module.exports = config;
