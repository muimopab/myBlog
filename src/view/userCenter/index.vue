<template>
  <div class="userCenter">
    <el-button @click="openDrawer">打开</el-button>

    <el-row>
      <!-- 菜单工作台 -->
      <el-col :span="6"
              class="aside">
        <user-menu></user-menu>
        <!-- <div class="item">
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
        </div> -->
        <vue-aplayer class="vueAplayer"></vue-aplayer>
      </el-col>
      <!-- 页面显示面板 -->
      <el-col :span="18"
              class="main">
        <div class="articleList">
          <article-list></article-list>
        </div>
        <div style="max-width:70%">
          <draw @drawClosed="closeCollapse"
                :drawer="activeName==1"></draw>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Http from "../../api/api"
import articleList from "../../view/article/articleList";
import vueAplayer from "../../components/vueAplayer";
import draw from "./userInfoDeatil"
import userMenu from "./userMenu"
export default {
  data () {
    return {
      str1: "",
      activeName: "",
      userInfo: "",
      str:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id eos in qui mollitia neque, sit, deleniti ea nemo iure quo aut, aliquam quam sequi! Facere numquam iste earum deleniti magnam. Cum, laboriosam voluptates eum aspernatur asperiores ratione animi possimus sapiente delectus quo similique officia, saepe ipsum fuga repellendus doloribus, nisi obcaecati repudiandae explicabo necessitatibus eligendi quidem molestiae pariatur. Exercitationem, excepturi? Amet, praesentium nemo magnam error facilis cupiditate. Deserunt cupiditate necessitatibus voluptatibus laudantium!",
    };
  },
  methods: {
    //   关闭手风琴
    closeCollapse () {
      this.activeName = "";
    },
    openDrawer () {
      this.$nextTick(() => {
        let testIframe2 = document.getElementById('testIframe')
        // console.log(testIframe, testIframe2)
        parent.postMessage({
          type: "openDrawer",
          url: "http://localhost:8080/userCenter",
          data: {
            a: 1, b: 2
          }
        }, '*')
        window.addEventListener('message', (e) => {
          if (e.data.type == "drawerClose") {
          }
        })
      })

    },
    checkUserInfo (userId) {
      let params = {
        userId: userId
      }
      Http.getUserInfo(params).then(res => {
        if (res.code === 200) {
          this.$set(this, "userInfo", res.data)
          res.data
        }
      })
    },
  },
  components: {
    "article-list": articleList,
    "vue-aplayer": vueAplayer,
    "draw": draw,
    "user-menu": userMenu
  },
  created () {
    this.checkUserInfo(1)

  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('message', (e) => {
      })
    })
  }
};
</script>
<style lang="scss">
/deep/.el-input__inner {
  border-width: 3px !important;
}
</style>
<style lang="scss">
.userCenter {
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 25px;
  .aside {
    position: relative;
    float: left;
    padding-right: 25px;
    .vueAplayer {
      position: absolute;
      left: -10px;
      right: 15px;
      bottom: -98px;
      margin: auto;
    }
    .item {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      overflow: hidden;
      .userBox {
        padding-bottom: 10px;
        div {
          box-sizing: content-box;
        }
        .userName {
          height: 32px;
          padding: 10px 0 10px 0;
          color: #606266;
          text-align: center;
          font-weight: 700;
          font-size: 32px;
          line-height: 32px;
          font-family: "Helvetica Neue", Helvetica, "PingFang SC",
            "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
          cursor: pointer;
          &:hover {
            color: var(--purple);
          }
        }
        .userAge {
          height: 20px;
          //   padding: 10px 0 10px 0;

          color: #6c757d;
          text-align: center;
        }
      }
      .collapseBox {
        /deep/.el-collapse-item__header {
          padding: 0 0 0 15px;
        }
        /deep/.el-collapse-item__content {
          max-height: 38vh;
          padding: 0 15px 15px 15px;
          overflow: auto;
        }
      }
    }
  }
  .main {
    float: right;
    padding-left: 25px;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
