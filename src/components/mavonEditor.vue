<template>
  <div>
    <div>
      <el-input
        placeholder="请输入文章标题哦~"
        v-model="title"
        class="input-with-select"
        style="margin-bottom:10px"
        maxlength="50"
        show-word-limit
      >
        <el-select
          v-model="articlesTypeCode"
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
    <mavon-editor
      v-model="markdownText"
      @change="changeEvent"
      :toolbars="toolbars"
    ></mavon-editor>
    <div class="btn_box">
      <el-button @click="backText" size="medium">保存草稿</el-button>
      <el-button @click="backText" type="primary" size="medium">上传</el-button>
    </div>
  </div>
</template>

<script>
import utils from "../utils/utils";
export default {
  data() {
    return {
      title: "",
      articlesTypeCode: "",
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
    backText() {
      // let author = localStorage.getItem("user");
      let authorId = localStorage.getItem("userId");
      let createDate = new Date().getTime();
      this.$emit("backText", {
        articlesTitle: this.title,
        articlesTypeCode: this.articlesTypeCode,
        markdownText: this.markdownText,
        articlesContent: this.htmlText,
        createDate: createDate,
        articlesAuthorId: authorId,
      });
    },
    getMarkdownText(val, rander) {
      // console.log(rander);
      this.htmlText = rander;
    },
  },
  beforeMount() {
    this.changeEvent = utils.debounce(this.getMarkdownText, 3000);
  },
};
</script>

<style>
.btn_box {
  padding: 16px 0 16px 0;
  text-align: center;
}
</style>
