// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
// import VueRouter from 'vue-router';
import './style/normalize.css';
import 'element-ui/lib/theme-default/index.css';
import './style/function.css';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import App from './App';
import store from './store';
import { AxiosPlugin } from './api/http';

import router from './router';

Vue.use(ElementUI);
Vue.use(AxiosPlugin);
// Vue.use(VueRouter);
/* eslint-disable no-new */
var vue = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});

export default vue;
