<template>
  <div class="default-layout">
    <h1 class="default-layout__header">Vue Release Watcher</h1>
    <router-view />
    <img
      class="default-layout__logo"
      width="60"
      heihgt="60"
      src="@/assets/logo.png"
    />
  </div>
</template>

<style lang="scss" scoped>
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
