import Vue from 'vue'
import Router from 'vue-router'


import dashboard from '@/components/pages/dashboard'
import products from '@/components/pages/product'
import login from '@/components/pages/login'

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
        }

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
