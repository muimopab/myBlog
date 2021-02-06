<template>
  <div>
    <!-- <vue-aplayer :music="audio[0]" :list="audio"  :showLrc="true"></vue-aplayer> -->
    
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="70" width=100% height=86 src="//music.163.com/outchain/player?type=2&id=1391211269&auto=0&height=66"></iframe>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
import "../../public/player/祖堅正慶 - 天つ風 ~白虎征魂戦~.mp3"
export default {
  data() {
    return {
      audio: [
        {
          title: "天つ風 ~白虎征魂戦~.mp3",
          artist: "祖堅正慶",
          src:"../../public/player/祖堅正慶 - 天つ風 ~白虎征魂戦~.mp3",
          pic:"",
          showLrc: "[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh",
        },
      ],
    };
  },
  components: {
    // "vue-aplayer": aplayer,
  },
};
</script>

<style>

</style>
