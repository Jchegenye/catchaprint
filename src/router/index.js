import Vue from 'vue'

import VueRouter from 'vue-router'
import store from '../store'

import Landing from '@/views/Landing.vue';
import Explore from '@/views/Explore.vue';
import Cart from '@/components/WooCommerce/Cart.vue';
import Checkout from '@/components/WooCommerce/Checkout.vue';
import Bookmark from '@/components/WooCommerce/Bookmark.vue';
import Page from '@/components/Page/Page.vue';
import Blog from '@/components/Blog/Archive.vue';
import Single from '@/components/Single.vue';
import Search from '@/components/Search.vue';
import PageNotFound from '@/components/PageNotFound.vue';
import App from '@/App'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Landing },
  { path: '/normal/:normal', name: 'normal', component: Explore, meta: App.data().meta },
  { path: '/category/:category', name: 'category', component: Explore, meta: App.data().meta },
  { path: '/tag/:tag', name: 'tag', component: Explore, meta: App.data().meta },
  { path: '/products/shopping_cart', name: 'shopping-cart', component: Cart, meta: App.data().meta },
  { path: '/products/order', name: 'order', component: Checkout, meta: App.data().meta },
  { path: '/products/bookmark', name: 'bookmark', component: Bookmark, meta: App.data().meta },
  // { path: '/post/:slug', component: Single, name: 'post' },
  // { path: '/preview/:id', component: Single, name: 'preview' },
  { path: '/:slug', component: Page, name: 'page' },
  // { path: '/tag/:tag', name: 'tag', component: Blog },
  //{ path: '/blog', name: 'blog', component: Blog },
  //{ path: '/search/', name: 'search', component: Search },
  { path: "*", component: PageNotFound },
]



const router = new VueRouter({
  mode: 'history',
  hashbang: false,
  base: process.env.BASE_URL,
  routes,
  store,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  }
})
//router.push({ name: 'category' });

export default router
