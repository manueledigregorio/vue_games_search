<script>
import { store } from "../data/store"
import axios from 'axios';
import Hero from '../components/partials/Hero.vue';
import GameCard from "../components/partials/GameCard.vue";
import CardSlider from "../components/partials/CardSlider.vue";

export default {
 name:'Home',
 data() {
  return {
    store,
    gamesRating:{}
  }
 },
 components:{
  Hero,
  GameCard,
  CardSlider
 },
 methods: {
  getGameRating(){
    axios.get(store.apiUrl + "games", {
      params: {
        key: store.key,
        page_size:12

      },
    })
    .then((results) => {
      this.gamesRating = results.data.results
      console.log(this.gamesRating);
    })
  }
 },
 mounted() {
  this.getGameRating();
 },

}
</script>

<template>
  <div class="bg-[#272727] min-h-screen w-full">
    <Hero/>
  <div class=" pt-4 px-4">
    <h1 class="text-2xl font-semibold text-orange-500 lg:pl-16"> Top giochi </h1>
    <CardSlider :gamesRating="gamesRating"/>
  </div>
  </div>
  
</template>

<style>

</style>