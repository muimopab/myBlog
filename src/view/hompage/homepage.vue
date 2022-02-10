<template>
  <div class="homepage">
    <div class="banner">
      <banner></banner>
      <div>
          <el-button type="primary" v-auth="['muimopab','123']" @click="show">测 试</el-button>
      </div>
      <div>
        <mavon-editor v-if="isShow" @backText="getText"></mavon-editor>
      </div>
      <div>
        <article-list></article-list>
      </div>
      <div class="markdown-body" v-html="htmlText"></div>
    </div>
  </div>
</template>

<script>
import banner from "./components/banner";
// import showdown from "showdown";
import $mavonEditor from "../../components/mavonEditor";
import Http from "../../api/api";
import articleList from "../article/articleList"
export default {
  data() {
    return {
      markdownText: "",
      htmlText: "",
      isShow: true,
      pageNum: 1,
      pageSize: 10,
    };
  },
  created() {
    let params = {
      pageNum: this.pageNum,
      pageSize: this.pageSize,
    };
    Http.getArticleList(params).then((res) => {
    });
    let obj={a:1,b:2,c:{d:3},e:[4,5,6],f:null,g:undefined,h:''}
    let obj2=this.$utils.deepClone(obj)
  },
  watch: {
    isShow() {
    },
  },
  methods: {
      show(){
      },
    getText(val) {
      let {
        articleTitle,
        articleTypeCode,
        markdownText,
        articleContent,
        createDate,
        articleAuthorId,
      } = val;
      this.htmlText=articleContent
      let params = {
        articleTitle,
        articleTypeCode,
        markdownText,
        articleContent,
        createDate,
        articleAuthorId,
      };
      return
      Http.addArticle(params).then((res) => {
        let vm = this;
        if (res) {
          if (res.msg === "success") {
            this.$message({
              showClose: true,
              message: "添加成功！",
              type: "success",
              duration: 1000,
              onClose: () => {
                vm.$set(vm, "isShow", false);
                vm.$nextTick(() => {
                  vm.$set(vm, "isShow", true);
                });
              },
            });
          } else if (res.msg === "fail") {
            this.$message({
              showClose: true,
              message: "添加失败！",
              type: "error",
            });
          }
        }
      });
    },
  },
  components: {
    "banner": banner,
    "mavon-editor": $mavonEditor,
    "article-list":articleList,
  },
};
</script>

<style lang="scss">
.homepage {
  width: 1000px;
  height: 10000px;
  margin: auto;
  // border: 1px solid #333;
}

img {
  max-width: 100%;
  box-sizing: content-box;
  background-color: #fff;
}
</style>
