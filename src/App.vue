<template>
  <div id="app">
    <router-link to="/login"></router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
