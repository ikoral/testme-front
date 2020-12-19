<template>
  <div id="app">
    <Header />
    <!-- <Home /> -->
    <Login />
  </div>
</template>

<script>
import Header from "./components/Header";
// import Home from "./components/Home";
import Login from "./components/Login";

export default {
  name: "App",

  components: {
    Header,
    // Home,
    Login,
  },
};
</script>

<style>
html body {
  background: rgb(243, 243, 243);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
