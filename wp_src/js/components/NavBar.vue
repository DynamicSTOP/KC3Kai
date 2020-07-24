<template>
    <nav class="navbar">
        <div class="navbar--menu" :class="{active: $route.name.startsWith('sr_player')}">
            <span>Player</span>
            <div class="navbar--submenu">
                <router-link class="navbar--item" :to="{name:'sr_player_profile'}" tag="div">Profile</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Screenshots</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Consumables</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Experience</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Showcase</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Ledger</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Data Backup</router-link>
            </div>
        </div>
        <div class="navbar--menu" :class="{active: $route.name.startsWith('sr_ships')}">
            <span>Ships</span>
            <div class="navbar--submenu">
                <router-link class="navbar--item" :to="{name:'sr_ships_shipsList'}" tag="div">Ship List</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Construction</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">LSC</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Docking</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Leveling</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Badge</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Blueprints</router-link>
            </div>
        </div>
        <div class="navbar--menu">
            <span>Equipment</span>
            <div class="navbar--submenu">
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Equipment List</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Crafting</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Aircraft</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Akashi</router-link>
            </div>
        </div>
        <div class="navbar--menu">
            <span>Fleets</span>
            <div class="navbar--submenu">
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Manager</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Locking</router-link>
            </div>
        </div>
        <div class="navbar--menu">
            <span>Quests</span>
            <div class="navbar--submenu">
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Flowchart</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Required Ships</router-link>
            </div>
        </div>
        <div class="navbar--menu">
            <span>Battles</span>
            <div class="navbar--submenu">
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Maps</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Events</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Encounters</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">PvP History</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Drop Record</router-link>
            </div>
        </div>
        <div class="navbar--menu">
            <span>Expeditions</span>
            <div class="navbar--submenu">
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">History</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Scorer</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Table</router-link>
            </div>
        </div>
        <div class="navbar--menu">
            <span>Library</span>
            <div class="navbar--submenu">
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Updates</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Ships</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Equipment</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Gunfits</router-link>
            </div>
        </div>
        <div class="navbar--menu">
            <span>Dev</span>
            <div class="navbar--submenu">
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Logs</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Translations</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Quotes</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Icons</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Maps</router-link>
                <router-link class="navbar--item" :to="{name:'sr_dummy'}" tag="div">Playground</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'SRNavbar'
    }
</script>
