import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import './assets/css/mui.min.css'
import "./assets/css/swiper.min.css"
//公共样式
import './assets/css/common.css'
import './assets/iconfont/iconfont.css'
//首页
import './assets/css/index/index-body.css'
//详情
import './assets/css/detail/detail-header.css'

import store from "./store"
import "./mock/mockindex"
import "./mock/mockserver"

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})