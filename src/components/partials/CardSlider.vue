<script>
  import GameCard from './GameCard.vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    name: 'CardSlider',
    components: {
      Swiper,
      SwiperSlide,
      GameCard
    },
    props: {
    gamesRating: {
      type: Object,
      required: true
    }
  },
    setup() {
      return {
        modules: [ Pagination, Navigation],
      };
    },
  };
</script>
<template >
  <swiper
    :spaceBetween="30"
    :slidesPerView="1"
    
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 40,
      },

    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(game, index) in gamesRating" :key="index" > 
      <GameCard :game="game" class=" w-full" />
    </swiper-slide>
  </swiper>
</template>
<style lang="scss">
.mySwiper{
  max-width: 1200px ;
  
}
.swiper-slide {
  transition-duration: 500ms; /* Modifica la durata della transizione a 500ms (o qualsiasi altro valore desiderato) */
}
.disable-transition .swiper-slide {
  transition-duration: 0ms !important; /* Disabilita la transizione */
}
.swiper-pagination{
  display: none;
}
</style>
