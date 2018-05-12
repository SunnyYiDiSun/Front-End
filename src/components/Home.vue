<template>
  <el-container>
   <el-aside>
     

   </el-aside>
   <el-header>
   <el-row>

      <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect" class="meunSty">
         <el-submenu index=1 > 
          <template slot="title">用户管理</template>
           <el-menu-item index="1-1">所有用户</el-menu-item>
           <el-menu-item index="1-2">选项2</el-menu-item>
         </el-submenu>
      </el-menu>
     

   </el-row>
   </el-header>

   <router-view></router-view>
  </el-container>
   
</template>

<script>
export default {
  name: 'Hom',
  data () {
    return {
      activeIndex:"1",
      menus:[{'key':'1','value':'相片展示'},{'key':'2','value':'用户管理'}]
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.info(key,keyPath);
        switch (key) {
          case "1-2":
          console.info(123);
            this.$router.push("/hom/PicCarousel");
            break;
          case "1-1":
            this.$router.push("/hom/UserTable");

            break;
          default:

            break;
        }
        
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.meunSty {
  width: 900px;
  margin-left: auto;
  margin-right: auto;

}
</style>
