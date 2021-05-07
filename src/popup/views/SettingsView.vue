
<template>
  <div class="settings">
    <div class="settings__title">Settings</div>
    <div>
      Request interval:
      {{settings.requestInterval}} Minutes
      <el-slider
        v-model="settings.requestInterval"
        show-stops
        :step="5"
        :min="5"
        :max="60"
        class="settings__request-interval"
      ></el-slider>
    </div>
    <div>
      Notifications:
      <el-select
        v-model="notificationsObj"
        size="mini"
        class="settings__notifications"
      >
        <el-option
          v-for="(option, i) in notificationOptions"
          :key="i"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
    </div>
    <!-- <div>
      Dark mode:
      <el-switch v-model="settings.darkMode" class="settings__dark-mode">
      </el-switch>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      settings: {
        requestInterval: Number,
        darkMode: Boolean,
        notifications: Boolean,
        silentMode: Boolean
      },
      notificationOptions: Object.freeze([
        {
          value: JSON.stringify({
            silentMode: false,
            notifications: false
          }),
          label: 'No notifications'
        },
        {
          value: JSON.stringify({
            silentMode: true,
            notifications: true
          }),
          label: 'Silent'
        },
        {
          value: JSON.stringify({
            silentMode: false,
            notifications: true
          }),
          label: 'On'
        }
      ])
    }
  },
  created () {
    this.settings = this.$store.state.settings
  },
  computed: {
    notificationsObj: {
      get: function () {
        return JSON.stringify({
          silentMode: this.settings.silentMode,
          notifications: this.settings.notifications
        })
      },
      set: function (newValue) {
        const obj = JSON.parse(newValue)
        this.settings.notifications = obj.notifications
        this.settings.silentMode = obj.silentMode
      }
    }
  },
  watch: {
    settings: {
      handler: function () {
        this.$store.dispatch('setSettings', this.settings)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  margin-bottom: 2rem;

  &__request-interval,
  &__notifications,
  &__dark-mode {
    margin: 0.5rem 1rem;
    display: block;
  }

  &__title {
    font-size: 200%;
    margin-bottom: 1rem;
  }
}
</style>
