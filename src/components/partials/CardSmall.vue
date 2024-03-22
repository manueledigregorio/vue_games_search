
<script>
export default {
name: 'CardSmall',
props: {
    game: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToGame(game) {
      this.$router.push({
        name: "GameDetails",
        params: { gameSlug: game.slug },
      });
    }
  }
}
</script>

<template>
  <!-- component -->
  <div class="da relative overflow-hidden">
  <div class="absolute inset-0 bg-center"></div>
  <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div class="z-10 h-40vw w-64vw sm:h-56  overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img :src="game.background_image" @click="goToGame(game)" class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="{{ game.name }}" />
    </div>
    <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 class="text-2xl font-bold text-white shadow-xl">{{ game.name }}</h1>
    </div>
  </div>
</div>

</template>


<style>

</style>