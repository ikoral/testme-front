<template>
  <div class="home">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos
      :todos="todos"
      v-on:del-todo="deleteTodo"
      v-on:update-status="updateStatus"
    />
  </div>
</template>

<script>
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
  },

  data() {
    return {
      todos: [],
    };
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

    // getTodos() {
    //   axios
    //     .get("/todos")
    //     .then((res) => {
    //       this.todos = res.data.todos;
    //     })
    //     .catch((err) => console.log(err));
    // },
  },

  //   created() {
  //     axios
  //       .get("/todos")
  //       .then((res) => {
  //         this.todos = res.data.todos;
  //       })
  //       .catch((err) => console.log(err));
  //   },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: rgb(26, 65, 175);
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
  margin: auto 3px auto 0;
  border-radius: 13px;
}
.btn:hover {
  background: #666;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  /* color: #ced7e0; */
}

#nav a.router-link-exact-active {
  color: #42abb9;
}
</style>

