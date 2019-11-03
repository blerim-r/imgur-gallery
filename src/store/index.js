import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    galleryLoading: false,
  },
  mutations: {
    updateImages(state, data) {
      state.images = data;
    },
    updateGalleryLoading(state, data) {
      state.galleryLoading = data;
    }
  },
  actions: actions
})
