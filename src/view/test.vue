<template>
  <div class="test">
    <iframe id="testIframe"
            ref="testIframe"
            src="http://localhost:8080/userCenter"
            width="100%"
            height="100%"
            frameborder="0"></iframe>
    <el-drawer :visible.sync="drawerData.visible"
               size="100%"
               @close="close">
      123
      <!-- <iframe id="testIframe"
              ref="testIframe"
              src="http://localhost:8080/userCenter"
              width="100%"
              height="100%"
              frameborder="0"></iframe> -->
    </el-drawer>
  </div>
</template>

<script>
import drag from '@/components/drag/drag.vue'
export default {
  components: {
    // drag
  },
  porps: {
    type: String,
    default: ''
  },
  data () {
    return {
      drawerData: {
        visible: false
      },
    }
  },
  created () {
    window.addEventListener('message', (e) => {
      if (e.data.type == 'openDrawer')
        this.drawerData.visible = true
    })
    let obj = {
      a: 1,
      b: 2,
      c: 3
    }
    if (obj ?.d) {
      console.log(true)
    } else {
      console.log(false)
    }
    let value = 123
    if((value??'')!=''){
        console.log(1)
    }else{
        console.log(2)
    }
  },
  methods: {
    close () {
      parent.postMessage({
        type: "drawerClose"
      }, "*")
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>
