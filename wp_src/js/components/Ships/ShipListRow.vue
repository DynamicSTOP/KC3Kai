<template>
    <div class="shipRow">
        <div class="num">{{num||""}}</div>
        <div class="id">{{ship.rosterId}}</div>
        <div class="ship-icon"><img :src="ship.shipIcon()"></div>
        <div class="name">{{ship.name()}}</div>
        <div class="group">{{ship.stype}}</div>
        <div class="lvl" :class="lvlClass">{{ship.level}}</div>
        <div class="lvl" :class="{high: ship.morale>49}">{{ship.morale}}</div>
        <div class="hp">{{ship.hp[0]}}</div>
        <div class="fp" :class="{max:ship.firepower>=ship.fp[1]}">{{ship.firepower || ""}}</div>
        <div class="tp" :class="{max:ship.torpedo>0 && ship.torpedo>=ship.tp[1]}">{{ship.torpedo || ""}}</div>
        <div class="aa" :class="{max:ship.antiair>0 && ship.antiair>=ship.aa[1]}">{{ship.antiair || ""}}</div>
        <div class="ar" :class="{max:ship.armor>=ship.ar[1]}">{{ship.armor}}</div>
        <div class="as">{{ship.antisub || ""}}</div>
        <div class="ev">{{ship.evasion}}</div>
        <div class="los">{{ship.levelofsight}}</div>
        <div class="lk" :class="{max:ship.lk[0]>=50,half:ship.lk[0]>=40}">{{ship.lk[0]}}</div>
        <div class="night">{{ship.night}}</div>
        <div class="slots">
            <span class="slot" v-for="(slot, i) in shipSlots()" :key="`s${ship.rosterId}_s${i}`">{{ slot ||''}}</span>
        </div>
        <div class="slots extra">
            <span class="slot extra" v-if="ship.ex_item !== 0"></span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['ship', 'num'],
        data() {
            return {}
        },
        name: "ShipListRow",
        computed: {
            avatarClass() {
                return `ship${this.ship.masterId}`;
            },
            lvlClass() {
                if (this.ship.lvl >= 100) {
                    return "kce-ship-level-x";
                } else if (this.ship.lvl >= 80) {
                    return "kce-ship-level-g";
                } else if (this.ship.lvl >= 50) {
                    return "kce-ship-level-b";
                }
                return "";
            },
        },
        methods: {
            shipSlots(){
                return this.ship.slots.slice(0,this.ship.slotnum);
            }
        }
    }
</script>
