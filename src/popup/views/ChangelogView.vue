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
    <el-switch
      v-model="viewSwitch"
      active-text="CHANGELOG.md"
      inactive-text="Releases"
      inactive-color="#DCDFE6"
      active-color="#DCDFE6"
      class="changelog-view__switch"
    />
    <ChangelogMdFile v-if="viewSwitch" />
    <ChangelogList v-else />
  </div>
</template>

<script>
import ChangelogList from '@/popup/components/ChangelogList'
import ChangelogMdFile from '@/popup/components/ChangelogMdFile'

export default {
  components: {
    ChangelogList,
    ChangelogMdFile
  },
  data () {
    return {
      packageNames: Object.freeze({
        vue: 'Vue',
        vueRouter: 'Vue Router',
        vuex: 'Vuex',
        nuxt: 'Nuxt'
      }),
      viewSwitch: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

.changelog-view {
  &__header {
    margin: 0rem 0;
  }
  &__header-text {
    color: $--color-primary;
    font-size: 200%;
    margin-left: 1rem;
  }
  &__switch {
    margin: 1rem 0;
  }
}
</style>
