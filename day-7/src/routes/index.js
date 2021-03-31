import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import UsersList from '@/views/UsersList.vue'
import NotFound from '@/views/NotFound.vue'
import ArticleList from '@/views/ArticleList.vue'
import UsersDetail from '@/views/UsersDetail.vue'
import Settings from '@/views/Settings.vue'
import settingsRoute from '@/routes/settingsRoute'
import Login from '@/views/Login.vue'
import store from '@/store'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users-list',
    name: 'usersList',
    component: UsersList,
  },
  {
    path: '/user-detail/:userId',
    name: 'usersDetail',
    component: UsersDetail,
  },
  {
    path: '/article-list',
    name: 'ArticleList',
    component: ArticleList,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    redirect: { name: 'accountSettings' },
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isLoggedIn']) {
        next()
      } else {
        next({ name: 'login' })
      }
    },
    children: settingsRoute,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    name: 'pageNotFound',
    component: NotFound,
  },
]

const router = new Router({
  mode: 'history',
  routes: routes,
})

// router.beforeEach((to, from, next) => {
//   if (store.getters['auth/isLoggedIn'] || to.name === 'login') {
//     next()
//   } else {
//     next({ name: 'login' })
//   }
// })
export default router
