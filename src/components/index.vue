<template>
  <div class="box">
    <div class="button">
      <el-input v-model="name" placeholder="name"></el-input>
      <el-input v-model="age" placeholder="age"></el-input>
      <el-button  @click="a" round>123</el-button>
    </div>
  </div>
</template>

<script>
import {request} from '../network/request'

export default {
  name: 'index',
  data() {
    return {
      name: '',
      age: '',
    }
  },
  mounted() {},
  methods: {
    a() {
      request({
        url: './api/test/addUser',
        method: 'post',
        data: {
          username: this.name,
          age: this.age,
        }
      }).then(res => {
        console.log('res', res)
      }).catch(err => {
        console.log('err', err)
      })
      // window.location.href = `./complaintDetail.html${location.search}`
      // window.location.href = './a/aa.html'
    }
  }
}
</script>

<style lang="less" scoped>
  .box {
    width: 100%;
    height: 100%;
    // .button {}
  }
</style>