<template>
  <div class="test">
    <div class="left">
      <ul @click="activeTab($event)"
          class="group">
        <li class="item"
            v-for="item in tabList"
            :key="item.value"
            :data-value="item.value">
          {{item.label}}
        </li>
      </ul>
    </div>
    <div class="right">
        <div v-for="item in 14" :key="item.value">
            <div>{{item}}</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nam cumque? Quasi commodi dolore temporibus reprehenderit nam cupiditate ipsum illo saepe explicabo nesciunt provident dolorem, aspernatur minus mollitia adipisci earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nam cumque? Quasi commodi dolore temporibus reprehenderit nam cupiditate ipsum illo saepe explicabo nesciunt provident dolorem, aspernatur minus mollitia adipisci earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nam cumque? Quasi commodi dolore temporibus reprehenderit nam cupiditate ipsum illo saepe explicabo nesciunt provident dolorem, aspernatur minus mollitia adipisci earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nam cumque? Quasi commodi dolore temporibus reprehenderit nam cupiditate ipsum illo saepe explicabo nesciunt provident dolorem, aspernatur minus mollitia adipisci earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nam cumque? Quasi commodi dolore temporibus reprehenderit nam cupiditate ipsum illo saepe explicabo nesciunt provident dolorem, aspernatur minus mollitia adipisci earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nam cumque? Quasi commodi dolore temporibus reprehenderit nam cupiditate ipsum illo saepe explicabo nesciunt provident dolorem, aspernatur minus mollitia adipisci earum!</div>
        </div>
    </div>

  </div>
</template>

<script>
import aplayer from "../components/vueAplayer"
export default {
  // components:{
  //     "aplayer":aplayer
  // },
  data () {
    return {
      tabList: [
        {
          label: '菜单一',
          value: 1
        },
        {
          label: '菜单二',
          value: 2
        },
        {
          label: '菜单三',
          value: 3
        }
      ]
    }
  },
  methods: {
    activeTab (e) {
      console.log(e.target.dataset.value)
      console.log(this.$mount('.group'))
    }
  }
}
</script>

<style lang="scss">
@import "public/css/common.scss";
.test {
    display: flex;
    .right{
        flex: 0 1 100%;
        height: 100vh;
        border: 1px solid #000;
        overflow: auto;
    }
  .group {
    // @extend .flex-between;
    width: 300px;
    .item {
      padding: 10px 29px;
      border: 1px solid #eee;
      cursor: pointer;
    }
  }
}
</style>