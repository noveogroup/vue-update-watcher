<template>
  <div class="changelog-view">
    <div class="changelog-view__header" justify="center" align="bottom">
      <router-link to="/"
        ><el-button
          size="mini"
          class="changelog-view__back"
          icon="el-icon-arrow-left"
      /></router-link>
      <span class="changelog-view__header-text">
        {{ packageNames[$route.params.package] }}
      </span>
    </div>
    <el-collapse v-model="activeNames" class="changelog-view__collapse">
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
            class="changelog-view__collapse-button"
            ></el-button
          >
          {{ changelog.tag_name }}
        </template>
        <div
          class="changelog-view__markdown"
          ref="markdown"
          v-html="setMarkdown(changelog.body)"
        ></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return {
      isOpen: 0,
      packageNames: {
        vue: 'Vue',
        vueRouter: 'Vue Router',
        vuex: 'Vuex',
        nuxt: 'Nuxt'
      },
      activeNames: []
    }
  },
  computed: {
    getChangelogs () {
      const currPackage = this.$route.params.package
      return this.$store.state.changelogs.changelogs[currPackage]
    }
  },
  mounted () {
    const markdownRefs = this.$refs.markdown
    markdownRefs.map((markdownEl) => {
      for (const link of markdownEl.getElementsByTagName('a')) {
        link.setAttribute('target', '_blank')
      }
    })
  },
  methods: {
    setMarkdown: (md) => marked(md),
    openExternalLink (link) {
      window.open(link, '_blank').focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/globals.scss';

.changelog-view {
  &__header {
    margin: 1rem 0;
    display: flex;
    align-content: flex-end;
    align-items: flex-end;
  }
  &__header-text {
    color: $--color-primary;
    font-size: 200%;
    margin-left: 1rem;
  }
  &__collapse {
    margin-bottom: 1rem;
  }
  &__collapse-button {
    margin-right: 1rem;
  }
}
</style>
