<template>
  <form
    @submit.prevent="handleSubmit"
    id="form-rest-password"
    class="flex justify-center content-center"
  >
    <div
      class="flex flex-col absolute w-4/5 md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-24"
    >
      <div class="flex justify-center mt-6">
        <h3>Reset Password</h3>
      </div>

      <div class="px-12 py-4 flex flex-col">
        <div class="w-full mb-2 mt-4 flex items-center">
          <i
            class="absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-lock"
          ></i>
          <input
            type="password"
            autocomplete="new-password"
            placeholder="password"
            class="px-8 w-full border rounded px-3 py-1 text-gray-700"
            v-model="password"
          />
        </div>

        <div class="w-full mb-2 flex items-center">
          <i
            class="absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-repeat"
          ></i>
          <input
            type="password"
            placeholder="password again"
            class="px-8 w-full border rounded px-3 py-1 text-gray-700"
            v-model="passwordConfirm"
          />
        </div>

        <div class="mt-4 flex justify-between">
          <button
            id="btn-reset"
            type="text"
            class="bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 hover:text-pink-500 hover:bg-white"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Reset",
  data() {
    return {
      password: "",
      passwordConfirm: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("/api/users/reset", {
          password: this.password,
          password_confirm: this.passwordConfirm,
          token: this.$route.params.token,
        });

        console.log(response);
      } catch (e) {
        this.error = "Invalid username or password!";
      }
    },
  },
};
</script>

<style>
</style>