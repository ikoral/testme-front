import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Forgot from "./components/login/Forgot";
import Reset from "./components/login/Reset";
import Todo from "./components/todos/Todo";
import Pokemon from "./components/pokemon/Pokemon";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Signup },
    { path: "/forgot", component: Forgot },
    { path: "/reset/:token", component: Reset },
    { path: "/todo", component: Todo },
    { path: "/pokelog", component: Pokemon },
  ],
});
