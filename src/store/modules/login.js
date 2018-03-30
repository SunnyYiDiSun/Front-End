import type from '@/store/type.js'
import axios from 'axios'
const state={
	name:'',
	loginStatus:false,
  loginTrigger:false
}

const getters={
	name:state => state.name,
	loginStatus:state =>state.loginStatus,
  loginTrigger:state =>state.loginTrigger
}
//异步操作
const actions={
	login({commit,dispacth},{name,passWord,loginStatus}){
    axios.post("http://localhost:8090/name/1",{
       	'name':name,
       	'passWord':passWord,
        'loginStatus':loginStatus
       }).then(({data}) =>{
          commit(type.login,data);
       },(response) =>{
          console.info('failed response=========>'+response);
       });
       
	}
}
//数据的改变
const mutations={
   [type.login](state,{loginStatus}){
      console.info(loginStatus);
      state.loginStatus=loginStatus;
      state.loginTrigger=!state.loginTrigger;
      console.info(state);
   }
}
export default {
	state,
	getters,
	actions,
	mutations
}