<template>
  <div>
    <div v-if="user" class="flex flex-col">
      <div class="flex center-center justify-center">
        <div
          class="w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 flex text-white text-lg py-1 border-0 rounded-md mt-4 mx-2 bg-gray-500 justify-center content-center"
        >
          <h3>{{ user.firstName }} {{ user.lastName }}</h3>
        </div>
      </div>
      <AddTodo v-on:add-todo="addTodo" />
      <Todos
        :todos="todos"
        v-on:del-todo="deleteTodo"
        v-on:update-status="updateStatus"
      />
    </div>
    <div v-else class="flex justify-center content-center">
      <div
        class="w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 flex text-white text-lg px-4 py-20 border-0 rounded-md shadow-md relative mx-4 my-20 bg-blue-600 justify-center content-center"
      >
        <span class="text-lg inline-block mr-5 align-middle">
          <i class="fa fa-bullhorn"></i>
        </span>
        <span class="inline-block align-middle mr-8">
          <b class="capitalize">Information!</b> To display your todos please
          sign in!
        </span>
      </div>
    </div>
  </div>
</template>

<script>
//FIX: 15m probably very short for token, if user does not rferesh page old token is being used.refresh axios auth header.
import { mapGetters } from "vuex";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
  },

  // data() {
  //   return {
  //     todos: [],
  //   };
  // },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["todos"]),
  },
  methods: {
    // deleteTodo(id) {
    //   axios
    //     .delete(`todos/${id}`)

    //     .then((res) => {
    //       this.todos = this.todos.filter((todo) => todo.id !== id);
    //       // this.todos = this.getTodos();
    //       console.log(res.data); //avoid eslint never used variable
    //     });
    // },

    async addTodo(newTodo) {
      //this.todos = [...this.todos, newTodo];
      await axios
        .post("/todos/create", {
          todo: newTodo,
        })
        .catch((err) => console.log(err));
      this.getTodos();
    },

    // updateStatus(newStatus) {
    //   const { status, Id } = newStatus;
    //   const todoStatus = status ? "1" : "0";
    //   //const currentStatus = { todoStatus: value };
    //   // console.log(todoStatus);
    //   axios
    //     .patch(`/todos/${Id}`, {
    //       todoStatus,
    //     })
    //     .then((res) => {
    //       // this.todos = this.getTodos();
    //       console.log(res.data); //avoid eslint never used variable
    //     })
    //     .catch((err) => console.log(err));
    // },

    getTodos() {
      axios
        .get("/todos")
        .then((res) => {
          //this.todos = res.data.todos;
          this.$store.dispatch("todos", res.data.todos);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>

