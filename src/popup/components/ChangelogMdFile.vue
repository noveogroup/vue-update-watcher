<template>
  <div class="md-file">
    <el-divider class="md-file__divider" />
    <Markdown :file="getChangelogMdFile" />
  </div>
</template>

<script>
import Markdown from './Markdown'

export default {
  components: {
    Markdown
  },
  computed: {
    getChangelogMdFile () {
      const currPackage = this.$route.params.package
      return atob(
        this.$store.state.changelogMdFiles[currPackage].content
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.md-file {
  &__divider {
    margin: 0;
  }
}
</style>
