<template>
  <div class="homepage">
    <div class="banner">
      <banner></banner>
      <div>
        <mavon-editor v-if="isShow" @backText="getText"></mavon-editor>
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
      console.log(res);
    });
  },
  watch: {
    isShow() {
      console.log(this.isShow, "isShow");
    },
  },
  methods: {
    getText(val) {
      let {
        articlesTitle,
        articlesTypeCode,
        markdownText,
        articlesContent,
        createDate,
        articlesAuthorId,
      } = val;
      let params = {
        articlesTitle,
        articlesTypeCode,
        markdownText,
        articlesContent,
        createDate,
        articlesAuthorId,
      };
      console.log("请求数据", params);
      Http.addArticle(params).then((res) => {
        console.log(res);
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
    banner: banner,
    "mavon-editor": $mavonEditor,
  },
};
</script>

<style lang="scss">
.homepage {
  width: 1000px;
  height: 10000px;
  margin: auto;
  border: 1px solid #333;
}
pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
}
img {
  max-width: 100%;
  box-sizing: content-box;
  background-color: #fff;
}
</style>
