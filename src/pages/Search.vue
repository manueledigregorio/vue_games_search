<script>
import axios from "axios";
import { store } from "../data/store";
import { router } from "../router";
import GameCard from "../components/partials/GameCard.vue";
export default {
  name: "Search",

  components:{
    GameCard,
  },

  data() {
    return {
      store,
      router,
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
        });
    },
    goToGame(game) {
      this.$router.push({
        name: "GameDetails",
        params: { gameSlug: game.slug },
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
    <div class="pt-[135px] px-4">
      <div
        class="grid pb-10 grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:px-[50px] xl:px-[100px] 2xl:px-[150px]"
      >
        <GameCard :game="game" v-for="(game, index) in store.arrayResults" :key="index"/>
        
      </div>
    </div>
  </div>
</template>

<style>
</style>