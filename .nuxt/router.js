import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ede9c88 = () => interopDefault(import('../pages/create-event.vue' /* webpackChunkName: "pages/create-event" */))
const _f5f0673a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2793de7c = () => interopDefault(import('../pages/live-data.vue' /* webpackChunkName: "pages/live-data" */))
const _4eaf6f7a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6f3cf8b8 = () => interopDefault(import('../pages/my-event.vue' /* webpackChunkName: "pages/my-event" */))
const _1113f28d = () => interopDefault(import('../pages/nft.vue' /* webpackChunkName: "pages/nft" */))
const _49de28a1 = () => interopDefault(import('../pages/setting.vue' /* webpackChunkName: "pages/setting" */))
const _6e954ccb = () => interopDefault(import('../pages/ticket.vue' /* webpackChunkName: "pages/ticket" */))
const _060c867a = () => interopDefault(import('../pages/ticket-detail.vue' /* webpackChunkName: "pages/ticket-detail" */))
const _cc820ad8 = () => interopDefault(import('../pages/verification-email/_verification.vue' /* webpackChunkName: "pages/verification-email/_verification" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/create-event",
    component: _6ede9c88,
    name: "create-event___en"
  }, {
    path: "/es",
    component: _f5f0673a,
    name: "index___es"
  }, {
    path: "/live-data",
    component: _2793de7c,
    name: "live-data___en"
  }, {
    path: "/login",
    component: _4eaf6f7a,
    name: "login___en"
  }, {
    path: "/my-event",
    component: _6f3cf8b8,
    name: "my-event___en"
  }, {
    path: "/nft",
    component: _1113f28d,
    name: "nft___en"
  }, {
    path: "/setting",
    component: _49de28a1,
    name: "setting___en"
  }, {
    path: "/ticket",
    component: _6e954ccb,
    name: "ticket___en"
  }, {
    path: "/ticket-detail",
    component: _060c867a,
    name: "ticket-detail___en"
  }, {
    path: "/es/create-event",
    component: _6ede9c88,
    name: "create-event___es"
  }, {
    path: "/es/live-data",
    component: _2793de7c,
    name: "live-data___es"
  }, {
    path: "/es/login",
    component: _4eaf6f7a,
    name: "login___es"
  }, {
    path: "/es/my-event",
    component: _6f3cf8b8,
    name: "my-event___es"
  }, {
    path: "/es/nft",
    component: _1113f28d,
    name: "nft___es"
  }, {
    path: "/es/setting",
    component: _49de28a1,
    name: "setting___es"
  }, {
    path: "/es/ticket",
    component: _6e954ccb,
    name: "ticket___es"
  }, {
    path: "/es/ticket-detail",
    component: _060c867a,
    name: "ticket-detail___es"
  }, {
    path: "/es/verification-email/:verification?",
    component: _cc820ad8,
    name: "verification-email-verification___es"
  }, {
    path: "/verification-email/:verification?",
    component: _cc820ad8,
    name: "verification-email-verification___en"
  }, {
    path: "/",
    component: _f5f0673a,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
