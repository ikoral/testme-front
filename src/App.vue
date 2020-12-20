<template>
  <div id="app">
    <Header />
    <!-- <Home /> -->
    <!-- <Login /> -->
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Header,
  },
};
</script>

<style>
html body {
  background: rgb(243, 243, 243);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h3 {
  font-size: 20px;
  font-weight: 600;
}
</style>
