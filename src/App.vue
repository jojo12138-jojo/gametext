<template>
  <div id="app">
    <!-- <sandxiangce/> -->
    <!-- <beginthreed/> -->
    <!-- <logo/> -->
    <index/>
  </div>
</template>

<script>
import sandxiangce from './components/sandxiangce.vue'
import beginthreed from './components/beginthreed.vue'
import index from './components/index.vue'
import logo from './components/logo.vue'

export default {
  name: 'app',
  components: {
    sandxiangce,
    beginthreed,
    index,
    logo,
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
  padding: 0px;
}
</style>
