<template>
  <div>
    <form
      @submit.prevent="addTodo"
      id="form-add-todo"
      class="flex justify-center content-center"
    >
      <div
        class="p-2 my-4 flex justify-between relative w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 bg-white rounded-lg lg:border md:shadow-md"
      >
        <input
          type="text"
          v-model="title"
          name="title"
          placeholder="Add Todo..."
          class="px-8 w-full border rounded px-3 py-1 text-gray-700"
        />
        <input
          type="submit"
          value="Submit"
          id="btn-add-todo"
          class="bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 ml-1 hover:text-pink-500 hover:bg-white"
        />
      </div>
    </form>
  </div>
</template>

<script>
//import { v4 as uuidv4 } from 'uuid';
// FIX: only logged in users can clik todo
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },

  methods: {
    addTodo(e) {
      e.preventDefault();

      //Send up to parent
      this.$emit("add-todo", this.title);

      this.title = "";
    },
  },
};
</script>

<style scoped>
</style>
