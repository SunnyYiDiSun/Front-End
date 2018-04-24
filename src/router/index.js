import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Hello from '@/components/HelloWorld'

Vue.use(Router);

const  routers= [{  path: '/login',
                    name: 'Login',
                    component: Login,
                    meta:{
                      isRequireAuthTrue:false
                    }
                  },
                  {path: '/hello',
                    name: 'Hello',
                    component: Hello,
                    meta:{
                      isRequireAuthTrue:true
                    }
                  }];
const router=new Router({
  routes:routers
});
router.beforeEach(function (to,from,next) {
let token = window.localStorage.getItem('token');
if(to.matched.some(item=>item.meta.isRequireAuthTrue)){
  if(token===null){
    next({path:'Login'});
  }else{
    next();
  }
}else{
  next();
}



});
export default router






