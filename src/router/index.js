import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//解决路由重复点击
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

let router = new Router({
    mode: "history",
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        if (from.path == "/") {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
            path: '/',
            name: 'Index',
            component: () =>
                import ('@/pages/index.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ('@/pages/login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ('@/pages/register.vue')
        },
        {
            path: '/pass',
            name: 'Pass',
            component: () =>
                import ('@/components/login/forgetpass.vue')
        },
        {
            path: '/detail',
            name: 'Detail',
            component: () =>
                import ('@/pages/detail.vue'),
            meta: {
                isLogin: true
            }
        },
        {
            path: '/comment',
            name: 'Comment',
            component: () =>
                import ('@/pages/usercomment.vue'),
            meta: {
                isLogin: true
            }
        },
        {
            path: '/category',
            name: 'Category',
            component: () =>
                import ('@/pages/category.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: '/categorylist',
            name: 'Categorylist',
            component: () =>
                import ('@/components/category/categorylist.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: '/huaxian',
            name: 'Huaxian',
            component: () =>
                import ('@/pages/huaxian.vue'),
            redirect: "/huaxian/shaidan/",
            meta: {
                isShow: true
            },
            children: [{
                    path: 'shaidan/',
                    name: 'Shaidan',
                    component: () =>
                        import ('@/components/huaxian/shaidan.vue'),
                    meta: {
                        isShow: true
                    }
                },
                {
                    path: 'specialselect/',
                    name: 'Specialselect',
                    component: () =>
                        import ('@/components/huaxian/specialselect.vue'),
                    meta: {
                        isShow: true
                    }
                },
                {
                    path: 'huayuall/',
                    name: 'Huayuall',
                    component: () =>
                        import ('@/components/huaxian/huayuall.vue'),
                    meta: {
                        isShow: true
                    }
                },
                {
                    path: 'cartoonselect/',
                    name: 'Cartoonselect',
                    component: () =>
                        import ('@/components/huaxian/cartoonselect.vue'),
                    meta: {
                        isShow: true
                    }
                },
            ]
        },
        {
            path: '/shopcar',
            name: 'Shopcar',
            component: () =>
                import ('@/pages/shopcar.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: '/my',
            name: 'My',
            component: () =>
                import ('@/pages/mypage.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: '/setting',
            name: 'Setting',
            component: () =>
                import ('@/components/my/mysetting.vue')
        },
        {
            path: '/person',
            name: 'Person',
            component: () =>
                import ('@/components/my/myperson.vue'),
            meta: {
                isLogin: true
            }
        },
        {
            path: '/order',
            name: 'Order',
            component: () =>
                import ('@/components/shopcar/userorder.vue'),
            meta: {
                isLogin: true
            }
        },
        {
            path: '/manageaddress',
            name: 'Manageaddress',
            component: () =>
                import ('@/components/user/manageaddress.vue')
        },
        {
            path: '/addaddress',
            name: 'Addaddress',
            component: () =>
                import ('@/components/user/addaddress.vue')
        },
        {
            path: '/editaddress',
            name: 'Editaddress',
            component: () =>
                import ('@/components/user/editaddress.vue')
        },
        {
            path: '/date',
            name: 'Date',
            component: () =>
                import ('@/components/shopcar/calendardate.vue')
        },
    ]
});
//必须先登录才能跳转到详情
router.beforeEach((to, from, next) => {
    if (to.meta.isLogin == true) {
        if (localStorage.getItem("user") == undefined) {
            router.push("/login")
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;