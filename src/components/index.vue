<template>
  <div class="box">
    <div class="button">
      <el-button  @click="a" round>123</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    a() {
      // window.location.href = `./complaintDetail.html${location.search}`
      window.location.href = './a/aa.html'
    }
  }
}
</script>

<style lang="less" scoped>
  .box {
    width: 100%;
    height: 100%;
    .button {}
  }
</style>