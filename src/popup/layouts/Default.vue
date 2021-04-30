<template>
  <div class="default-layout">
    <h1 class="default-layout__header">Vue Release Watcher</h1>
    <img
      class="default-layout__logo"
      width="60"
      heihgt="60"
      src="@/assets/logo.png"
    />
    <router-view />
    <el-button
      @click="
        $route.name === 'Settings' ? $router.go(-1) : $router.push('Settings')
      "
      class="default-layout__settings"
      size="mini"
      type="info"
      plain
      :icon="
        $route.name === 'Settings' ? 'el-icon-arrow-left' : 'el-icon-setting'"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

.default-layout {
  &__header {
    color: $--color-primary;
  }
  &__logo {
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>
