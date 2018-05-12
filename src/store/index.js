import Vuex from 'vuex'
import Vue from 'vue'
import Login from '@/store/modules/login.js'
import UserTable from '@/store/modules/userTable.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
       Login,
       UserTable
	}
})
