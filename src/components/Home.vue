<template>
  <div class="wrapper">
    <h3 class="mt-10" v-if="user">
      Hi, {{ user.firstName }} {{ user.lastName }}
    </h3>
    <h3 class="mt-10" v-else>Hello, you are not logged in.</h3>
    <div class="flex inner my-6 mx-4 shadow-md border justify-center">
      <p class="text-lg">Welcome to Chin00k Media Enterprise</p>
    </div>
    <div class="my-1 flex justify-center shadow-md border">
      <img src="../assets/media_land02.jpg" class="w-full" />
    </div>
    <div class="mt-24 my-16 flex flex-col justify-center items-center">
      <div>
        <a
          href="#"
          class="uppercase text-blue-700 font-bold"
          @click.prevent="setIframe"
          >Play Has No Limits</a
        >
      </div>
      <h3 class="mt-2">Introducing Chinook Enterprise</h3>
      <div>
        <p class="my-10 text-lg">
          Unleash new entertainment possibilities that you never anticipated
        </p>
      </div>
    </div>

    <div class="my-1 flex justify-center shadow-md border">
      <img src="../assets/land03.jpg" class="w-full" />
    </div>
    <IframePlay v-if="showIframe" @closeIframe="closeIframe" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import IframePlay from "./iframe/IframePlay";

export default {
  name: "Home",

  data: () => {
    return {
      showIframe: false,
    };
  },

  computed: {
    ...mapGetters(["user"]),
  },

  methods: {
    setIframe() {
      // this.pokemonUrl = url;
      this.showIframe = true;
    },
    closeIframe() {
      this.showIframe = false;
    },
  },

  components: {
    IframePlay,
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