<template>
  <div>
    <form
      @submit.prevent="handleSubmit"
      id="form-forgot"
      class="flex justify-center content-center"
    >
      <div
        class="relative w-full md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-10 lg:border md:shadow-md"
      >
        <div class="flex flex-col justify-center">
          <div class="h-10 my-2">
            <Success
              v-show="message"
              :message="message"
              @close-success="message = ''"
            />
            <Error v-show="error" :error="error" @close-error="error = ''" />
          </div>

          <div class="flex justify-center mt-4">
            <h3>Forgot Password</h3>
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

            <div class="mt-8 flex justify-between">
              <div>
                <button
                  id="btn-forgot"
                  type="text"
                  class="bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 hover:text-pink-500 hover:bg-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Error from "../Error";
import Success from "../Success";

export default {
  name: "Forgot",
  components: {
    Error,
    Success,
  },
  data() {
    return {
      email: "",
      error: "",
      message: "",
    };
  },
  methods: {
    //TODO: Check if user is registered in the system, show warning otherwise
    async handleSubmit() {
      try {
        if (this.email == "") {
          return (this.error = "email is required!");
        }
        const response = await axios.post("/users/forgot", {
          email: this.email,
        });
        this.error = "";
        this.message = response.data.message;
        console.log(response);
      } catch (e) {
        this.message = "";
        this.error = "Error occured!";
      }
    },
  },
};
</script>

<style>
</style>