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
import axios from "axios";

export default {
  name: "App",

  components: {
    Header,
  },

  // data() {
  //   return {
  //     user: null,
  //   };
  // },

  async created() {
    try {
      const response = await axios.get("/users/user");
      this.$store.dispatch("user", response.data.user);
    } catch (error) {
      this.$store.dispatch("user", null);
    }

    // this.user = response.data.user;

    // console.log("response data", response.data.user);
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
