import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forgot from "./components/Forgot";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Signup },
    { path: "/forgot", component: Forgot },
  ],
});
