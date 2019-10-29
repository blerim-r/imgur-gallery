import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    updateImages(state, data) {
      state.images = data;
    }
  },
  actions: actions
})
