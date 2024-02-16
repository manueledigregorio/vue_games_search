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

<template></template>

<style>
</style>