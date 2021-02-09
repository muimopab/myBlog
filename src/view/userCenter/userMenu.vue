<template>
  <div class="item">
    <div class="userBox shadow-only-bottom">
      <el-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimglf6.nosdn0.126.net%2Fimg%2FUzZjNmZVWEJ1dGVGSVR6L08zc1hUaGdxTWV5WXdvejRyYTBhN1lBeGVkaU1oMkJKK1VIc053PT0.jpg%3FimageView%26thumbnail%3D500x0%26quality%3D96%26stripmeta%3D0%26type%3Djpg&refer=http%3A%2F%2Fimglf6.nosdn0.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615109963&t=db9186de5b5b51bc8f875dbafa5caf45"></el-image>
      <div class="userName"
           @click="checkUserInfo">
        muimopab
      </div>
      <div class="userAge">
        码龄：3年
      </div>
    </div>

    <el-collapse class="collapseBox"
                 v-model="activeName"
                 accordion>
      <el-collapse-item class="collapseItem"
                        title="个人信息"
                        name="1">
        <div>{{ str }} <span style="color:blue;cursor:pointer">查看更多</span> </div>
      </el-collapse-item>
      <el-collapse-item title="博客分类"
                        name="2">
        <div>{{ str }}</div>
      </el-collapse-item>
      <el-collapse-item title="消息"
                        name="3">
        <div>{{ str }}</div>
      </el-collapse-item>
      <el-collapse-item title="设置"
                        name="4">
        <div>{{ str }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Http from "../../api/api"
export default {
  data () {
    return {
      str: "123",
      activeName: ""
    }
  },
  methods: {
    checkUserInfo () {
      let params = {
        userId: userId
      }
      Http.getUserInfo(params).then(res => {
        if (res.code === 200) {
          this.$set(this, "userInfo", res.data)
          res.data
        }
      })
    }
  }
}
</script>

<style>
</style>