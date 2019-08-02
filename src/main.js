// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueKindEditor from 'vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'

Vue.use(VueKindEditor)

var instance = axios.create({
  baseURL:'http://127.0.0.1:3000',
  // timeout:3000,
  // headers:{'X-Custom-Header':'foobar'}
});

Vue.config.productionTip = false
// axios.defaults.headers.post["Content-type"]="application/json";
Vue.use(VueAxios,instance);

Vue.filter("cut",function(value){
  return value.slice(0,50) + "...";
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
