<template>
  <div class="div">
    <div class="click" @click="onClick"></div>
  </div>
</template>

<script>
export default {
  name: 'logo',
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {},
    onClick() {
      let requireModule = require.context('F:../assets/img/map', false, /\.png$/)
      let imagesNameArr = [];
      for(var i = 0; i < requireModule.keys().length; i++) {
        imagesNameArr.push(requireModule.keys()[i].substr(2, requireModule.keys()[i].length))
        // console.log('  ', i, require('../assets/img/map' + imagesNameArr[i]))
      }
    },
  }
}
</script>

<style lang="less" scope>
  .div {
    .click {
      width: 40PX;
      height: 40PX;
      background-color: yellowgreen;
      margin: auto;
      margin-top: 50px;
      border-radius: 50%;
    }
  }
</style>