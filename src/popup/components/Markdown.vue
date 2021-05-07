<template>
  <div
    ref="markdown"
    v-html="setMarkdown(file)"
  ></div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    file: {
      type: String,
      default: ''
    }
  },
  mounted () {
    for (const link of this.$refs.markdown.getElementsByTagName('a')) {
      link.setAttribute('target', '_blank')
    }
  },
  methods: {
    setMarkdown: (md) => marked(md)
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/globals.scss";

a {
  color: $--color-primary;
}
</style>
