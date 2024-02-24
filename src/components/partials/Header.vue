<script>
import { store } from '../../data/store';
import { router } from '../../router';

export default {
  name: "Header",
  data() {
    return {
      router,
      store,
      isOpen: false,
    };
  },
  methods:{
    goSearch(){
      this.$router.replace({
        path: "/search",
      })
    },
  },
};
</script>

<template>

  <div class="h-[80px] w-full z-50 absolute top-0 flex justify-between items-center">

    <!-- Start Left Header -->
    <div class="flex items-center">
      <div class="w-16 ml-3">
        <router-link :to="{name:'Home'}">
          <img src="../../../public/logo.png" alt="logo"  />
        </router-link>
        
      </div>
      <div class="flex-grow p-2">
        <div class="bg-[#1C1D40] w-1 h-[60px]"></div>
      </div>
      <div id="app" class="relative">
        <button
          @click="isOpen = !isOpen"
          class=" text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span class="text-white text-lg">CATEGORIES</span>
          <i
            :class="{ 'fa-chevron-up': isOpen, 'fa-chevron-down': !isOpen }"
            class="fa p-1 text-white">
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

      <div class="flex rounded-[16px] bg-white focus-within:border-4 focus-within:border-[#B536CD]  py-2 px-3">
        <div class="pe-2 bg-white ">
          <i class="fa-solid fa-magnifying-glass "></i>
        </div>
        <input type="text" v-model="store.search" @keyup.enter="goSearch()" class="focus:outline-none " placeholder="Explore New Games">
      </div>
    </div>
    <!-- END Left Header -->


    <!-- Start Center Header  -->
    <div class="">
      
    </div>
    <!-- END Center Header-->
  </div>

</template>
<style scoped lang="scss">
</style>