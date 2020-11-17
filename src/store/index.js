import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filterMovies: '',
    selectedCategories: [],
  },
  mutations: {
    updateField,
    setFilterMovies(state, value) {
      state.filterMovies = value;
    },
    setSelectedCategories(state, value) {
      state.selectedCategories = value;
    }
  },
  getters: {
    getField
  },
  actions: {
  },
  modules: {
  }
})
