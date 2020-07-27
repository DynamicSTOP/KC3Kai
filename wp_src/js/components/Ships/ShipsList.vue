<template>

    <div class="section kce-ship-table">
        <div class="filters">
            <div class="filter type top">
                <div class="selected" @click="toggleAllTypeFilter">By type:</div>
                <div v-for="f in order" :key="'filter_'+f" @click="toggleTypeFilter(f)"
                     :class="{selected:typeSelected.indexOf(f)!==-1}">{{f}}
                </div>
                <div class="selected" @click="resetTypeFilter">reset</div>
            </div>
            <div class="filter">
                <div class="selected noPointer">Daihatsu:</div>
                <div :class="{selected:dlcFilter===null}" @click="dlcFilter=null">All</div>
                <div :class="{selected:dlcFilter===true}" @click="dlcFilter=true">Can</div>
                <div :class="{selected:dlcFilter===false}" @click="dlcFilter=false">Can't</div>
            </div>
            <div class="filter">
                <div class="selected noPointer">Speed:</div>
                <div :class="{selected:speedFilter===null}" @click="speedFilter=null">All</div>
                <div :class="{selected:speedFilter===false}" @click="speedFilter=false">Slow</div>
                <div :class="{selected:speedFilter===true}" @click="speedFilter=true">Fast</div>
            </div>
            <div class="filter">
                <div class="selected noPointer">Range:</div>
                <div :class="{selected:rangeFilter===null}" @click="rangeFilter=null">All</div>
                <div :class="{selected:rangeFilter===1}" @click="rangeFilter=1">Short</div>
                <div :class="{selected:rangeFilter===2}" @click="rangeFilter=2">Medium</div>
                <div :class="{selected:rangeFilter===3}" @click="rangeFilter=3">Long</div>
                <div :class="{selected:rangeFilter===4}" @click="rangeFilter=4">Very Long</div>
            </div>
            <div class="filter type bottom">
                <div class="selected" @click="toggleAllTypeFilter">By type:</div>
                <div v-for="f in order" :key="'filter_'+f" @click="toggleTypeFilter(f)"
                     :class="{selected:typeSelected.indexOf(f)!==-1}">{{f}}
                </div>
                <div class="selected" @click="resetTypeFilter">reset</div>
            </div>
            <div style="color:#fff;">Ships {{finalShipList.filter(s=>s.show).length}}/{{ships.length}}</div>
        </div>
        <div class="shipTable">
            <div class="shipRow header">
                <div v-for="(column,i) in columns"
                     :class="[column.class,{active:column.sortBy===sortBy}]"
                     @click="setSort(column.sortBy)" :key="'ch_'+i">{{column.text || ''}}
                </div>
            </div>
            <ship-list-row v-for="ship in finalShipList" :class="{hidden:!ship.show,odd:ship.odd}" :num="ship.num"
                           :ship="ship" :key="`s`+ship.rosterId"></ship-list-row>
        </div>
    </div>
</template>

