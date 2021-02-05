<template>
  <div class="articleList">
    <el-row class="searchBox">
      <el-col :span="4">
          <el-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.kuai8.com%2Fattaches%2Fnews%2Fimage%2F20170527%2F201705271004277487.jpg&refer=http%3A%2F%2Fimg.kuai8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615114363&t=75d3bc6a8511ddc1fd494e512e3faa1f"></el-image>
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="9"
                  :offset="5">
            <el-button :round="true"
                       :type="sortRules=='date'?primary:''"
                       data-type="date"
                       @click="changeSortRules('date')">按日期排序</el-button>
            <el-button :round="true"
                       :type="sortRules=='star'?primary:''"
                       data-type="star"
                       @click="changeSortRules('star')">按星级排序</el-button>
          </el-col>
          <el-col :span="10" style="padding-left:5px">
            <el-input placeholder="请输入您想查找的文章关键字"
                      v-model="searchContent"
                      class="searchInput">
              <i slot="suffix"
                 style="cursor: pointer;"
                 class="el-input__icon el-icon-search"
                 @click="search"></i>
            </el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <section class="articleBox">
      <div class="articleItem"
           v-for="(item, index) in articleList"
           :key="index">
        <!-- <router-link :to="{ path: `/articleDetails?id=${item.articleId}`}"> -->
        <router-link :to="{ name: 'articleDetails', query: { id: item.articleId } }">
          <div class="title">{{ item.articleTitle }}</div>
          <div class="introduce">{{ item.articleIntroduce }}</div>
          <div class="iconBox"></div>
        </router-link>
      </div>
    </section>
    <footer>
      <el-pagination background
                     layout="prev, pager, next"
                     :total="total"
                     @current-change="currentChange"
                     hide-on-single-page
                     style="float:left"></el-pagination>
    </footer>
  </div>
</template>

<script>
import Http from "../../api/api";
export default {
  data () {
    return {
      articleList: [],
      total: 0,
      searchContent: "", // 搜索内容
      sortRules: "date", //排序规则
      primary: "primary"
    };
  },
  methods: {
    search () {
      this.$message({
        type: "error",
        message: "功能尚未开发，敬请期待"
      })
    },
    // 改变排序规则
    changeSortRules (val) {
      console.log(val)
      if (val && val != this.sortRules) {
        this.sortRules = val;
        this.$message({
          type: "warning",
          message: "功能尚未开发，敬请期待"
        })
      }

    },
    getArticleList (pageNum, pageSize) {
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
    currentChange (val) {
      this.getArticleList(val, 9);
    },
  },
  created () {
    this.getArticleList(1, 9);
  },
};
</script>

<style lang="scss">
.articleList {
  .searchBox {
    input,
    button {
      border-color: transparent;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }

    display: flex;
    align-items: center;
    min-height: 130px;
    margin-bottom: 20px;
    // border-bottom: 1px solid var(--cyan);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 16px;
    border-radius: 10px;
    .searchInput {
      input {
        // background: var(--light);
        border-radius: 50px;
      }
    }
  }
  .articleBox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // background: var(--purple);
    // background: linear-gradient(var(--cyan), var(--purple));
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    .articleItem {
      flex-direction: column;
      width: 32%;
      display: flex;
      height: 45vh;
      margin-bottom: 20px;
      padding: 35px 25px 25px 25px;
      background: #fff;
      //   border: 1px solid var(--purple);
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      overflow: hidden;
      cursor: pointer;
      &:hover {
        .title {
            color: var(--purple);
        }
        // box-shadow: 0 4px 4px var(--yellow);
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.1);
        // box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.1);
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
        flex-shrink: 0;
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
