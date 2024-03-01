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
      searchQuery: "",
    };
  },
  methods:{
    goSearch(){
      this.$router.replace({
        name: "Search",
        params: {
          searchQuery: this.searchQuery
        },
        
      })
    },
  },
};
</script>

<template>

  <div class="sm:h-[80px] w-full z-50 top-0 left-0 fixed flex justify-between items-center pb-2">

    <!-- Start Left Header -->
    <div class="sm:flex items-center w-full mx-4">
      
      <div class="flex items-center">
        <div class="w-16 ml-3 ">
          <router-link :to="{name:'Home'}">
            <img src="../../../public/logo.png" alt="logo"  />
          </router-link>
        </div>
        <div class=" p-2">
          <div class=" bg-[#1C1D40] w-1 h-[60px]"></div>
        </div>
        <div id="app" class="relative inline sm:block">
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
      </div>

      <!-- <div class=""> -->
      <div class="flex rounded-[16px] bg-white focus-within:border-4 focus-within:border-[#B536CD] py-2 px-3 mt-1 sm:mt-0">
        <div class="pe-2 bg-white">
          <i class="fa-solid fa-magnifying-glass "></i>
        </div>
        <input type="text" v-model="searchQuery" @keyup.enter="goSearch()" class="focus:outline-none" placeholder="Explore New Games">
      </div>
      <!-- </div> -->
    </div>
    <!-- END Left Header -->


    <!-- Start Center Header  -->
    <div class="hidden">
      
    </div>
    <!-- END Center Header-->
  </div>

</template>
<style scoped lang="scss">
</style>