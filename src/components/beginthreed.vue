<template>
  <div ref="div">
  </div>
</template>

<script>
import * as THREE from 'three'
import tween from '@tweenjs/tween.js'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { CSS3DRenderer,CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js"
import screenfull from 'screenfull';

export default {
  name: 'beginthreed',
  data() {
    return {
      camera, // 相机
      scene,  // 场景对象scene
      renderer, // 渲染器对象
      controls, // 控件对象
      objects: [],
      table: [  // 数据
        {},
        {},
        {}
      ] 
    }
  },
  mounted() {
    this.init()
  },
  computed: {},
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );  // 创建相机 透视投影相机对象
      this.camera.position.z = 3000;

      this.scene = new THREE.Scene(); // 创建场景

      // 制作卡片
      this.createCard()
    },
    createCard() { // 制作卡片
      this.table.forEach((item, index) => {
        let element = document.createElement('div'); // 创建数量
        element.className = 'element'; // 类名
        element.style.backgroundColor = 'rgba(0, 127, 127,' + (Math.random()*0.5+0.25) + ')' ; //随机透明度

        let number = document
      })
    }
  },
}
</script>

<style lang="less" scoped>

</style>