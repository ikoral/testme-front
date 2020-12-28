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
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoItem,
  },
  props: ["todos"],
  methods: {
    updateStatus(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
</style>