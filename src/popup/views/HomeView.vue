<template>
  <div class="home-view">
    <el-row class="home-view__row">
      <el-col :span="10">
        <router-link to="/changelogs/vue">
          <el-button
            size="mini"
            :type="
              getLatestVersions.vue.error || getLatestVersions.vue.isUpdated
                ? 'danger'
                : 'primary'
            "
            plain
            class="home-view__button"
          >
            Vue:
            {{ getLatestVersions.vue.version }}
            <span v-if="getLatestVersions.vue.isUpdated"> (new) </span>
          </el-button>
        </router-link>
      </el-col>
      <el-col :span="10">
        <router-link to="/changelogs/vuex">
          <el-button
            size="mini"
            :type="
              getLatestVersions.vuex.error || getLatestVersions.vuex.isUpdated
                ? 'danger'
                : 'primary'
            "
            plain
            class="home-view__button"
          >
            Vuex:
            {{ getLatestVersions.vuex.version }}
            <span v-if="getLatestVersions.vuex.isUpdated"> (new) </span>
          </el-button>
        </router-link>
      </el-col>
    </el-row>
    <el-row class="home-view__row">
      <el-col :span="10">
        <router-link to="/changelogs/vueRouter">
          <el-button
            size="mini"
            :type="
              getLatestVersions.vueRouter.error ||
              getLatestVersions.vueRouter.isUpdated
                ? 'danger'
                : 'primary'
            "
            plain
            class="home-view__button"
          >
            Vue Router:
            {{ getLatestVersions.vueRouter.version }}
            <span v-if="getLatestVersions.vueRouter.isUpdated"> (new) </span>
          </el-button>
        </router-link>
      </el-col>
      <el-col :span="10">
        <router-link to="/changelogs/nuxt">
          <el-button
            size="mini"
            :type="
              getLatestVersions.nuxt.error || getLatestVersions.nuxt.isUpdated
                ? 'danger'
                : 'primary'
            "
            plain
            class="home-view__button"
          >
            Nuxt:
            {{ getLatestVersions.nuxt.version }}
            <span v-if="getLatestVersions.nuxt.isUpdated"> (new) </span>
          </el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    getLatestVersions () {
      return this.$store.state.latestVersions
    }
  }
}
</script>

<style lang="scss" scoped>
.home-view {
  &__row {
    margin-bottom: 0.5rem;
  }

  &__button {
    min-width: 9rem;
    font-size: 90%;
  }
}
</style>
