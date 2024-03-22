<script>
import Header from './components/partials/Header.vue';
import { store } from './data/store';
import Footer from './components/partials/Footer.vue';

import axios from 'axios';
  export default {
    name:'App',
    data() {
      return {
        store
      }
    },
    components:{
      Header,
      Footer
    },
    

    mounted(){
    
      axios.get(store.apiUrl + "genres", {
         params: {
          key: store.key
         }

      })

      .then((results) => {
          store.genreResults = results.data.results;
          console.log(store.genreResults);
        });
    
  }
  }
</script>

<template>
  
  <Header/>
  <main class=" ">
    <RouterView :key="this.$route.fullPath" />
  </main>
  <Footer/>

</template>

<style lang="scss">

</style>
