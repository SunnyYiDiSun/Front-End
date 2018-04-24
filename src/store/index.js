import Vuex from 'vuex'
import Vue from 'vue'
import Login from '@/store/modules/login.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
       Login
	}
})
