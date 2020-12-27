<template>
  <div id="submit-todo">
    <form @submit.prevent="addTodo" id="form-add-todo">
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Add Todo..."
      />
      <input type="submit" value="Submit" class="btn" id="btn-add-todo" />
    </form>
  </div>
</template>

<script>
//import { v4 as uuidv4 } from 'uuid';
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
#submit-todo {
  margin: auto;
  max-width: 600px;
}

#form-add-todo {
  display: flex;
  margin-top: 40px;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
  margin: auto 3px;
  border-radius: 10px;
  border: 1px solid rgb(189, 187, 187);
}

input[type="submit"] {
  flex: 2;
}
</style>