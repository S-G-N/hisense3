import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//epg
import launcher from 'components/epg/launcherPanel/launcherPanel';
import live from 'components/epg/livePanel/livePanel';
import movie from 'components/epg/moviePanel/moviePanel';
import variety from 'components/epg/varietyPanel/varietyPanel';
import drama from 'components/epg/dramaPanel/dramaPanel';
//user
import login from 'components/user/login/login';
import register from 'components/user/register/register';
import account from 'components/user/account/account';
// account
import baseInfo from 'components/user/baseInfo/baseInfo';
import watchHistory from 'components/user/watchHistory/watchHistory';
import servicePlan from 'components/user/servicePlan/servicePlan';

// 引入需要打包的外部样式
import 'common/stylus/index.styl';

// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)
// 全局注册
Vue.use(VueRouter);
Vue.use(VueResource);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
// const routes = [
//     // epg
//     {path: '/epg/launcher', component: launcher},
//     {path: '/epg/live', component: live},
//     {path: '/epg/movie', component: movie},
//     {path: '/epg/variety', component: variety},
//     {path: '/epg/drama', component: drama},
//     // user
//     {path: '/user/login', component: login},
//     {path: '/user/register', component: register},
//     {path: '/user/account', component: account},


    // { path: '/',
    //     components: {
    //         default: launcher,
    //         launcher:launcher,
    //         live: live,
    //         movie: movie,
    //         variety:variety,
    //         drama:drama,
    //         //user
    //         login: login,
    //         register: register,
    //         account: account
    //     }
    // }

// ];
const routes = [


            {path: '/epg/launcher', component: launcher},
            {path: '/epg/live', component: live},
            {path: '/epg/movie', component: movie},
            {path: '/epg/variety', component: variety},
            {path: '/epg/drama', component: drama},

            {path: '/user/login', component: login},
            {path: '/user/register', component: register},
            {
                path: '/user/account',
                component: account,
                children:[
                    {path: '/user/account/baseInfo', component: baseInfo},
                    {path: '/user/account/watchHistory', component: watchHistory},
                    {path: '/user/account/servicePlan', component: servicePlan}
                ]
            }


]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
/* eslint-disable no-new */
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

router.push('/epg/launcher');
// router.push('/user/account/baseInfo');
