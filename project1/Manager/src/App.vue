<template>
  <div id="app">
    <span>{{100000000 | toThousandFilter(4)}}</span>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
