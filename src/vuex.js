import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  user: null,
  error: false,
};

const store = new Vuex.Store({
  state,
  getters: {
    user: (state) => {
      return state.user;
    },
    error: (state) => {
      return state.error;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    error(context, error) {
      context.commit("error", error);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    error(state, error) {
      state.error = error;
    },
  },
});

export default store;
