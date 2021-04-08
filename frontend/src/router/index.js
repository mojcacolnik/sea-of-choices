import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import UserDetail from '../views/UserDetail.vue'
import Home from '../views/Home.vue'
import ShipDetail from '../views/ShipDetail.vue'
import Ships from '../views/Ships.vue'
import CruiseDetail from '../views/CruiseDetail.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/users/:profileId',
        name: 'UserDetail',
        component:  UserDetail
      },
      {
        path: '/ships',
        name: 'Ships',
        component: Ships
      },
      {
        path: '/ships/:id',
        name: 'ShipDetail',
        component: ShipDetail
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        }
      },
      {
        path: '/cruises/:id',
        name: 'CruiseDetail',
        component: CruiseDetail
      }
    ]
  })
}
