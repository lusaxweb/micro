import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      section: 0
    }),
    mutations: {
      SET_SECTION (state, newSection) {
        state.section = newSection
      },
    },
    actions: {
      changeSection ({ commit }, newSection) {
        console.log(newSection)
        commit('SET_SECTION', newSection)
      }
    }
  })
}

export default createStore
