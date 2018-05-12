<template>

  <el-container>
    <el-header>
      <h1 class="centerText">忆往昔</h1>
    </el-header>
    <el-main>
      <div>
        <el-row :gutter="20" class="rowSpacing">
          <el-col :span="4" :offset="10"><el-input v-model="name" placeholder="请输入用户名"></el-input></el-col>
        </el-row>
        <el-row :gutter="20" class="rowSpacing">
          <el-col :span="4" :offset="10"><el-input v-model="passWord"  placeholder="请输入密码"  @keyup.enter.native="redirct"></el-input></el-col>
        </el-row>
        <el-row :gutter="20" v-if="showErrorMsg" class="rowSpacing">
          <el-col :span="6" :offset="9"><el-alert title="请输入正确的用户名和密码" type="error" show-icon  center></el-alert></el-col>
        </el-row>
        <el-row :gutter="20" class="rowSpacing">
        <el-col :span="2" :offset="11"><el-button type="success" @click="redirct" round v-bind:disabled="showButton">登陆</el-button></el-col>
      </el-row>
      </div>
    </el-main>
  </el-container>

</template>

<script>

import ElAlert from "../../node_modules/element-ui/packages/alert/src/main.vue";

export default {
  components: {ElAlert},
  name: 'Login',
  data () {
    return {
      name: '',
      passWord: '',
      showErrorMsg:false,
      checkSubmit:false
    }
  },
  computed:{
    loginStatus(){
            return this.$store.state.Login.loginStatus;
    },
    loginTrigger(){
            return this.$store.state.Login.loginTrigger;
    },
    showButton(){
      if(this.name&&this.passWord){
           return false;
      }else {
           return true;
      }
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
      this.checkSubmit=true
    }
  },
  watch:{
    loginTrigger:function(oldValue,newValue){
      console.info(312);
       if(this.loginStatus){
          this.$router.push('hello');
          this.showErrorMsg=false
       }else if(this.checkSubmit){
          this.showErrorMsg=true
       }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rowSpacing {
    margin-bottom: 10px;
  }
  .centerText {

    text-align: center;
  }

</style>
