import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../components/pages/login';
import mainPage from '../components/pages/main';
Vue.use(VueRouter);

const page1 = resolve => require(['../components/pages/page1'], resolve);
// const page1 = () => import('../components/pages/page1')

export default new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/main',
            name: 'main',
            component: mainPage,
            meta: {
                requireAuth: true
            },
            children: [
                {
                    path: '/page1',
                    name: 'page1',
                    component: page1
                }
            ]
        }
    ]
});
