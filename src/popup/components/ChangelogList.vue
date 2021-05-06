<template>
<div>
  <el-collapse v-model="activeNames" class="collapse__link">
    <el-collapse-item
      :name="changelog.id"
      v-for="changelog in getChangelogs"
      :key="changelog.id"
    >
      <template slot="title">
        <el-button
          @click="openExternalLink(changelog.html_url)"
          size="mini"
          icon="el-icon-link"
          class="collapse__link"
        ></el-button>
        {{ changelog.tag_name }}
      </template>
      <Markdown :file="changelog.body" />
    </el-collapse-item>
  </el-collapse>
  </div>
</template>

<script>
import Markdown from './Markdown.vue'
export default {
  components: { Markdown },
  data () {
    return {
      isOpen: 0,
      activeNames: []
    }
  },
  computed: {
    getChangelogs () {
      const currPackage = this.$route.params.package
      return this.$store.state.changelogs.releases[currPackage]
    }
  },
  methods: {
    openExternalLink (link) {
      window.open(link, '_blank').focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse {
  margin-bottom: 1rem;

  &__link {
    margin-right: 1rem;
  }
}
</style>
