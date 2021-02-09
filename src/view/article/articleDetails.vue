<template>
  <div class="articleDetails"
       id="articleDetails">
    <aside class="el-col-5 shadow border-radius-10">
      <div class="userInfo">

        <el-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimglf6.nosdn0.126.net%2Fimg%2FUzZjNmZVWEJ1dGVGSVR6L08zc1hUaGdxTWV5WXdvejRyYTBhN1lBeGVkaU1oMkJKK1VIc053PT0.jpg%3FimageView%26thumbnail%3D500x0%26quality%3D96%26stripmeta%3D0%26type%3Djpg&refer=http%3A%2F%2Fimglf6.nosdn0.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615109963&t=db9186de5b5b51bc8f875dbafa5caf45">

        </el-image>
        <div>
            
        </div>
      </div>

      <div class="anchorBox"
           id="anchorBox">
        <ul @click="jumpAnchor">
          <li v-for="(item, index) in articleTitle"
              :key="index"
              :data-anchor="`_${index}`">
            {{ item }}
          </li>
        </ul>
      </div>

    </aside>
    <article class="el-col-18 shadow border-radius-10">
      <div class="title">{{ article.articleTitle }}</div>
      <ul class="articleBar">
        <li>作者：muimopab</li>
        <li>日期：2021/1/29</li>
        <li>阅读量：23</li>
        <li>收藏：32</li>
        <li>评论：1000</li>
      </ul>
      <div class="introduce"
           v-if="article.articleIntroduce">
        {{ article.articleIntroduce }}
      </div>
      <div class="markdown-body content"
           v-html="article.articleContent"></div>
    </article>
  </div>
</template>

<script>
import Http from "../../api/api";
export default {
  data () {
    return {
      article: [],
      articleTitle: [],
    };
  },

  methods: {
    jumpAnchor (e) {
      let anchorDom = document.getElementById(e.target.dataset.anchor);
      console.log(e.target.dataset.anchor);
      console.log(anchorDom);
      if (anchorDom) {
        anchorDom.scrollIntoView({ behavior: "smooth" });
      }
    },
    // 获取文章中所有标题
    getArticleTitles () {
      for (let i = 0; true; i++) {
        let DOM = document.getElementById(`_${i}`);
        if (!DOM) {
          this.getArticleTitles = null; // 当寻找不到指定元素的时候停止循环，并注销这个方法，否则死循环
          return false;
        }
        let title = DOM.parentElement.innerText;
        this.articleTitle.push(title);
      }
    },
    getArticleDetails (params) {
      Http.getArticleDetails(params)
        .then((res) => {
          if (res.code == 200) {
            this.article = res.data;
          }
        })
        .catch((error) => {
          throw error;
        });
    },
  },
  updated () {
    console.log(1232)
    if (this.getArticleTitles) {
      this.getArticleTitles();
    }
  },
  beforeDestroy () {
    this.articleTitle = [];
  },
  beforeRouteEnter: (from, to, next) => {
    next((vm) => {
      // console.log("route", vm.$route.query.id);
      let params = {
        articleId: vm.$route.query.id,
      };
      vm.getArticleDetails(params);
    });
  },
};
</script>
<style lang="scss" scoped>
.articleDetails {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
  /deep/ .markdown-body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  aside {
    position: relative;
    flex: 0 1 20%;
    height: 100vh;
    margin-right: 20px;
    .anchorBox {
      width: 100%;
      ul {
        display: flex;
        flex-direction: column;
        li:first-child {
          border-radius: 4px 4px 0 0;
        }
        li:last-child {
          border-radius: 0 0 4px 4px;
        }
        li:not(:last-child) {
          border-bottom: 0 !important;
        }
        li {
          cursor: pointer;

          height: 30px;
          padding: 5px;
          border: 1px solid #82394829;
          &:hover {
            background: #82394829;
          }
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  article {
    flex: 1 0 auto;
    box-sizing: border-box;
    padding: 30px;
    .title {
      display: inline-block;
      margin-bottom: 25px;
      padding: 0 35px 10px 0px;
      border-bottom: 3px solid var(--purple);
      font-size: 24px;
      font-weight: 700;
      color: #333;
    }
    .articleBar {
      display: flex;
      align-content: center;
      margin-bottom: 20px;
      > li {
        margin-right: 20px;
      }
    }
    .introduce {
      margin-bottom: 20px;
      color: #999999;
      //   text-indent: 2rem;
      font-size: 14px;
    }
    .content {
    }
  }
}
</style>
