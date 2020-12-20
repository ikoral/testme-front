<template>
  <form
    @submit.prevent="handleSubmit"
    id="form-sign-up"
    class="flex justify-center content-center"
  >
    <div
      class="flex flex-col absolute w-4/5 md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-24"
    >
      <div class="flex justify-center mt-6">
        <h3>Sign Up</h3>
      </div>

      <div class="px-12 py-10 flex flex-col">
        <div class="w-full mb-2 flex items-center">
          <i
            class="absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-user-o"
          ></i>
          <input
            type="text"
            placeholder="First Name"
            class="px-8 w-full border rounded px-3 py-1 text-gray-700"
            v-model="firstName"
          />
        </div>

        <div class="w-full mb-2 flex items-center">
          <i
            class="absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-user"
          ></i>
          <input
            type="text"
            placeholder="Last Name"
            class="px-8 w-full border rounded px-3 py-1 text-gray-700"
            v-model="lastName"
          />
        </div>

        <div class="w-full mb-2 flex items-center">
          <i
            class="absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-envelope"
          ></i>
          <input
            type="email"
            autocomplete="email"
            placeholder="Email"
            class="px-8 w-full border rounded px-3 py-1 text-gray-700"
            v-model="email"
          />
        </div>

        <div class="w-full mb-2 mt-6 flex items-center">
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

        <div class="mt-8 flex justify-between">
          <!-- <div class="flex items-center">
            <input type="checkbox" class="w-4 h-4 mr-2" />
            <span class="text-xs text-gray-700">Remember Me</span>
          </div> -->
          <div>
            <button
              id="btn-sign-up"
              type="text"
              class="bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 hover:text-pink-500 hover:bg-white"
            >
              REGISTER
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
  name: "Signup",
  methods: {
    // async handleSubmit() {
    handleSubmit() {
      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      };

      axios
        .post("/api/users/register", data)
        .then((res) => {
          console.log(res);
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
      // try {
      //   const res = await axios.post("/api/users/register", data);
      //   console.log(res);
      // } catch (err) {
      //   console.log(err.message);
      // }
    },
  },

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
};
</script>

<style>
</style>