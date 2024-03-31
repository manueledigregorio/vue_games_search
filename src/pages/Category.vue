
<script>
import GameCard from "../components/partials/GameCard.vue"
import axios from 'axios';
import { store } from '@/data/store';
import Loader from "../components/partials/Loader.vue";
export default {
  name:'Category',
  data() {
    return {
      store,
      categoryGame:[],
      loading: true
    }
  },
  components:{
    GameCard,
    Loader
  },

  methods: {
    getGenres(){
      axios.get(store.apiUrl + 'games' ,{

        params: {
          key: store.key,
          genres: this.$route.params.categoryQuery,
        }
      })
      .then((results)=> {
        this.categoryGame = results.data;
        console.log(this.categoryGame);
      })
      .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.getGenres();
  }
}
</script>

<template>
     <div class="bg-[#272727] min-h-screen w-full">
      <Loader v-if="loading"/>
    <div v-else class="pt-[135px] px-4 py-4">
      <div
        class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:px-[50px] xl:px-[100px] 2xl:px-[150px]"
      >
        <GameCard :game="game" v-for="(game, index) in categoryGame.results" :key="index"/>
      </div>
    </div>
  </div>
</template>

<style>

</style>