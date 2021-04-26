<template>
  <div>
    <div class="is-flex container is-size-7 mr-6">
      <div class="column">
        <router-link to="/changelogs/vue">
          Vue:
          {{ getChangeLogs.vue[0].tag_name }}
          <span class="has-text-danger has-background-danger-light" v-if="getLatestVersions.vue.isUpdated">
            New!
          </span>
        </router-link>
        <br />
        <router-link to="/changelogs/vuex">
          Vuex:
          {{ getChangeLogs.vuex[0].tag_name }}
          <span class="has-text-danger has-background-danger-light" v-if="getLatestVersions.vuex.isUpdated">
            New!
          </span>
        </router-link>
      </div>
      <div class="column">
        <router-link to="/changelogs/vueRouter">
          <b-icon
            icon="home"
            size="is-medium"
            v-if="getLatestVersions.vueRouter.isUpdated"
          ></b-icon>
          Vue Router:
          {{ getChangeLogs.vueRouter[0].tag_name }}
          <span
            class="has-text-danger has-background-danger-light"
            v-if="getLatestVersions.vueRouter.isUpdated"
          >
            New!
          </span>
        </router-link>
        <br />
        <router-link to="/changelogs/nuxt">
          Nuxt:
          {{ getChangeLogs.nuxt[0].tag_name }}
          <span class="has-text-danger has-background-danger-light" v-if="getLatestVersions.nuxt.isUpdated">
            New!
          </span>
        </router-link>
      </div>
    </div>
    <img
      class="vue-logo"
      width="60"
      heihgt="60"
      src="@/assets/logo.png"
      alt=""
    />
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
        console.log('alarm! the verrsion has been updated', alarm)
        this.$store.dispatch('refreshStorage')
      }
    })
  }
}
</script>

<style scoped>
.vue-logo {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
