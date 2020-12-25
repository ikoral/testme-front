<template>
  <div class="wrapper">
    <h3 class="mt-10" v-if="user">
      Hi, {{ user.firstName }} {{ user.lastName }}
    </h3>
    <h3 class="mt-10" v-else>Hello, you are not logged in.</h3>
    <div class="flex inner my-10 mx-4 shadow-md border justify-center">
      <p class="text-lg">Welcome to Chin00k Media Enterprise</p>
    </div>
    <div class="inner my-2 mx-4 flex justify-center shadow-md border">
      <img
        src="../assets/christmas.jpg"
        class="w-5/6 h-1/5 lg:w-3/5 lg:h-3/5"
      />
    </div>
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
  background: #fffcfd;
  padding: 40px 25px 40px 25px;
  border-radius: 15px;
  transition: all 0.3s;
}
</style>