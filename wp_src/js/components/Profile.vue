<template>
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
        <div>News Feed</div>
        <div class="table">
            <div v-for="(news,i) in newsfeed.log" :key="`news_`+i" :class="'news_type_'+news.api_type">
                <div>{{new Date(newsfeed.time||0).format("mm/dd HH:MM")}}</div>
                <div>{{news.api_message}}</div>
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
        newsfeed: JSON.parse(localStorage.playerNewsFeed || "{}")
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
      }
    },
    mounted() {
    }
  }
</script>
<style></style>