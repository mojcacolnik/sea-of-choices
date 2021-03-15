import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
  INCREMENT_COUNT: 'incrementCount'
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state) {
      state.count++
    }
  },
  actions: {
    incrementCount(store) {
      store.commit(mutations.INCREMENT_COUNT)
    }
  },
  modules: {}
})
