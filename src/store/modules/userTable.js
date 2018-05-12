import type from '@/store/type.js';
import axios from 'axios';
import requestUrl from '@/config/requestUrl.js';

const state={
	userList:''
}
const getters={
	userList:state=>state.userList
}


const actions={
	findAllUser:function({commit}){
	    axios.get(requestUrl.findAllUser.url).then(
	    	({data})=>{
               commit(type.findAllUser,data);
			}).catch((error)=>{
               console.info(error);
	        });
	}
}

const mutations={
	[type.findAllUser](state,data){
		state.userList=data
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}