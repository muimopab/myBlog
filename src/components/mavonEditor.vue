<template>
  <div>
    <mavon-editor
      v-model="markdownText"
      @change="changeEvent"
    ></mavon-editor>
    <el-button @click="backText">点我</el-button>
  </div>
</template>

<script>
import utils from "../utils/utils";
export default {
  data() {
    return {
      markdownText: "",
      htmlText: "",
      changeEvent: null,
    };
  },
  methods: {
    backText() {
      this.$emit("backText", {
        markdownText: this.markdownText,
        htmlText: this.htmlText,
      });
    },
    getMarkdownText(val, rander) {
      console.log(rander);
      this.htmlText = rander;
    },
  },
  beforeMount() {
    this.changeEvent = utils.debounce(this.getMarkdownText, 3000);
  },
};
</script>

<style></style>
