<template>
<div>
<div>{{ msg }}</div>
<input type="text" placeholder="name"  v-model="name">
<input type="text" placeholder="passWord" v-model="passWord">
<button @click="redirct">登陆</button>
<button @click="check">check</button>
</div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login Page',
      name: '',
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
