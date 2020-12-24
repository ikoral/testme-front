<template>
  <form
    @submit.prevent="handleSubmit"
    id="form-sign-in"
    class="flex justify-center content-center"
  >
    <div
      class="absolute w-4/5 md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-24"
    >
      <div class="flex flex-col justify-center">
        <div class="flex justify-center">
          <p v-if="error" role="alert" class="mt-2 alert">{{ error }}</p>
        </div>
        <div class="flex justify-center mt-2">
          <h3>Login</h3>
        </div>
        <div class="flex justify-center">
          <img class="w-20 h-20 mt-6" src="../assets/chinook.png" />
        </div>
      </div>

      <div class="px-12 py-10">
        <div class="w-full mb-2 flex items-center">
          <i
            class="absolute ml-3 fill-current text-gray-400 text-xs z-10 fa fa-envelope"
          ></i>
          <input
            type="email"
            placeholder="Email"
            class="px-8 w-full border rounded px-3 py-1 text-gray-700"
            v-model="email"
          />
        </div>

        <div class="w-full mb-2 mt-4 flex items-center">
          <i
            class="absolute ml-3 fill-current text-gray-400 text-xs z-10 fa fa-lock"
          ></i>
          <input
            type="password"
            placeholder="password"
            class="px-8 w-full border rounded px-3 py-1 text-gray-700"
            v-model="password"
          />
        </div>

        <div class="mt-8 flex justify-between">
          <div class="flex items-center">
            <!-- <input type="checkbox" class="w-4 h-4 mr-2" /> -->
            <span class="text-xs text-gray-700 hover:text-pink-500"
              ><router-link to="/forgot">Forgot Password?</router-link></span
            >
          </div>
          <div>
            <button
              id="btn-sign-in"
              type="text"
              class="bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 hover:text-pink-500 hover:bg-white"
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    async handleSubmit() {
      // TODO: check required fields
      try {
        const response = await axios.post("/users/login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("token", response.data.token);
        this.$store.dispatch("user", response.data.user);
        this.$router.push("/");
      } catch (e) {
        this.error = "Invalid username or password!";
      }
    },
  },
};
</script>

<style>
</style>