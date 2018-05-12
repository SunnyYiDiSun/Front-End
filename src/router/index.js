import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import PicCarousel from '@/components/PicCarousel'
import UserTable from '@/components/User/User'
Vue.use(Router);

const  routers= [{  path: '/',
                    name: 'Login',
                    component: Login,
                    meta:{
                      isRequireAuthTrue:false
                    }
                  },
                  {path: '/hom',
                    name: 'Home',
                    component: Home,
                    children:[
                      {
                        path:"PicCarousel",
                        component:PicCarousel,
                        meta:{
                        isRequireAuthTrue:false
                        }
                      },
                      {
                        path:"UserTable",
                        component:UserTable,
                        meta:{
                        isRequireAuthTrue:false
                        }
                      }
                    ],
                    meta:{
                      isRequireAuthTrue:false
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






