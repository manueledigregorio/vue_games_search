<script>
import Header from './components/partials/Header.vue';

  export default {
    name:'App',
    components:{
      Header
    }
  }
</script>

<template>
  
  <Header/>
  <main class=" ">
    <RouterView />
  </main>

</template>

<style lang="scss">

</style>
