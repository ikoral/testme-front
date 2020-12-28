<template>
  <nav
    class="flex items-center justify-between flex-wrap p-6 bg-gradient-to-r from-blue-900 to-pink-500"
  >
    <div class="flex items-center flex-no-shrink text-gray-200 mr-8">
      <span class="font-semibold text-xl tracking-tight">
        <a
          href="/"
          class="no-underline inline-block leading-none text-pink-100 hover:text-white"
          >Chinook Media</a
        ></span
      >
    </div>
    <div class="block sm:hidden">
      <button
        @click="toggle"
        class="flex items-center px-3 py-2 border rounded text-blue-100 hover:border-transparent hover:text-pink-500 hover:bg-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <div class="text-sm sm:flex-grow">
        <router-link
          to="/"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 text-pink-100 hover:text-blue-300 mr-4"
        >
          <span @click="open = false">Home</span>
        </router-link>
        <a
          href="#responsive-header"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 text-pink-100 hover:text-blue-300 hover:font-bold mr-4"
        >
          PokeLog
        </a>
        <a
          href="javascript:void(0)"
          :class="classTodo"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 text-pink-100 hover:text-blue-300"
          @click="handleTodo"
        >
          ToDo
        </a>
      </div>
      <div v-if="!user">
        <router-link
          to="/register"
          class="no-underline inline-block text-sm px-4 py-2 mr-4 leading-none border rounded text-white border-white hover:text-white hover:bg-indigo-600 mt-4 sm:mt-0"
          ><span @click="open = false">Sign Up</span></router-link
        >
        <router-link
          to="/login"
          class="no-underline inline-block text-sm px-6 py-2 leading-none border border-white rounded text-pink-500 bg-white hover:text-white hover:bg-indigo-600 mt-4 sm:mt-0"
          ><span @click="open = false">Login</span></router-link
        >
      </div>
      <div v-if="user">
        <a
          href="javascript:void(0)"
          class="no-underline inline-block text-sm px-6 py-2 leading-none border border-white rounded text-pink-500 bg-white hover:text-white hover:bg-indigo-600 mt-4 sm:mt-0"
          @click="handleLogout"
          >Logout
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Header",

  data() {
    return {
      open: false,
    };
  },

  methods: {
    toggle() {
      this.open = !this.open;
    },
    handleLogout() {
      this.open = false;
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$store.dispatch("todos", null);
      // this.$router.push("/");
    },
    handleTodo() {
      this.open = false;
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axios
        .get("/todos")
        .then((res) => {
          //this.todos = res.data.todos;
          this.$store.dispatch("todos", res.data.todos);
        })
        .catch((err) => console.log(err));
      this.$router.push("/todo");
    },
  },

  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["todos"]),

    classTodo: function () {
      if (!this.user) {
        return "opacity-50";
      } else {
        return "opacity-100";
      }
    },
  },
};
</script>

<style>
</style>