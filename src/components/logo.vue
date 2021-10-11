<template>
  <div class="div">
    <div class="click" @click="onClick"></div>
    <div class="divimg">
      <img :src="getimg(item)" alt="" class="img" v-for="(item, index) in imagesNameArr" :key="index" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'logo',
  data() {
    return {
      imgsrc: '',
      imagesNameArr: []
    }
  },
  mounted() {
    this.init()
  },
  computed: {
  },
  methods: {
    init() {},
    onClick() {
      let requireModule = require.context('F:/博客PSD/img/创作中心', false, /\.png$/)
      this.imagesNameArr = [];
      for(var i = 0; i < requireModule.keys().length; i++) {
        this.imagesNameArr.push(requireModule.keys()[i].substr(2, requireModule.keys()[i].length))
        // console.log('  ', i, require('../assets/img/map' + imagesNameArr[i]))
      }
    },
    getimg(url) {
      // console.log('123', url)
      return require('F:/博客PSD/img/创作中心/'+url)
    }
  }
}
</script>

<style lang="less" scope>
  .div {
    height: 100%;
    width: 100%;
    .click {
      width: 40PX;
      height: 40PX;
      background-color: yellowgreen;
      margin: auto;
      margin-top: 50px;
      border-radius: 50%;
    }
    .divimg {
      display: flex;
      flex-direction: row;
      // flex-direction: column;
      .img {
        width: 160px;
        height: 100px;
      }
    }
  }
</style>