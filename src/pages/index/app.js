// // vuex的使用*********************************************************
// import Vuex from 'vuex';
// Vue.use(Vuex);
// const store = new Vuex.Store({
//     modules: {
//         hint: {
//             state: {
//                 isShow: false,
//                 words: ''
//             },
//             mutations: {
//                 showHint: function (state, words) {
//                     state.isShow = true;
//                     state.words = words;
//                     setTimeout(function () {
//                         state.isShow = false;
//                     }, 3000);
//                 }
//             }
//         },
//         superman: {
//             state: {
//                 isShow: false
//             },
//             mutations: {
//                 showSuperman: function (state) {
//                     state.isShow = true;
//                 },
//                 hideSuperman: function (state) {
//                     state.isShow = false;
//                 }
//             }
//         }
//     }
// });
// new Vue({
//     store,
// });
// computed: {
//     isShow () {
//         // 这个分modules，但是superman在state之后
//         return this.$store.state.superman.isShow
//     }
// }
// // 这个不分modules
// this.$store.commit('showHint', 'success');



import '../../common/css/base.less';


import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';





Vue.use(VueRouter);
Vue.use(vueResource);




Vue.config.devtools = true;
// 这个写到ajax文件里
Vue.http.options.xhr = {withCredentials: true};


global.hint = require('../../common/components/hint.vue');
global.superman = require('../../common/components/superman.vue');





import indexRouter from './pages/index/router';
import mineRouter from './pages/mine/router';
import loginRouter from './pages/login/router';
import registerRouter from './pages/register/router';

const router = new VueRouter({
    routes:[
        // require('./pages/index/router')直接这样不可以，会报错
        indexRouter,
        mineRouter,
        loginRouter,
        registerRouter,
        {
            path:'*', redirect:'/index'
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});


const routerMixin = {
    data () {
        return {
            transitionName: 'slide-left',
        }
    },
    watch: {
        $route(to, from) {
            const toTime = to.query.time || 0;
            const fromTime = from.query.time || 0;

            if (parseInt(toTime) < parseInt(fromTime)) {
                this.transitionName = 'slide-right';
            } else {
                this.transitionName = 'slide-left';
            }
        }
    }
};


new Vue({
    router,
    mixins: [routerMixin],
}).$mount('#app');

