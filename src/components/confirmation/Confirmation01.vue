<template>
  <div class="confim-container flex fixed top-0 left-0 justify-center">
    <div
      class="confim-window flex flex-col justify-center items-center relative"
    >
      <div class="w- full h-2/3">
        <h2 class="text-lg font-bold text-indigo-800 text-center mb-2">
          Confirm
        </h2>
        <div class="flex justify-center">
          <p class="text-center mb-2">Are you sure?</p>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </div>
        <p class="text-center text-xs px-4">
          Do you really want to delete all your TODOS?
        </p>
      </div>
      <div class="w-full h-1/3 flex justify-between">
        <button
          id="btnCancelConfirm"
          @click="closeConfirm"
          class="text-center w-1/2 border-t border-r border-gray-300 hover:text-blue-600 font-semibold"
        >
          Cancel
        </button>
        <button
          id="btnYesConfirm"
          @click="approveConfirm"
          class="text-center w-1/2 border-t border-gray-300 hover:text-blue-600 font-semibold"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },

  methods: {
    closeConfirm() {
      this.$emit("close-confirm");
    },
    approveConfirm() {
      this.$emit("approve-confirm");
    },
  },
};
</script>

<style scoped>
.confim-container {
  padding: 120px 10px 10px;
  width: calc(100% - 5px);
  height: calc(100vh - 5px);
  background: rgba(165, 174, 189, 0.541);
}
.confim-window {
  width: 300px;
  height: 200px;
  padding: 20px 0 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
</style>
