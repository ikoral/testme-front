<template>
  <div>
    <form
      @submit.prevent="handleSubmit"
      id="form-sign-up"
      class="flex justify-center content-center"
    >
      <div
        class="w-full md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-10 lg:border md:shadow-md"
      >
        <div class="flex flex-col justify-center">
          <div class="h-10 my-2">
            <Error v-show="error" :error="error" @close-error="error = ''" />
          </div>
          <div class="flex justify-center mt-4">
            <h3>Sign Up</h3>
          </div>
        </div>

        <div class="px-10 py-10 flex flex-col">
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
  </div>
</template>

<script>
import axios from "axios";
import Error from "../Error";
export default {
  name: "Signup",

  components: {
    Error,
  },
  methods: {
    // async handleSubmit() {
    handleSubmit() {
      if (this.email == "" || this.password == "" || this.lastName == "") {
        return (this.error = "email, last name and password are required!");
      }

      const passIncluded = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
      if (!this.password.match(passIncluded)) {
        return (this.error =
          "Min 8 char, at least; one low case, one up case, one num, and one special");
      }

      if (this.password !== this.passwordConfirm) {
        return (this.error = "passwords should match!");
      }

      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      };

      axios
        .post("/users/register", data)
        .then((res) => {
          console.log(res);
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
          this.error = "Please fill all the fields!";
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
      error: "",
    };
  },
};
</script>

<style>
</style>