<template>
  <div class="articleDetails" id="articleDetails">
    <aside>
      <!-- <router-link to="#_0">1</router-link> -->
      <div class="anchorBox" id="anchorBox">
        <ul @click="jumpAnchor">
          <li
            v-for="(item, index) in articleTitle"
            :key="index"
            :data-anchor="`_${index}`"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </aside>
    <article>
      <div class="title">{{ article.articleTitle }}</div>
      <ul class="articleBar">
        <li>作者：muimopab</li>
        <li>日期：2021/1/29</li>
        <li>阅读量：23</li>
        <li>收藏：32</li>
        <li>评论：1000</li>
      </ul>
      <div class="introduce" v-if="article.articleIntroduce">
        {{ article.articleIntroduce }}
      </div>
      <div class="markdown-body content" v-html="article.articleContent"></div>
    </article>
  </div>
</template>

<script>
import Http from "../../api/api";
export default {
  data() {
    return {
      article: [],
      articleTitle: [],
    };
  },

  methods: {
    jumpAnchor(e) {
      let anchorDom = document.getElementById(e.target.dataset.anchor);
      console.log(e.target.dataset.anchor);
      console.log(anchorDom);
      if (anchorDom) {
        anchorDom.scrollIntoView({ behavior: "smooth" });
      }
    },
    // 获取文章中所有标题
    getArticleTitles() {
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
    getArticleDetails(params) {
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
  updated() {
    console.log(1232)
    if (this.getArticleTitles) {
      this.getArticleTitles();
    }
  },
  beforeDestroy(){
    this.articleTitle=[];
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
  // $asideWidth: 1200px;
  width: 1200px;
  margin: 0 auto;
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
    float: right;
    width: calc(100% - 61.8%);
    height: 10000px;
    border: 1px solid red;
    box-sizing: border-box;
    .anchorBox {
      // border: 1px solid #82394829;
      position: fixed;
      top: 100px;
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
    box-sizing: border-box;
    height: 10000px;
    padding: 30px;
    width: 61.8%;
    // border: 1px solid red;
    .title {
      margin-bottom: 30px;
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
      text-indent: 2rem;
      font-size: 14px;
    }
    .content {
    }
  }
}
</style>
