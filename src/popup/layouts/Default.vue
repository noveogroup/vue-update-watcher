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
    <footer class="default-layout__footer">
      <el-button
        @click="
          $route.name === 'Settings'
            ? $router.go(-1)
            : $router.push('/settings')
        "
        class="default-layout__settings"
        size="mini"
        type="info"
        plain
        :icon="
          $route.name === 'Settings' ? 'el-icon-arrow-left' : 'el-icon-setting'
        "
      />
      <span class="default-layout__credits"
        >Made by
        <a href="https://noveogroup.com/" target="_blank" class="default-layout__credits--link">Noveo</a></span
      >
    </footer>
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
  &__settings {
    margin-top: 0.5rem;
  }
  &__footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  &__credits {
    font-size: 85%;
    &--link {
      text-decoration: none;
      color: $--color-primary;
    }
  }
}
</style>
