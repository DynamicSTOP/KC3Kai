import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sr_profile',
      component: require('@/js/components/Profile').default
    },
    {
      path: '/dummy',
      name: 'sr_dummy',
      component: require('@/js/components/Dummy').default
    },
    {
      path: '*',
      redirect: '/' 
    }
  ]
})
