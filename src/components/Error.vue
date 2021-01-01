<template>
  <div
    class="text-white text-s px-4 py-3 border-0 rounded relative mx-4 my-2 bg-pink-600"
  >
    <span class="text-l inline-block mr-5 align-middle">
      <i class="fa fa-bell" />
    </span>
    <span class="inline-block align-middle mr-8">
      <b class="capitalize">Ooops!</b> {{ error }}
    </span>
    <button
      class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-6 outline-none focus:outline-none"
      @click.prevent="$emit('close-error')"
    >
      <span>×</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ["error"],
};
</script>

<style>
</style>