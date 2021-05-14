import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    setImages(state, newImages){
      state.images = newImages
    }
  },
  actions: {
    setImagesDelayed({ commit }, newImages) {
      setTimeout(() => {
        commit('setImages', newImages)
      }, 500)
    }
  },
})
