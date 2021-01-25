<template>
  <div class="homepage">
    <div class="banner">
      <banner></banner>
      <div>
        <mavon-editor @backText="getText"></mavon-editor>
      </div>
      <div class="markdown-body" v-html="htmlText"></div>
    </div>
  </div>
</template>

<script>
import banner from "./components/banner";
// import showdown from "showdown";
import $mavonEditor from "../../components/mavonEditor";
export default {
  data() {
    return {
      markdownText: "",
      htmlText: "",
    };
  },
  methods: {
    getText(val){
      let {
        articlesTitle,
        articlesTypeCode,
        markdownText,
        articlesContent,
        createDate,
        articlesAuthorId,
      }=val;
      let params={
        articlesTitle,
        articlesTypeCode,
        markdownText,
        articlesContent,
        createDate,
        articlesAuthorId,
      };
      console.log("请求数据",params)
      this.$http.post('blog/test',params).then(res=>{
          console.log(res)
      })
    //   this.htmlText=htmlText;
    //   console.log(val)
    },
  },
  components: {
    "banner": banner,
    "mavon-editor":$mavonEditor
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
  font-family: SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace;
}
img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
}
</style>