<script>
    import ShipListRow from "./ShipListRow";

    let listener = null;

    const shipTypes = ["DE", "DD", "CL", "CLT", "CA", "CAV",
        "SS", "SSV", "FBB", "BB", "BBV", "CVL", "CV", "CVB",
        "AV", "AS", "AO", "LHA", "AR", "CT"];

    export default {
        name: 'ShipsList',
        components: {ShipListRow},
        data() {
            return {
                rawShips: '',
                ships: [],
                order: shipTypes.slice(),
                typeSelected: shipTypes.slice(),
                sortBy: 'level',
                sortByInverse: -1,
                dlcFilter: null,
                speedFilter: null,
                rangeFilter: null,
                columns: [
                    {class: 'num', text: '#'},
                    {class: 'id', text: 'ID', sortBy: 'rosterId'},
                    {class: 'noHover ship-icon', sortBy: 'masterId'},
                    {class: 'name', sortBy: 'name', text: 'Name'},
                    {class: 'group', sortBy: 'stypen', text: 'Type'},
                    {class: 'lvl', sortBy: 'level', text: 'LvL'},
                    {class: 'morale', sortBy: 'morale', text: ';)'},
                    {class: 'hp', sortBy: 'hp', text: 'HP'},
                    {class: 'fp', sortBy: 'fp', text: 'FP'},
                    {class: 'tp', sortBy: 'tp', text: 'TP'},
                    {class: 'aa', sortBy: 'aa', text: 'AA'},
                    {class: 'ar', sortBy: 'ar', text: 'AR'},
                    {class: 'as', sortBy: 'as', text: 'ASW'},
                    {class: 'ev', sortBy: 'ev', text: 'EV'},
                    {class: 'los', sortBy: 'ls', text: 'LoS'},
                    {class: 'lk', sortBy: 'lk', text: 'LK'},
                    {class: 'night', sortBy: 'night', text: 'Night'},
                    {class: 'slots', sortBy: 'slots', text: 'Slots'},
                    {class: 'slots extra', sortBy: 'ex_item', text: 'Extra'}
                ]
            }
        },
        computed: {
            myShipList() {
                return [].concat(this.ships.map(s => {
                    s.show = this.typeSelected.includes(s.stype);
                    if (this.dlcFilter !== null) {
                        s.show = s.show && (s.daihatsu === this.dlcFilter);
                    }
                    if (this.speedFilter !== null) {
                        s.show = s.show && (s.fast === this.speedFilter);
                    }
                    if (this.rangeFilter !== null) {
                        s.show = s.show && (s.range === this.rangeFilter);
                    }
                    return s;
                }));
            },
            mySortedShipList() {
                return this.myShipList.slice().sort((a, b) => {
                    if (a[this.sortBy] !== "undefined" || b[this.sortBy] !== "undefined") {
                        if (a[this.sortBy] === "undefined") return 1 * this.sortByInverse;
                        if (b[this.sortBy] === "undefined") return -1 * this.sortByInverse;
                        if (this.sortBy === "slots") {
                            // can equip anything
                            if (a.slots.length > 0 && b.slots.length === 0) return -1 * this.sortByInverse;
                            if (a.slots.length <= 0 && b.slots.length > 0) return 1 * this.sortByInverse;
                            // can equip planes
                            if (a.slots[0] > 0 && b.slots[0] <= 0) return -1 * this.sortByInverse;
                            if (a.slots[0] <= 0 && b.slots[0] > 0) return 1 * this.sortByInverse;
                            // amount of planes if the first slot
                            if (a.slots[0] !== b.slots[0]) return (b.slots[0] - a.slots[0]) * this.sortByInverse;
                            // slots amount
                            if (a.slots.length !== b.slots.length) return (b.slots.length - a.slots.length) * this.sortByInverse;
                        } else {
                            let aVal = a[this.sortBy], bVal = b[this.sortBy];
                            if (typeof aVal === "function") {
                                aVal = a[this.sortBy]() || 0;
                                bVal = b[this.sortBy]() || 0;
                            } else if (aVal instanceof Array) {
                                aVal = aVal[0];
                                bVal = bVal[0];
                            }

                            if (typeof aVal === "string" && aVal.localeCompare(bVal) !== 0) {
                                return aVal.localeCompare(bVal) * this.sortByInverse;
                            } else if (aVal !== bVal) {
                                return (aVal - bVal) * this.sortByInverse;
                            }
                        }
                    }
                    //default sort if above failed
                    if (a.level !== b.level) {
                        return b.level - a.level;
                    }
                    if (a.sortno !== b.sortno) {
                        return a.sortno - b.sortno;
                    }
                    return a.rosterId - b.rosterId;
                });
            },
            finalShipList() {
                let odd = true;
                let num = 0;
                return this.mySortedShipList.slice().map(s => {
                    if (s.show) {
                        s.num = ++num;
                        s.odd = odd = !odd;
                    }
                    return s;
                });
            }
        },
        methods: {
            toggleTypeFilter(type) {
                if (this.typeSelected.indexOf(type) === -1) {
                    this.typeSelected.push(type);
                } else {
                    this.typeSelected.splice(this.typeSelected.indexOf(type), 1);
                }
            },
            toggleAllTypeFilter() {
                this.typeSelected = this.order.filter((g) => this.typeSelected.indexOf(g) === -1);
            },
            resetTypeFilter() {
                this.typeSelected = this.order.slice();
            },
            setSort(type) {
                if (typeof type === "undefined") return;
                if (this.sortBy === type) {
                    this.sortByInverse *= -1;
                } else {
                    this.sortBy = type;
                    if (["lvl", "fp", "tp", "ar", "aa", "night", "ev", "as", "hp", "lk", "id", "masterId"].indexOf(type) !== -1) this.sortByInverse = -1;
                    else this.sortByInverse = 1;
                }

            },
            updateShips() {
                if(this.rawShips === localStorage.ships) return;
                this.rawShips = localStorage.ships;
                KC3ShipManager.load();
                this.ships = [];
                for (let i in KC3ShipManager.list) {
                    if (KC3ShipManager.list.hasOwnProperty(i) && i.startsWith('x')) {
                        const ship = KC3ShipManager.list[i];
                        ship.sortno = ship.master().api_sort_id;
                        ship.stypem = ship.master().api_stype;
                        ship.stype = KC3Meta.stype(ship.stypem);
                        ship.stypen = shipTypes.indexOf(ship.stype);
                        ship.night = ship.fp[0] + ship.tp[0];
                        this.ships.push(ship);
                    }
                }
            }
        },
        mounted() {
            console.log('added');
            if (listener) {
                window.removeEventListener('storage', listener);
                listener = false;
                this.rawShips = '';
            }
            listener = this.updateShips.bind(this);
            window.addEventListener('storage', listener);
            listener();
        },
        beforeDestroy() {
            console.log('removed');
            if (listener) {
                window.removeEventListener('storage', listener);
                listener = false;
                this.rawShips = '';
            }
        }
    }
</script>



