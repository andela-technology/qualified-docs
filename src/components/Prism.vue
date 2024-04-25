<template>
  <pre
    :class="className"
  ><code ref="code" :class="className" v-html="html"></code></pre>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "Prism",
  props: {
    code: String,
    language: String,
  },
  data() {
    return {};
  },
  computed: {
    className() {
      return `language-${this.language || "javascript"}`;
    },
    html() {
      return Prism.highlight(
        this.code,
        Prism.languages[this.language],
        this.language,
      );
    },
  },
  methods: {
    highlight() {
      this.$nextTick(() => Prism.highlightElement(this.$refs.code));
    },
  },
  components: {},
};
</script>

<style lang="stylus"></style>
