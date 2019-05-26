<template>
    <div class="sr_app">
        <nav-bar></nav-bar>
        <article>
            <router-view/>
        </article>
    </div>
</template>

<script>
  import NavBar from './components/NavBar';

  export default {
    name: 'App',
    components: {NavBar},
    mounted() {
      ConfigManager.load();
      KC3Master.init();
      KC3Meta.init("../../data/");
      KC3Master.loadAbyssalShips("../../data/");
      KC3Master.loadSeasonalShips("../../data/");
      KC3Meta.defaultIcon("../../assets/img/ui/empty.png");
      PlayerManager.init();
      KC3ShipManager.load();
      KC3GearManager.load();
      KC3Database.init( PlayerManager.hq.id );
      RemodelDb.init();
      KC3Translation.execute();
      WhoCallsTheFleetDb.init("../../");
    }
  };
</script>
<style></style>