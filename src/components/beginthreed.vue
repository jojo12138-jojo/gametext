<template>
  <div ref="div" id="app" class="app">
    <div v-for="(item) in table" :key="item.no" class="element" :style="elestyle" ref="element">
      <div class="element-text">321</div>
    </div>
    <div class="table">
      <div class="item" @click="onclicka">a</div>
      <div class="item" @click="onclickb">b</div>
      <div class="item">c</div>
      <div class="item">d</div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'
import CanvasNest from 'canvas-nest.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { CSS3DRenderer,CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js"
import screenfull from 'screenfull';

export default {
  name: 'beginthreed',
  data() {
    return {
      camera: '', // 相机
      scene: '',  // 场景对象scene
      renderer: '', // 渲染器对象
      controls: '', // 控件对象
      objects: [],
      table: [  // 数据
        {no: 0, x: 1, y: 1},
        {no: 1, x: 2, y: 1},
        {no: 2, x: 1, y: 2},
        {no: 3, x: 2, y: 2},
      ],
      button: {a: [], b: [], c: [], d: []}
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
      this.begin()
      this.animate()
    },
    elestyle() {
      return {backgroundColor: 'rgba(0, 127, 127,' + (Math.random()*0.5+0.25) + ')'}
    },
    createCard() { // 制作卡片
      this.table.forEach((item, index) => {
        let object = new CSS3DObject( this.$refs.element[index]);
				object.position.x = Math.random() * 4000 - 2000;
				object.position.y = Math.random() * 4000 - 2000;
				object.position.z = Math.random() * 4000 - 2000;
				this.scene.add( object );
        this.objects.push(object)

        object = new THREE.Object3D();
        object.position.x = ( this.table[index].x * 140 ) - 1330;
				object.position.y = - ( this.table[index].y * 180 ) + 990;
        this.button.a.push(object)
      })
    },
    sphere() { // b模式
      let vector = new THREE.Vector3();
      let spherical = new THREE.Spherical();
      this.table.forEach((item, index) => {
        let phi = Math.acos(-1 + ( 2 * index) / this.table.length);
        let theta = Math.sqrt(this.table.length * Math.PI) * phi;
        let object = new THREE.Object3D();
        spherical.set(800, phi, theta);
        object.position.setFromSpherical(spherical);
        vector.copy(object.position).multiplyScalar( 2 );
        object.lookAt( vector );
        this.button.b.push(object);
      })
    },
    begin() {
      this.renderer = new CSS3DRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.div.appendChild( this.renderer.domElement );
      
      this.controls = new TrackballControls(this.camera, this.renderer.domElement)
      this.controls.rotateSpeed = 0.5;
			this.controls.minDistance = 500;
			this.controls.maxDistance = 6000;
			this.controls.addEventListener( 'change', this.render );
      window.addEventListener( 'resize', this.onWindowResize, false );
    },
    animate() {
      requestAnimationFrame(this.animate);
      TWEEN.update();
      this.controls.update();
    },
    onclicka() {
      this.transform(this.button.a, 2000)
    },
    onclickb() {
      this.transform(this.button.b, 2000)
    },
    render() {
      this.renderer.render(this.scene, this.camera)
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.render();
    },
    transform(targets, duration) {
      TWEEN.removeAll();
      this.table.forEach((item, index) => {
        let object = this.objects[index];
        let target = targets[index]
        new TWEEN.Tween(object.position)
          .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
          .easing( TWEEN.Easing.Exponential.InOut )
          .start();
        new TWEEN.Tween(object.rotation )
          .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
          .easing( TWEEN.Easing.Exponential.InOut )
          .start();
      });
      new TWEEN.Tween(this)
        .to({}, duration*2)
        .onUpdate(this.render)
        .start();
    },
    zxlz() { // 粒子背景
      const config= {
        color: '255,0,0',
        count: 88,
      };
      const cn = new CanvasNest(this.$refs.div, config);
      cn.destroy();
    }
  },
}
</script>

<style lang="less" scoped>
.app{
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: #000000;
  .element {
    width: 120px;
		height: 160px;
		box-shadow: 0px 0px 12px rgba(0,255,255,0.5);
		border: 1px solid rgba(127,255,255,0.25);
		text-align: center;
		cursor: default;
    .element-text {
      position: absolute;
			top: 20px;
			right: 20px;
			font-size: 12px;
			color: rgba(127,255,255,0.75);
    }
  }
  .element:hover {
		box-shadow: 0px 0px 12px rgba(0,255,255,0.75);
		border: 1px solid rgba(127,255,255,0.75);
    cursor: pointer;
	}
  .table {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .item {
      margin: 0 50px;
      border-radius: 5px;
      border: 1px solid rgba(127,255,255,0.75);
      color: white;
      width: 100px;
    }
    .item:hover {
      box-shadow: 0px 0px 12px rgba(0,255,255,0.75);
      border: 1px solid rgba(127,255,255,0.75);
      cursor: pointer;
    }
  }
}
</style>