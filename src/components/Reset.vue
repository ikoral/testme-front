<template>
  <div>
    <form
      @submit.prevent="handleSubmit"
      id="form-rest-password"
      class="flex justify-center content-center"
    >
      <div
        class="relative w-full md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-10 lg:border md:shadow-md"
      >
        <div class="h-10 my-2">
          <Success
            v-if="message"
            :message="message"
            @close-success="handleSuccess"
          />
          <Error v-if="error" :error="error" @close-error="error = ''" />
        </div>

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
  </div>
</template>

<script>
import axios from "axios";
import Error from "./Error";
import Success from "./Success";

export default {
  name: "Reset",
  components: {
    Error,
    Success,
  },
  data() {
    return {
      password: "",
      passwordConfirm: "",
      error: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.password == "") {
          return (this.error = "password is required!");
        }
        if (this.passwordConfirm !== this.password) {
          return (this.error = "passwords should match!");
        }
        const response = await axios.post("/users/reset", {
          password: this.password,
          password_confirm: this.passwordConfirm,
          token: this.$route.params.token,
        });

        this.error = "";
        this.message = response.data.message;
        this.password = "";
        this.passwordConfirm = "";
        console.log(response);
      } catch (e) {
        this.message = "";
        this.error = e.response.data.message;
        //this.error = "Error occured!";
      }
    },
    handleSuccess() {
      this.message = "";
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>