<template>
  <div class="wrapper">
    <h3 v-if="user">Hi, {{ user.firstName }} {{ user.lastName }}</h3>
    <h3 v-else>Hello, you are not logged in.</h3>
    <div class="inner my-10 mx-4">Welcom to Chin00k Media Enterprise</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  width: 100%;
  height: 100%;
}

.inner {
  width: 90%;
  background: #fff9de;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 25px 40px 25px;
  border-radius: 15px;
  transition: all 0.3s;
}
</style>