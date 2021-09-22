<template>
  <div class="articleList">
    <el-row class="searchBox"
            v-toTop="true">
      <el-col :span="4">
        <el-image fit="fill"
                  src="https://iknow-pic.cdn.bcebos.com/3bf33a87e950352a94ed1d895343fbf2b3118ba6?x-bce-process=image/resize,m_lfit,w_600,h_800,limit_1/quality,q_85"></el-image>
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="9"
                  :offset="5">
            <el-button :round="true"
                       :type="sortRules == 'date' ? primary : ''"
                       data-type="date"
                       @click="changeSortRules('date')">按日期排序</el-button>
            <el-button :round="true"
                       :type="sortRules == 'star' ? primary : ''"
                       data-type="star"
                       @click="changeSortRules('star')">按星级排序</el-button>
          </el-col>
          <el-col :span="10"
                  style="padding-left:5px">
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
        <router-link style="height:100%"
                     :to="{ name: 'articleDetails', query: { id: item.articleId } }">
          <div class="title">{{ item.articleTitle }}</div>
          <div class="introduce">{{ item.articleIntroduce }}</div>
          <div class="iconBox">
            <i class="el-icon-user"></i><span>阅读</span>
            <i class="el-icon-chat-dot-square"></i><span>评论</span>
            <i class="el-icon-time"></i><span>{{
              item.createDate
                ? new Date(item.createDate).toLocaleDateString()
                : ""
            }}</span>
          </div>
        </router-link>
      </div>
      <el-pagination background
                     layout="prev, pager, next"
                     :total="total"
                     @current-change="currentChange"
                     hide-on-single-page
                     style="float:left"></el-pagination>
    </section>
    <footer></footer>
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
      primary: "primary",
    };
  },
  watch: {
    total () {
      console.log(this.total);
      new Date().toLocaleDateString;
    },
  },
  methods: {
    search () {
      this.$message({
        type: "error",
        message: "功能尚未开发，敬请期待",
      });
    },
    // 改变排序规则
    changeSortRules (val) {
      console.log(val);
      if (val && val != this.sortRules) {
        this.sortRules = val;
        this.$message({
          type: "warning",
          message: "功能尚未开发，敬请期待",
        });
      }
    },
    getArticleList (pageNum, pageSize) {
      let vm = this;
      let params = {
        pageNum: pageNum,
        pageSize: pageSize,
      };
      Http.getArticleList(params).then((res) => {
        // console.log(res);
        if (res.code == 200) {
          if (res.data) vm.$set(vm, "articleList", res.data);
          if (res.total && res.total != vm.total)
            vm.$set(vm, "total", res.total);
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
.test {
  position: fixed;
  z-index: 100;
  top: 0;
  box-sizing: border-box;
}
.articleList {
  display: flex;
  flex-direction: column;
  height: 100%;
  .searchBox {
    background: #fff;
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
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    .articleItem {
      position: relative;
      display: flex;
      flex: 0 0 32%;
      flex-direction: column;
      height: 32vh;
      margin-bottom: 20px;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      overflow: hidden;
      cursor: pointer;
      &:hover {
        .title {
          color: var(--purple);
        }
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.1);
        transform: translate(-4px, -4px);
        transition: all 0.25s ease-in-out;
      }
      .title {
        flex-shrink: 0;
        padding-bottom: 16px;
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .introduce {
        height: calc(100% - 62px);
        // flex-shrink: 0;
        padding-bottom: 20px;
        font-size: 15px;
        text-indent: 2em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        // -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .iconBox {
        position: absolute;
        right: 5px;
        left: 0;
        bottom: 15px;
        margin: auto;
        text-align: right;
        i {
          padding-right: 3px;
        }
        span {
          margin-right: 10px;
        }
        i,
        span {
          &:hover {
            color: var(--purple);

            + i,
            + span {
              color: var(--purple);
            }
          }
        }
        // border: 1px solid red;
      }
    }
  }
}
</style>
