<script>
import { store } from "../data/store";
import axios from "axios";
import Hero from "../components/partials/Hero.vue";
import GameCard from "../components/partials/GameCard.vue";
import CardSlider from "../components/partials/CardSlider.vue";
import CardSmall from "../components/partials/CardSmall.vue";
import Loader from "@/components/partials/Loader.vue";

export default {
  name: "Home",
  data() {
    return {
      store,
      gamesRating: {},
      gamesIndie: {},
      loading: true,
    };
  },
  components: {
    Hero,
    GameCard,
    CardSlider,
    CardSmall,
    Loader,
  },
  methods: {
    getGameRating() {
      axios
        .get(store.apiUrl + "games", {
          params: {
            key: store.key,
            page_size: 12,
          },
        })
        .then((results) => {
          this.gamesRating = results.data.results;
          console.log(this.gamesRating);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getGameIndie() {
      axios
        .get(store.apiUrl + "games", {
          params: {
            key: store.key,
            page_size: 4,
            genres: "indie",
            ordering: "-rating",
          },
        })
        .then((results) => {
          this.gamesIndie = results.data.results;
          console.log(this.gamesIndie);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getGameRating();
    this.getGameIndie();
  },
};
</script>

<template>
  <div class="bg-[#272727] min-h-screen pb-20 w-full">
    <Loader v-if="loading" />
    <div v-else>
      <Hero />
      <div class="py-4 max-w-7xl mx-auto">
        <h1
          class="text-3xl sm:text-4xl font-semibold text-orange-500 text-center pb-6"
        >
          Bestseller
        </h1>
        <CardSlider :gamesRating="gamesRating" />
      </div>
      <div
        class="bg-zinc-900 py-4 md:py-6 w-full mt-12 md:flex flex-wrap justify-center md:justify-around items-center"
      >
        <div class="flex justify-center">
          <i class="fa-solid fa-cloud-arrow-down text-white text-4xl"></i>
          <div class="ml-3">
            <h2 class="text-orange-500 text-2xl font-semibold">Super fast</h2>
            <p class="text-zinc-500 text-sm">Instant digital download</p>
          </div>
        </div>
        <div
          class="md:h-[75px] md:w-[1px] h-[1px] w-2/3 mx-auto my-6 bg-zinc-600 md:m-0"
        ></div>
        <div class="flex justify-center">
          <i class="fa-solid fa-user-shield text-white text-4xl"></i>
          <div class="ml-3">
            <h2 class="text-orange-500 text-2xl font-semibold">
              Reliable & safe
            </h2>
            <p class="text-zinc-500 text-sm">Over 10,000 games</p>
          </div>
        </div>
        <div
          class="md:h-[75px] md:w-[1px] h-[1px] w-2/3 mx-auto bg-zinc-600 my-6 md:m-0"
        ></div>
        <div class="flex justify-center">
          <i class="fa-regular fa-comments text-white text-4xl"></i>
          <div class="ml-3">
            <h2 class="text-orange-500 text-2xl font-semibold">
              Customer support
            </h2>
            <p class="text-zinc-500 text-sm">Human support 24/7</p>
          </div>
        </div>
      </div>
      <div
        class="sm:bg-[url('../../public/deadcells.png')] bg-none bg-no-repeat bg-contain p-12 relative flex justify-center items-center md:mt-28"
      >
        <div class="flex justify-center">
          <div class="mr-6 w-[360px] h-[590px] hidden 2xl:block">
            <img
              src="../../public/beheaded.png"
              class="w-full h-full object-cover"
              alt="beh ded"
            />
          </div>

          <div>
            <h1 class="mb-12 text-4xl text-orange-500 font-medium">
              Top Indie Games
            </h1>
            <div class="grid sm:grid-cols-2 gap-4">
              <CardSmall
                :game="game"
                v-for="(game, index) in gamesIndie"
                :key="index"
              />
              <!-- component -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>