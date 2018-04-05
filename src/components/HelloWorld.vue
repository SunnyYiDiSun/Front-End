<template>
  <el-container>

    <el-header>
      <h1>{{msg}}</h1>
    </el-header>

    <el-aside width="200px">

    </el-aside>


    <el-main>
        <el-carousel :interval="2000" type="card" height="200px">
          <el-carousel-item v-for="item in picPath" :key="item.key">
            <img v-bind:src="item.path" height="200px">
          </el-carousel-item>
        </el-carousel>
    </el-main>
  </el-container>

</template>

<script>
import picPath from '@/config/localPic.js'
import ElHeader from "../../node_modules/element-ui/packages/header/src/main.vue";
import ElAside from "../../node_modules/element-ui/packages/aside/src/main.vue";
import ElMain from "../../node_modules/element-ui/packages/main/src/main.vue";
export default {
  components: {
    ElMain,
    ElAside,
    ElHeader},
  name: 'HelloWorld',
  data () {
    return {
      msg:"我和彤彤"
    }
  },
  created () {
    this.picPath=picPath.picPath;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
