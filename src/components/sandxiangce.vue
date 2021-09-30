<template>
  <div class="hello">
    <div class="aa" ref="aa">
    </div>
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
  name: 'sandxiangce',
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  computed: {},
  methods: {
    init() {
      // 创建场景对象scene
      let scene = new THREE.Scene();

      // 创建网络模型
      let geometry = new THREE.BoxGeometry(100, 120, 200); // 创建一个立方体几何对象BoxGeometry
      // let geometry = new THREE.SphereGeometry(60,40,40); // 球体SphereGeometry

      // MeshLambertMaterial()、 言漫反射 Lambert网格材质，与光照有反应，漫反射
      // MeshPhongMaterial()  、镜面反射 高光Phong材质,与光照有反应
      // MeshBasicMaterial 基础网格材质，不受光照影响的材质， 
      // MeshStandardMaterial PBR物理材质，相比较高光Phong材质可以更好的模拟金属、玻璃等效果
      let material = new THREE.MeshLambertMaterial({ // 材质对象Material 
        color: 0xCCFF00, // 颜色
        opacity: 0.7, // 透明度
        transparent: true, // 是否开启透视 默认false
        // wireframe	// 将几何图形渲染为线框。 默认值为false
      }); 
      let mesh = new THREE.Mesh(geometry, material); // 网络模型对象mesh
      scene.add(mesh); // 网络模型添加到场景中

      // 光源设置
      let point = new THREE.PointLight(0xffffff); // 点光源
      point.position.set(400, 200, 300); // 点光源位置
      scene.add(point); // 点光源添加到场景中
      let ambient = new THREE.AmbientLight(0xffffff); // 环境光
      scene.add(ambient);

      // 相机设置
      let width = window.innerWidth;
      let height = window.innerHeight;
      let k = width / height; //窗口宽高比
      let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      // let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000); // 创建相机对象 正投影相机对象
      let camera = new THREE.PerspectiveCamera(90, width / height, 1, 1000) // 创建相机对象 透视投影相机对象
      camera.position.set(200, 300, 200); //设置相机位置
      camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

      // 创建渲染器对象
      let renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);//设置渲染区域尺寸
      renderer.setClearColor(0xb9d3ff, 0.5); //设置背景颜色
      this.$refs.aa.appendChild(renderer.domElement); //元素中插入canvas对象

      //执行渲染操作   指定场景、相机作为参数
      function rend() {  // 渲染
        renderer.render(scene, camera); 
      }
      rend()
      let controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
      controls.addEventListener('change', rend)

      // 旋转动画
      let t0 = new Date(); // 上次时间
      function begin() {
        let t1 = new Date(); // 本次时间
        let t = t1 - t0; // 时间差
        t0 = t1 // 把本次时间赋值给上次时间
        requestAnimationFrame(begin)
        renderer.render(scene, camera); // 执行渲染
        mesh.rotateY(0.001 * t);
      }

      // function stop() { // 参考这个做停止
      //   if (requestId) {
      //     window.cancelAnimationFrame(requestId);
      //     requestId = undefined;
      //   }
      // }

      // begin(); // 执行转动 

      // var axisHelper = new THREE.AxisHelper(250);   // 辅助，三维坐标系
      // scene.add(axisHelper);
    }
  },
}
// 
</script>

<style lang="less" scoped>
.hello {
  height: 100%;
  width: 100%;
}
</style>
