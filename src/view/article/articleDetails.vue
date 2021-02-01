<template>
  <div class="articleDetails" id="articleDetails">
    <aside>
      <!-- <router-link to="#_0">1</router-link> -->
      <div class="anchorBox" id="anchorBox">
        <ul>
          <li v-for="(item, index) in articleTitle" :key="index" v-anchor>
            <a :href="`#_${index - 1}`" :data-anchor="`_${index - 1}`">{{
              item
            }}</a>
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

  mounted() {
    this.$nextTick(() => {
      for (let i = 0; true; i++) {
        let DOM = document.getElementById(`_${i}`);
        if (!DOM) return false;
        let title = DOM.parentElement.innerText;
        this.articleTitle.push(title);
        console.log(this.articleTitle);
        // console.log(dom);
      }
    });
  },
  methods: {
    getArticleDetails(params) {
      Http.getArticleDetails(params)
        .then((res) => {
          if (res.code == 200) {
            this.article = res.data;
            if (this.article.articleContent) {
              this.addAnchor(this.article.articleContent);
            }
          }
        })
        .catch((error) => {
          throw error;
        });
    },
    addAnchor(str) {
      console.log("输入的内容", typeof str);
      // <h1><a id="_0"></a>一级标题</h1>
      // <h2><a id="_1"></a>二级标题</h2>
      // <h3><a id="_2"></a>三级标题</h3>
      // <h4><a id="_3"></a>四级标题</h4>
      // <h5><a id="_4"></a>五级标题</h5>
      // <h6><a id="_5"></a>六级标题</h6>
    },
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
  $asideWidth: 300px;
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
    float: left;
    width: $asideWidth;
    height: 10000px;
    .anchorBox {
      // border: 1px solid #82394829;
      position: fixed;
      top: 100px;
      width: $asideWidth - 100px;
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
    height: 10000px;
    padding: 30px;
    margin-left: $asideWidth;
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
