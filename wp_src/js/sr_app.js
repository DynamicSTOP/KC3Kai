import Vue from 'vue';
import App from '@/js/App';
import router from '@/js/router';
import '@/scss/sr_app';
Vue.config.devtools = true;

ConfigManager.load();
KC3Master.init();
RemodelDb.init();
WhoCallsTheFleetDb.init("../../../../");
KC3Meta.init("../../../../data/");
KC3Master.loadAbyssalShips("../../../../data/");
KC3Meta.defaultIcon("../../../../assets/img/ui/empty.png");
KC3Meta.loadQuotes();
PlayerManager.init();
PlayerManager.loadConsumables();
KC3ShipManager.load();
KC3GearManager.load();
KC3SortieManager.load();
KC3Database.init();
KC3Translation.execute();
KC3QuestSync.init();

new Vue({
  components: {App},
  template: '<App/>',
  router
}).$mount('#sr_app');
