import { createStore } from 'vuex'

export default createStore({
  state: {
	  turtleName:''
  },
  getters: {
	getTurtleName(state){
		return this.turtleName;
	}
  },
  mutations: {
	setTurtleName(state, name){
		state.turtleName = name;
	}
  },
  actions: {
	setTurtleName(state, name){
		state.commit("setTurtleName", name);
	}
  },
  modules: {
  }
})