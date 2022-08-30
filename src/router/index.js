import { createRouter, createWebHashHistory } from 'vue-router'
// import home from '../components/Home/Home.vue'
const index = () => import('../views/Index/index.vue')
const login = () => import('../views/SignIn/sigIn.vue')

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/index',
    name: 'index',
    component: index
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to, from, next) => {
  // to是要去的路由地址,from是现在的路由地址,next这个就是比较重要了是否通过的；
  // 判断当前路由是否需要进行权限控制
  if (to.path === '/login') {
    // 权限控制的具体规则
    next() // 放行
  } else {
    const tokenStr = localStorage.getItem('token')
    console.log(tokenStr)
    if (!tokenStr || tokenStr === 'undefined') {
      next('/login')
    }
    // next({name:'guanyu'})
  }
  next()
})

export default router
