import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/sr_player_profile',
      name: 'sr_player_profile',
      component: require('@/js/components/Player/Profile').default
    },
    {
      path: '/sr_ships_shipsList',
      name: 'sr_ships_shipsList',
      component: require('@/js/components/Ships/ShipsList').default
    },
    {
      path: '/dummy',
      name: 'sr_dummy',
      component: require('@/js/components/Dummy').default
    },
    {
      path: '*',
      redirect: '/sr_player_profile'
    }
  ]
})
