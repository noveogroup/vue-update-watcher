<template>
  <div>
    <div class="columns is-centered">
      <h2 class="column is-size-5 has-text-weight-semibold is-capitalizede">
        {{ packageNames[$route.params.package] }}
      </h2>
    </div>
    <div><router-link to="/">Back</router-link></div>
    <b-collapse
      class="card my-2"
      :open="isOpen === index"
      @open="isOpen = index"
      v-for="(changelog, index) in getChangelogs"
      :key="changelog.id"
    >
      <template #trigger>
        <div class="block is-flex is-justify-content-space-between">
          <b-button
            :label="changelog.tag_name"
            style="min-width: 100px"
            type="is-normal"
            size="is-small"
            @click="changelog.isOpen = !changelog.isOpen"
          />
          <b-button
            @click="openExternalLink(changelog.html_url)"
            class="is-ghost"
            >Link</b-button
          >
        </div>
      </template>
      <div
        class="card-content content is-size-7"
        ref="markdown"
        v-html="setMarkdown(changelog.body)"
      ></div>
    </b-collapse>
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
      }
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
    markdownRefs.map(markdownEl => {
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
