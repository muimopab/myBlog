<template>
  <div class="userCenter">
    <el-row>
      <el-col :span="6" class="aside">
        <div class="item"></div>
      </el-col>
      <el-col :span="18" class="main">
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
    components:{
        "article-list":articleList
    }
};
</script>

<style lang="scss">
.userCenter {
  width: 1200px;
  margin: 0 auto;
    padding: 25px;
  .aside {
    float: left;
    padding-right: 25px;
    border-right: 2px solid var(--secondary);
    .item {
      height: 80vh;
      background: linear-gradient(var(--cyan), var(--indigo));
      border-radius: 10px;
    }
  }
  .main {
    float: right;
    padding-left: 25px;
    height: 100vh;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
