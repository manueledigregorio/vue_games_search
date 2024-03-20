<script>
import axios from "axios";
import { store } from "../../data/store";
import { router } from "../../router";

export default {
  name: "Header",
  data() {
    return {
      router,
      store,
      isOpen: false,
      scrolled: false,
      hidden: false,
      searchQuery: "",
    };
  },
  methods: {
    goSearch() {
      this.$router.replace({
        name: "Search",
        params: {
          searchQuery: this.searchQuery,
        },
      });
    },
    goToCategory(categoryQuery){
      this.$router.push({
        name: "Category",
        params: {
          categoryQuery: categoryQuery,
        }

      })
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },

    checkIsMobile() {
      this.isHidden = window.innerWidth <= 720; 
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.checkIsMobile);
    this.checkIsMobile(); 
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.checkIsMobile);
  },
};
</script>

<template>
  <header
    :class="{'scrolled': scrolled }" class="sm:h-[80px] w-screen z-50 top-0 left-0 fixed flex justify-between items-center pb-2"
  >
    <!-- Start Left Header -->
    <div class="sm:flex items-center w-full mx-4">
      <div class="flex items-center">
        <div class="w-16 ml-3">
          <router-link :to="{ name: 'Home' }">
            <img src="../../../public/logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="p-2">
          <div class="bg-[#1C1D40] w-1 h-[60px]"></div>
        </div>
        <div id="app" class="relative inline sm:block">
          <button
            @click="isOpen = !isOpen"
            class="text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span class="text-white text-lg">CATEGORIES</span>
            <i
              :class="{ 'fa-chevron-up': isOpen, 'fa-chevron-down': !isOpen }"
              class="fa p-1 text-white"
            >
            </i>
          </button>
          <ul
            v-show="isOpen"
            @click="isOpen = false"
            class="absolute text-gray-700 pt-1 bg-white max-h-56 overflow-auto border rounded mt-1"
          >
            <li v-for="(tag, index) in store.genreResults" :key="index">
              <a
                href="#"
                @click="goToCategory(tag.slug)"
                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >{{ tag.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Input_bar -->
      <div
        :class="{'hidden': isHidden}"
        class="flex rounded-[16px] bg-white focus-within:border-4 focus-within:border-[#B536CD] py-2 px-3 mt-1 sm:mt-0"
      >
        <div class="pe-2 bg-white">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="goSearch()"
          class="focus:outline-none"
          placeholder="Explore New Games"
        />
      </div>
      <!-- </div> -->
    </div>
    <!-- END Left Header -->

    <!-- Start Center Header  -->
    <div class="hidden"></div>
    <!-- END Center Header-->
  </header>
</template>
<style scoped lang="scss">
.scrolled{
  background-color: rgba($color: #000000, $alpha: 0.75);
  transition: background-color 0.3s, box-shadow 0.3s;
  backdrop-filter: blur(60px) saturate(100%);
}
.hidden{
  display: none;
}
</style>