<template>
<div>
<el-row :gutter="20" style="margin-bottom: 10px;">
  <el-col :span="4" :offset="10"><el-input v-model="name" placeholder="请输入用户名"></el-input></el-col>
</el-row>
<el-row :gutter="20" style="margin-bottom: 10px;">
  <el-col :span="4" :offset="10"><el-input  placeholder="请输入密码" v-model="passWord"></el-input></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="2" :offset="11"><el-button type="success" @click="redirct" round>登陆</el-button></el-col>
</el-row>
</div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      name: '',
      passWord: ''
    }
  },
  computed:{
    loginStatus(){
            return this.$store.state.Login.loginStatus;
    },
    loginTrigger(){
            return this.$store.state.Login.loginTrigger;
    }
  },
  methods: {
    redirct () {
      const userInfo={
        'name':this.name,
        'passWord':this.passWord,
        'loginStatus': false
      }

      this.$store.dispatch('login',userInfo);
    },
    check(){
      console.info(this.loginStatus);
      console.info(this.loginTrigger);
    }
  },
  watch:{
    loginTrigger:function(oldValue,newValue){
      console.info(312);
       if(this.loginStatus){
          this.$router.push('hello');
       }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
