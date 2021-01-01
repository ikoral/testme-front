<template>
  <div class="w-full flex flex-col items-center">
    <Error v-show="error" :error="error" @close-error="error = ''" />
    <div class="searchbar">
      <form @submit.prevent="setPokemonUrl">
        <input
          type="text"
          placeholder="exact name lower-case"
          v-model="searchValue"
          class="text-gray-500"
        />
      </form>
      <i class="fa fa-search" @click="setPokemonUrl"></i>
    </div>
  </div>
</template>

<script>
import Error from "../Error";
export default {
  name: "PokemonSearch",
  props: ["apiUrl"],

  data: () => {
    return {
      searchValue: "",
      error: "",
    };
  },
  components: {
    Error,
  },

  methods: {
    setPokemonUrl() {
      if (this.searchValue !== "") {
        this.$emit("setPokemonUrl", this.apiUrl + this.searchValue);
      } else {
        this.error = "Please enter exact name of pokemon!";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbar {
  position: relative;
  width: 100%;
  max-width: 510px;
  padding-bottom: 20px;
  input {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 40px 10px 10px;
    width: calc(100% - 50px);
    font-size: 1rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.25rem;
    color: #0a2e50;
    cursor: pointer;
  }
}
</style>