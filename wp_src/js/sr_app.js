import Vue from 'vue';
import App from '@/js/App';
import router from '@/js/router';
import '@/scss/sr_app';

new Vue({
  components: {App},
  template: '<App/>',
  router
}).$mount('#sr_app');
