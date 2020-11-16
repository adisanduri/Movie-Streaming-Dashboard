import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovies: '',
    categories: [],
    filteredCategories: [],
  },
  mutations: {
    setSearchMovies(state, value) {
      state.searchMovies = value;
    },
    setCategories(state, value) {
      state.searchMovies = value;
    },
    setFilteredCategories(state, value) {
      state.filteredCategories = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
