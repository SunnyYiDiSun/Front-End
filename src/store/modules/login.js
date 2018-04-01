import type from '@/store/type.js';
import axios from 'axios';
import requestUrl from '@/config/requestUrl.js';
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
	login({commit},{name,passWord,loginStatus}){
    axios.post(requestUrl.login.url,{
       	'name':name,
       	'passWord':passWord,
        'loginStatus':loginStatus
       }).then(({data}) =>{
          commit(type.login,data);
       }).catch(function (error) {
          console.log(error);
       });

	}
}
//数据的改变
const mutations={
   [type.login](state,{loginStatus}){
      state.loginStatus=loginStatus;
      state.loginTrigger=!state.loginTrigger;
   }
}
export default {
	state,
	getters,
	actions,
	mutations
}
