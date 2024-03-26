<script>
import axios from "axios";
import { store } from "../data/store";
import { router } from "../router";
import GameCard from "../components/partials/GameCard.vue";
import Loader from "../components/partials/Loader.vue";
export default {
  name: "Search",

  components:{
    GameCard,
    Loader,
  },

  data() {
    return {
      store,
      router,
      loading: true,
    };
  },
  methods: {
    getSearch() {
      axios
        .get(store.apiUrl + 'games', {
          params: {
            search: this.$route.params.searchQuery,
            key: store.key
          }
    })
        .then((results) => {
          store.arrayResults = results.data.results;
          console.log(store.arrayResults);
        })
        .finally(() => {
          this.loading = false;
        });
    },
   
  },
  mounted() {
    this.getSearch();
  },
};
</script>

<template>
  <div class="bg-[#272727] min-h-screen w-full">
    <Loader v-if="loading"/>
    <div v-else class=" pt-[135px] px-4">
      <div
        class="grid pb-10 grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:px-[50px] xl:px-[100px] 2xl:px-[150px]"
      >
        <GameCard :game="game" v-for="(game, index) in store.arrayResults" :key="index" class="pb-5"/>
        
      </div>
    </div>
  </div>
</template>

<style>
</style>