<template>
  <div class="userCenter">
    <el-row>
      <el-col :span="6"
              class="aside">
        <div class="item">
          <div class="userBox shadow-only-bottom">
            <el-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimglf6.nosdn0.126.net%2Fimg%2FUzZjNmZVWEJ1dGVGSVR6L08zc1hUaGdxTWV5WXdvejRyYTBhN1lBeGVkaU1oMkJKK1VIc053PT0.jpg%3FimageView%26thumbnail%3D500x0%26quality%3D96%26stripmeta%3D0%26type%3Djpg&refer=http%3A%2F%2Fimglf6.nosdn0.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615109963&t=db9186de5b5b51bc8f875dbafa5caf45"></el-image>
            <div class="userName">
              muimopab
            </div>
            <div class="userAge">
              码龄：3年
            </div>
          </div>

        </div>
      </el-col>
      <el-col :span="18"
              class="main">
        <div class="articleList">
          <article-list></article-list>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import articleList from "../../view/article/articleList"
export default {
  components: {
    "article-list": articleList
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
  margin: 0 auto;
  padding: 25px;
  .aside {
    float: left;
    padding-right: 25px;
    // border-right: 1px solid var(--cyan);
    .item {
      height: 100vh;
      //   background: linear-gradient(var(--cyan), var(--indigo));
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      overflow: hidden;
      .userBox {
          padding-bottom: 20px;
        //   border-bottom: 1px solid #333;
          div{
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
            &:hover{
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
    }
  }
  .main {
    float: right;
    padding-left: 25px;
    padding-bottom: 50px;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
