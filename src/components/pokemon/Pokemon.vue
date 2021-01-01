<template>
  <div
    class="flex flex-col justify-center items-center p-4 bg-gradient-to-r pokebox"
  >
    <h1 class="text-xl my-6">Pokemon's Catalog</h1>
    <p class="text-xs">apiUrl: "https://pokeapi.co/api/v2/pokemon/",</p>
    <p class="mb-6 text-xs">
      imageUrl: "https://pokeres.bastionbot.org/images/pokemon/",
    </p>
    <PokemonSearch :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl" />
    <PokemonList
      :imageUrl="imageUrl"
      :apiUrl="apiUrl"
      @setPokemonUrl="setPokemonUrl"
    />
    <PokemonDetail
      v-if="showDetail"
      :pokemonUrl="pokemonUrl"
      :imageUrl="imageUrl"
      @closeDetail="closeDetail"
    />
  </div>
</template>

<script>
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import PokemonSearch from "./PokemonSearch";
export default {
  name: "Pokemon",
  data: () => {
    return {
      imageUrl: "https://pokeres.bastionbot.org/images/pokemon/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false,
    };
  },
  components: {
    PokemonList,
    PokemonDetail,
    PokemonSearch,
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = "";
      this.showDetail = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Acme");
.pokebox {
  min-height: calc(100vh - 20px);
  background: radial-gradient(#fff, #bfa2ca);
  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;
}
</style>