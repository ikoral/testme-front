<template>
  <div
    class="bg-gray-50 rounded-lg mx-1 my-0.5 px-2 py-4 border border-pink-100 shadow-sm flex justify-between text-gray-600"
    :class="{ 'is-complete': todo.status }"
  >
    <p>
      <input
        type="checkbox"
        :id="'check-' + todo.id"
        @change.prevent="markComplete"
        :checked="todo.status"
      />
      {{ todo.todo }}
    </p>
    <button @click="$emit('del-todo', todo.id)" class="del text-pink-600">
      <i class="fa fa-window-close"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete(e) {
      e.preventDefault();
      this.todo.status = !this.todo.status;
      this.$emit("update-status");
    },
  },
};
</script>

<style scoped>
.is-complete {
  text-decoration: line-through;
}
</style>
