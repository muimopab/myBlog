<template>
  <div class="articleList">
    <header></header>
    <section class="articleBox">
      <div
        class="articleItem"
        v-for="(item, index) in articleList"
        :key="index"
      >
        <!-- <router-link :to="{ path: `/articleDetails?id=${item.articleId}`}"> -->
        <router-link :to="{ name: 'articleDetails',query:{id:item.articleId} }">
          <div class="title">{{ item.articleTitle }}</div>
          <div class="introduce">{{ item.articleIntroduce }}</div>
          <div class="iconBox"></div>
        </router-link>
      </div>
    </section>
    <footer>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="currentChange"
        hide-on-single-page
        style="float:right"
      ></el-pagination>
    </footer>
  </div>
</template>

<script>
import Http from "../../api/api";
export default {
  data() {
    return {
      articleList: [],
      total: 0,
    };
  },
  methods: {
    getArticleList(pageNum, pageSize) {
      let params = {
        pageNum: pageNum,
        pageSize: pageSize,
      };
      Http.getArticleList(params).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.articleList = res.data;
          this.total = res.total;
        }
      });
    },
    currentChange(val) {
      this.getArticleList(val, 10);
    },
  },
  created() {
    this.getArticleList(1, 10);
  },
};
</script>

<style lang="scss">
.articleList {
  .articleBox {
    .articleItem {
      display: flex;
      flex-direction: column;
      min-height: 100px;
      max-height: 200px;
      margin-bottom: 20px;
      padding: 35px 25px 25px 25px;
      background: #ebeef5;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      cursor: pointer;
      &:hover {
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.1);
        transform: translate(-4px, -4px);
        transition: all 0.25s ease-in-out;
      }
      .title {
        flex-shrink: 0;
        padding-bottom: 20px;
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .introduce {
        flex-shrink: 1;
        font-size: 15px;
        text-indent: 2em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .iconBox {
        height: 30px;
        // border: 1px solid red;
      }
    }
  }
}
</style>
