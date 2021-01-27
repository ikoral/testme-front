<template>
  <div class="flex justify-center content-center">
    <div
      id="todos-list"
      class="p-2 my-4 flex flex-col w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 bg-white rounded-lg lg:border md:shadow-md"
    >
      <div v-for="todo in todos" :key="todo.id">
        <TodoItem
          :todo="todo"
          v-on:del-todo="$emit('del-todo', todo.id)"
          v-on:update-status="
            $emit('update-status', { status: todo.status, Id: todo.id })
          "
        />
      </div>
      <div class="flex items-center">
        <p
          class="w-28 border rounded border-gray-300 px-1 text-md py-1 mr-2 text-pink-500 hover:text-blue-700 mt-4"
        >
          <input
            type="checkbox"
            id="markAllTodos"
            @change.prevent="markAllDone"
            :checked="todosStatus"
            class="mr-2"
          />{{ setMarkText }}
        </p>

        <button
          id="btnDelAllTodos"
          class="w-28 px-2 text-md py-1 rounded mr-2 text-white bg-pink-600 hover:bg-pink-800 mt-4"
          @click.prevent="deleteAllTodos"
        >
          delete all
        </button>
      </div>
    </div>
    <Confirmation01
      v-if="showConfirm"
      v-on:close-confirm="closeConfirm"
      @approve-confirm="approveConfirm"
    />
  </div>
</template>
<script>
import TodoItem from "./TodoItem";
import Confirmation01 from "../confirmation/Confirmation01";

export default {
  name: "Todos",
  data() {
    return {
      markStatus: this.todosStatus,
      markText: "",
      showConfirm: false,
      areYouSure: false,
    };
  },
  components: {
    TodoItem,
    Confirmation01,
  },
  computed: {
    setMarkText: function () {
      return this.todosStatus ? "unmark all" : "mark all";
    },
  },
  props: ["todos", "todosStatus"],
  methods: {
    updateStatus(e) {
      e.preventDefault();
    },
    markAllDone() {
      this.markStatus = this.todosStatus;
      this.markStatus = !this.markStatus;
      this.$emit("mark-alldone", this.markStatus);
    },

    deleteAllTodos() {
      this.showConfirm = true;
    },

    closeConfirm() {
      this.showConfirm = false;
    },

    approveConfirm() {
      this.showConfirm = false;
      this.$emit("delete-alltodos");
    },
  },
};
</script>

<style>
</style>
