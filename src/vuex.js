import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  user: null,
  todos: null,
};

const store = new Vuex.Store({
  state,
  getters: {
    user: (state) => {
      return state.user;
    },
    todos: (state) => {
      return state.todos;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    todos(context, todos) {
      context.commit("todos", todos);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    todos(state, todos) {
      state.todos = todos;
    },
  },
});

export default store;
