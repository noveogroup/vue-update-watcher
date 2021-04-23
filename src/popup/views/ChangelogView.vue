<template>
  <div>
    <h2>{{ $route.params.package }}</h2>
    <div><router-link to="/">Back</router-link></div>
    <div v-for="changelog in getChangelogs" :key="changelog.id">
      Update id: {{ changelog.id }}
      <div v-html="setMarkdown(changelog.body)"></div>
    </div>
    <div>hi! {{ $route.params.package }}</div>
    <div>get changelogs: {{ getChangelogs }}</div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  computed: {
    getChangelogs () {
      const currPackage = this.$route.params.package
      return this.$store.state.changelogs.changelogs[currPackage]
    }
  },
  methods: {
    setMarkdown: (md) => marked(md)
  }
}
</script>
