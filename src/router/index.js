//index.js為用來引入components/pages裡的vue網頁模板檔案用

import Vue from 'vue'
import Router from 'vue-router'


import dashboard from '@/components/pages/dashboard'
import products from '@/components/pages/product'
import login from '@/components/pages/login'
import orders from '@/components/pages/order'
import coupon from '@/components/pages/coupon'
import shop_sim from '@/components/pages/shopsim'

Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '*',
      redirect: 'login',

    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      children: [

        {
          path: 'products',
          name: 'products',
          component: products,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'orders',
          component: orders,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: coupon,
          meta: { requiresAuth: true },
        },
        // {
        //   path: 'shop_sim',
        //   name: 'shop_sim',
        //   component: shop_sim,
        //   meta: { requiresAuth: true },
        // },

      ]
    },
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
      children: [

        {
          path: 'shop_sim',
          name: 'shop_sim',
          component: shop_sim,
        },

      ]
    },
    // {
    //   path: '/products',
    //   name: 'products',
    //   component: products
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})
