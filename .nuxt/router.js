import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d4ff15d = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _78c3dbd2 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _c0203254 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _3cb859d6 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _28da1cd4 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _518117a0 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _23829d23 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5d4ff15d,
    children: [{
      path: "",
      component: _78c3dbd2,
      name: "home"
    }, {
      path: "/login",
      component: _c0203254,
      name: "login"
    }, {
      path: "/register",
      component: _c0203254,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _3cb859d6,
      name: "profile"
    }, {
      path: "/settings",
      component: _28da1cd4,
      name: "settings"
    }, {
      path: "/editor",
      component: _518117a0,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _23829d23,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
