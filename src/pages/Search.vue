<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
name:'Search',

  data() {
    return {
      store
    }
  },
  methods:{
    getSearch(){
      axios.get(store.apiUrl + store.apiSearch + store.search)
       .then(results => {
         store.arrayResults = results.data.results;
         console.log(store.arrayResults);
       })
    }

  },
  mounted(){
    this.getSearch();
  },
}

</script>

<template>
  <div class="bg-[#272727] min-h-screen w-full">

    <div class="pt-[135px] px-4">
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:px-[50px] xl:px-[100px] 2xl:px-[150px]">
        <div v-for="(game, index) in store.arrayResults" :key="index" class="h-[240px] my-5 w-full">
          <router-link :to="{ name:'GameDetails' ,params:{gameId: game.id} }">
            <img :src="game.background_image" alt="" class="h-full w-full object-cover rounded-md">
            <h1 class="text-white text-center text-xl">{{ game.name }}</h1>
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<style>
</style>