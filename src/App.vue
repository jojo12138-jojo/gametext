<template>
  <div id="app">
    <sandxiangce/>
  </div>
</template>

<script>
import sandxiangce from './components/sandxiangce.vue'

export default {
  name: 'app',
  components: {
    sandxiangce
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
