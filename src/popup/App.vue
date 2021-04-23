<template>
  <div>
    <h1>Vue Release Watcher</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('init')
    browser.browserAction.setBadgeText({ text: '' })
  }
}
</script>

<style lang="scss">
html {
  width: 400px;
  height: 200px;
}

h1, h3 {
  color: #41b883;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

</style>
