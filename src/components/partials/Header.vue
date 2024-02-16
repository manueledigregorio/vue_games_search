<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<template>

  <div class="h-[80px] w-full z-50 absolute top-0 flex justify-between items-center bg-cyan-700">

    <!-- Start Left Header -->
    <div class="flex items-center">
      <div class="w-16">
        <img src="../../../public/logo.png" alt="logo" />
      </div>
      <div class="flex-grow p-2">
        <div class="bg-[#1C1D40] w-1 h-[60px]"></div>
      </div>
      <div id="app" class="relative">
        <button
          @click="isOpen = !isOpen"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>CATEGORIES</span>
          <i
            :class="{ 'fa-chevron-up': isOpen, 'fa-chevron-down': !isOpen }"
            class="fa p-1">
          </i>
        </button>
        <ul
          v-show="isOpen"
          @click="isOpen = false"
          class="absolute text-gray-700 pt-1 bg-white border rounded mt-1"
        >
          <li>
            <a
              href="#"
              class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              >Option 1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              >Option 2</a
            >
          </li>
          <li>
            <a
              href="#"
              class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              >Option 3</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- END Left Header -->


    <!-- Start Center Header  -->
    <div class="">
      <div class="flex rounded-[16px] bg-white focus-within:border-4 focus-within:border-[#B536CD]  py-2 px-3">
        <div class="pe-2 bg-white ">
          <i class="fa-solid fa-magnifying-glass "></i>
        </div>
        <input type="text" class="focus:outline-none " placeholder="Explore New Games">
      </div>
    </div>
    <!-- END Center Header-->



    <!-- Start Right Header -->
    <div class="">
      destra
    </div>
    <!-- End Right Header -->


  </div>

</template>
<style scoped lang="scss">
</style>