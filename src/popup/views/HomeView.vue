<template>
  <div>
    <div>
      <router-link to="/changelogs/vue">
        Vue latest version:
        {{ getChangeLogs.vue[0].tag_name }}
      </router-link>
    </div>
    <div>
      <router-link to="/changelogs/vuex">
        Vuex latest version:
        {{ getChangeLogs.vuex[0].tag_name }}
      </router-link>
    </div>
    <div>
      <router-link to="/changelogs/vueRouter">
        Vue router latest version:
        {{ getChangeLogs.vueRouter[0].tag_name }}
      </router-link>
    </div>
    <div>
      <router-link to="/changelogs/nuxt">
        Nuxt latest version:
        {{ getChangeLogs.nuxt[0].tag_name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getChangeLogs () {
      return this.$store.state.changelogs.changelogs
    }
  },
  created () {
    browser.alarms.onAlarm.addListener((alarm) => {
      if (alarm.name === 'newVersion') {
        console.log('alarm! the verrsion has been updated', alarm)
      }
    })
  }
}
</script>
