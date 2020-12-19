<template>
  <form class="flex justify-center content-center h-screen">
    <div
      class="absolute w-4/5 md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-24"
    >
      <div class="flex justify-center">
        <img class="w-20 h-20 mt-2" src="../assets/chinook.png" />
      </div>
      <div class="px-12 py-10">
        <div class="w-full mb-2">
          <div class="flex items-center">
            <i
              class="ml-3 fill-current text-gray-400 text-xs z-10 far fa-user"
            ></i>
            <input
              type="email"
              placeholder="Email"
              class="-mx-6 px-8 w-full border rounded px-3 py-1 text-gray-700"
            />
          </div>
        </div>
        <div class="w-full mb-2">
          <div class="flex items-center">
            <i
              class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"
            ></i>
            <input
              type="password"
              placeholder="password"
              class="-mx-6 px-8 w-full border rounded px-3 py-1 text-gray-700"
            />
          </div>
        </div>
        <div class="mt-8 flex justify-between">
          <!-- <div class="flex items-center">
            <input type="checkbox" class="w-4 h-4 mr-2" />
            <span class="text-xs text-gray-700">Remember Me</span>
          </div> -->
          <div>
            <button
              id="signin"
              type="text"
              class="bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 hover:text-pink-500 hover:bg-white"
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>