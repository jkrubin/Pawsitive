import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	loginError: '',
  	jwt: '',
  	showPreloader: false,
    client: false
  },
  mutations: {
  	setLoginError(state, payload){
  		state.loginError = payload;
  	},
  	setPreloader(state, payload){
  		state.showPreloader = payload;
  	},
  	setJWT(state, payload){
  		state.jwt = payload;
  	},
    setClient(state, payload){
      state.client = payload;
    }
  },
  getters: {
  	getJWT: state => {
  		return state.jwt;
  	}
  actions: {
    submitRegister(){
      // Fetch Here
    }
  }
})
