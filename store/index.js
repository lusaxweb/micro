import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      locales: ['en', 'ko'],
      locale: 'en',
      section: 0
    }),
    mutations: {
      SET_SECTION (state, newSection) {
        state.section = newSection
      },
      SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      }
    },
    actions: {
      changeLang ({ commit }, newLang) {
        commit('SET_LANG', newLang)
      },
      changeSection ({ commit }, newSection) {
        console.log(newSection)
        commit('SET_SECTION', newSection)
      }
    }
  })
}

export default createStore
