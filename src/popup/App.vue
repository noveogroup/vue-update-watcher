<template>
  <div class="p-3">
    <h1 class="is-size-4 has-text-weight-semibold">Vue Release Watcher</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('init')
  }
}
</script>

<style>
:root {
  width: 400px;
  height: 110px;
}

h1, h3 {
  color: #41b883;
}

</style>
