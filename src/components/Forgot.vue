<template>
  <form
    @submit.prevent="handleSubmit"
    id="form-forgot"
    class="flex justify-center content-center"
  >
    <div
      class="absolute w-4/5 md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-24"
    >
      <div class="flex justify-center">
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
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Forgot",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("/api/users/forgot", {
        email: this.email,
      });
      console.log(response);
    },
  },
};
</script>

<style>
</style>