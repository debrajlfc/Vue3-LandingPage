import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      navBar: true,
      fooTer: true,
      language: "en",
    };
  },
  mutations: {
    showHidenavBar: (state) => {
      state.navBar = !state.navBar;
    },
    showHidefooTer: (state) => {
      state.fooTer = !state.fooTer;
    },
    toggleLanguage: (state) => {
      if (state.language == "en") {
        state.language = "es";
      } else if (state.language == "es") {
        state.language = "en";
      }
    },
  },
  actions: {
    getShowHidenavBar: async function ({ commit }) {
      commit("setshowHidenavBar");
    },
    getShowHidefooTer: async function ({ commit }) {
      commit("setshowHidefooTer");
    },
    getShowHidelanguage: async function ({ commit }) {
      commit("setshowHidelanguage");
    },
  },
});
export default store;
