import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    loading: true
  },
  mutations: {
    setImages(state, newImages){
      state.images = newImages
    },
    setLoading(state, newState){
      state.loading = newState
    }
  },
  actions: {
    setImagesDelayed({ commit }, newImages) {
      setTimeout(() => {
        commit('setImages', newImages)
        commit('setLoading', false)
      }, 500)
    }
  },
  getters: {
    getImageById : state => id => {
      return state.images.find(img => img.id === id)
    }
  }
})
