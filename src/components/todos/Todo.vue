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
        :class="classVisibility"
        :todos="todos"
        :todosStatus="todosStatus"
        v-on:del-todo="deleteTodo"
        v-on:update-status="updateStatus"
        v-on:mark-alldone="markAlldone"
        v-on:delete-alltodos="deleteAllTodos"
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
  name: "Todo",
  components: {
    Todos,
    AddTodo,
  },

  data() {
    return {
      todosStatus: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["todos"]),

    classVisibility: function () {
      if (this.todos && this.todos.length > 0) {
        return "opacity-100";
      } else {
        return "opacity-0";
      }
    },
  },

  methods: {
    async deleteTodo(id) {
      await axios.delete(`/todos/${id}`).catch((err) => console.log(err));
      this.getTodos();
    },

    async addTodo(newTodo) {
      //this.todos = [...this.todos, newTodo];
      await axios
        .post("/todos/create", {
          todo: newTodo,
        })
        .catch((err) => console.log(err));
      this.getTodos();
    },

    async updateStatus(newStatus) {
      const { status, Id } = newStatus;
      const todoStatus = status ? "1" : "0";
      //const currentStatus = { todoStatus: value };
      // console.log(todoStatus);
      await axios
        .patch(`/todos/${Id}`, {
          todoStatus,
        })
        .catch((err) => console.log(err));
      this.getTodos();
    },

    async markAlldone(status) {
      const allStatus = status ? "1" : "0";
      await axios
        .put(`/todos/all`, {
          allStatus,
        })
        .catch((err) => console.log(err));
      this.getTodos();
    },

    async deleteAllTodos() {
      await axios.delete("/todos/del/all").catch((err) => console.log(err));
      this.getTodos();
    },

    getTodos() {
      axios
        .get("/todos")
        .then((res) => {
          //this.todos = res.data.todos;
          this.$store.dispatch("todos", res.data.todos);

          if (res.data.todos && res.data.todos.length > 0) {
            const unmarkedTodos = [];
            res.data.todos.forEach(function (todo) {
              if (!todo.status) {
                unmarkedTodos.push(todo.id);
              }
            });
            unmarkedTodos.length > 0
              ? (this.todosStatus = false)
              : (this.todosStatus = true);
          } else {
            this.todosStatus = false;
          }
        })
        .catch((err) => console.log(err));
    },
  },

  created: function () {
    this.getTodos();
  },
};
</script>

<style>
</style>

