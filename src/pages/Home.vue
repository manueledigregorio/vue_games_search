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
    <div class=" py-4 max-w-7xl mx-auto ">
      <h1 class=" text-3xl sm:text-4xl font-semibold text-orange-500 text-center pb-6 "> Bestseller</h1>
      <CardSlider :gamesRating="gamesRating"/>
    </div>
    <div class=" bg-slate-950 h-[145px] w-full mt-12">
      <div class="flex justify-center ite">
        <div> <i class="fa-regular fa-cloud-arrow-down"></i> </div>
      </div>
    </div>
  </div>
  
</template>

<style>

</style>