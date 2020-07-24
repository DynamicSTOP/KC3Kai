<template>
    <div>
        <div>
            <div>Profile</div>
            <div class="table">
                <div>
                    <div>ID</div>
                    <div>{{PlayerManager.hq.id}}</div>
                </div>
                <div>
                    <div>Name</div>
                    <div>{{"haha! no." || PlayerManager.hq.name}}</div>
                </div>
                <div>
                    <div>Comment</div>
                    <div>{{PlayerManager.hq.desc}}</div>
                </div>
                <div>
                    <div>Server</div>
                    <div>{{server.name}}</div>
                </div>
                <div>
                    <div>Rank</div>
                    <div>{{PlayerManager.hq.rank}}</div>
                </div>
                <div>
                    <div>Level</div>
                    <div>{{PlayerManager.hq.level}}</div>
                </div>
                <div>
                    <div>Exp</div>
                    <div>{{exp}}</div>
                </div>
            </div>
        </div>
        <div>
            <div>News Feed</div>
            <div class="table">
                <div v-for="(news,i) in newsfeed.log" :key="`news_`+i" :class="'news_type_'+news.api_type">
                    <div>{{new Date(newsfeed.time||0).format("mm/dd HH:MM")}}</div>
                    <div>{{news.api_message}}</div>
                </div>
            </div>
        </div>
        <div>
            <div>Statistics Feed</div>
            <div>
                <div>Sortie</div>
                <div class="table">
                    <div>
                        <div>rate</div>
                        <div>{{statistics.sortie.rate}}</div>
                    </div>
                    <div>
                        <div>win</div>
                        <div>{{statistics.sortie.win}}</div>
                    </div>
                    <div>
                        <div>lose</div>
                        <div>{{statistics.sortie.lose}}</div>
                    </div>
                </div>

                <div>PVP</div>
                <div class="table">
                    <div>
                        <div>rate</div>
                        <div>{{statistics.pvp.rate}}</div>
                    </div>
                    <div>
                        <div>win</div>
                        <div>{{statistics.pvp.win}}</div>
                    </div>
                    <div>
                        <div>lose</div>
                        <div>{{statistics.pvp.lose}}</div>
                    </div>
                </div>
                <div>Expeditions</div>
                <div class="table">
                    <div>
                        <div>rate</div>
                        <div>{{statistics.exped.rate}}</div>
                    </div>
                    <div>
                        <div>win</div>
                        <div>{{statistics.exped.win}}</div>
                    </div>
                    <div>
                        <div>lose</div>
                        <div>{{statistics.exped.lose}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>Ranking</div>
            <div class="table">
                <div>
                    <div>Points earned in the previous interval</div>
                    <div>{{rank_prev}}</div>
                </div>
                <div>
                    <div>Current interval tracking start time</div>
                    <div>{{rank_cuttime}}</div>
                </div>
                <div>
                    <div>Cut-off EXP from the last interval</div>
                    <div>{{rank_cutval}}</div>
                </div>
                <div>
                    <div>Accumulated points from this interval</div>
                    <div>{{rank_current}}</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        PlayerManager: window.PlayerManager,
        newsfeed: JSON.parse(localStorage.playerNewsFeed || "{}"),
        statistics: JSON.parse(localStorage.statistics || "{}")
      };
    },
    computed: {
      server() {
        return (new KC3Server()).setNum(self.PlayerManager.hq.server)
      },
      exp() {
        if (self.PlayerManager.hq.exp)
          return "{0} / {1}".format(
            KC3Meta.formatNumber(self.PlayerManager.hq.exp[3]),
            KC3Meta.formatNumber(self.PlayerManager.hq.exp[1] + self.PlayerManager.hq.exp[3]));
      },
      rank_prev() {
        return self.PlayerManager.hq.rankPtLastCount.toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        });
      },
      rank_cuttime() {
        return !self.PlayerManager.hq.rankPtLastTimestamp ? "?"
          : new Date(self.PlayerManager.hq.rankPtLastTimestamp).format("yyyy-mm-dd HH:MM:ss");
      },
      rank_cutval() {
        return KC3Meta.formatNumber(PlayerManager.hq.rankPtCutoff);
      },
      rank_current() {
        console.log(self.PlayerManager.hq.getRankPoints())
        return self.PlayerManager.hq.getRankPoints().toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        });
      }
    },
    mounted() {
    }
  }
</script>
<style></style>