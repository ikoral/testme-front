<template>
  <div class="detail">
    <div class="detail-view">
      <button
        class="no-underline inline-block text-sm px-6 py-2 leading-none border border-pink-500 rounded text-pink-500 bg-white hover:text-white hover:bg-indigo-600 hover:border-white mt-4 sm:mt-0"
        @click="closeIframe"
      >
        X
      </button>
      <iframe
        class="w-4/5 h-full my-2"
        src="https://www.youtube-nocookie.com/embed/RC-tmprXDnE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },

  methods: {
    closeIframe() {
      this.$emit("closeIframe");
    },
  },
};
</script>

<style>
.detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 90px 10px 10px;
  width: calc(100% - 5px);
  height: calc(100vh - 5px);
  background: rgba(0, 98, 255, 0.8);
}
.detail-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: calc(80vh - 50px);
  padding: 20px 0 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
</style>
