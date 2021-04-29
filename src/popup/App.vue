<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('init')
  }
}
</script>

<style lang="scss">
:root {
  width: 400px;
}
</style>
