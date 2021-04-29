<template>
  <div>
    <div class="container">
      <el-row>
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
                getLatestVersions.vuex.error ||
                getLatestVersions.vuex.isUpdated
                  ? 'danger'
                  : 'primary'
              "
              plain
            >
              Vuex:
              {{ getLatestVersions.vuex.version }}
              <span v-if="getLatestVersions.vuex.isUpdated"> (new) </span>
            </el-button>
          </router-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <router-link to="/changelogs/vueRouter">
            <el-button
              size="mini"
              :type="
                getLatestVersions.vueRouter.error ||
                getLatestVersions.vueRouter.isUpdated
                  ? 'danger'
                  : 'primary'"
              plain>
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
            >
              Nuxt:
              {{ getLatestVersions.nuxt.version }}
              <span v-if="getLatestVersions.nuxt.isUpdated"> (new) </span>
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getChangeLogs () {
      return this.$store.state.changelogs.changelogs
    },
    getLatestVersions () {
      return this.$store.state.changelogs.latestVersions
    }
  },
  created () {
    browser.alarms.onAlarm.addListener((alarm) => {
      if (alarm.name === 'newVersion') {
        console.log('alarm! the version has been updated', alarm)
        this.$store.dispatch('refreshStorage')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 1rem;
  .el-row {
    margin-bottom: 0.5rem;

    .el-button {
      min-width: 9rem;
      font-size: 90%;
    }
  }
}
</style>
