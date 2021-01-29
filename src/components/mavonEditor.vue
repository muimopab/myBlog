<template>
  <div>
    <div>
      <el-input
        placeholder="请输入文章标题哦~"
        v-model="formData.title"
        class="input-with-select"
        maxlength="50"
        show-word-limit
        clearable
      >
        <el-select
          v-model="formData.articleTypeCode"
          slot="prepend"
          placeholder="请选择"
          style="width:100px"
        >
          <el-option label="技术类" value="1"></el-option>
          <el-option label="生活类" value="2"></el-option>
        </el-select>
        <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
      </el-input>
    </div>
    <div>
      <el-input
        type="textarea"
        placeholder="请输入描述来介绍您的文章~"
        v-model="formData.introduce"
        maxlength="500"
        show-word-limit
      >
      </el-input>
    </div>
    <mavon-editor
      v-model="formData.markdownText"
      @change="changeEvent"
      :toolbars="toolbars"
    ></mavon-editor>
    <div class="btn_box">
      <el-button @click="backText" size="medium">保存草稿</el-button>
      <el-button @click="upload" type="primary" size="medium">上传</el-button>
    </div>
  </div>
</template>

<script>
import utils from "../utils/utils";
import Http from "../api/api";
export default {
  data() {
    return {
      formData: {
        title: "",
        introduce: "",
        articleTypeCode: "1",
        markdownText: "",
        htmlText: "",
      },
      title: "",
      introduce: "",
      articleTypeCode: "1",
      markdownText: "",
      htmlText: "",
      changeEvent: null,
      // 工具栏显示
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    };
  },
  methods: {
    // 将数据传递给父组件
    backText() {
      // let author = localStorage.getItem("user");
      let authorId = localStorage.getItem("userId");
      let createDate = new Date().getTime();
      this.$emit("backText", {
        articleTitle: this.formData.title,
        articleTypeCode: this.formData.articleTypeCode,
        markdownText: this.formData.markdownText,
        articleContent: this.formData.htmlText,
        createDate:this.formData.date,
        articleAuthorId: null,
        articleIntroduce: this.formData.introduce,
      });
    },
    // 直接调用接口将数据传给后台
    upload() {
      this.formData.date=new Date().getTime();
      let params={
        articleTitle: this.formData.title,
        articleTypeCode: this.formData.articleTypeCode,
        markdownText: this.formData.markdownText,
        articleContent: this.formData.htmlText,
        createDate:this.formData.date,
        articleAuthorId: null,
        articleIntroduce: this.formData.introduce,
      };
      console.log(params)
      // return false;
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
               this.$nextTick(()=>{
                 this.$forceUpdate()
               })
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
    getMarkdownText(val, rander) {
      // console.log(rander);
      this.formData.htmlText = rander;
    },
  },
  beforeMount() {
    this.changeEvent = utils.debounce(this.getMarkdownText, 3000);
  },
  beforeDestroy() {
    console.log("组件销毁");
  },
};
</script>

<style>
.btn_box {
  padding: 16px 0 16px 0;
  text-align: center;
}
</style>
