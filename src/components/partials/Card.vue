<script>
export default {
  name: "Card",

  methods: {
    goToGame(game) {
      this.$router.push({
        name: "GameDetails",
        params: { gameSlug: game.slug },
      });
    },
  },
};
</script>

<template>
  <div class="h-[240px] my-5 w-full">
    <img
      :src="game.background_image"
      alt="{{ game.name }}"
      @click="goToGame(game)"
      class="h-full w-full object-cover rounded-md"
    />
    <h1 class="text-white text-center text-xl">{{ game.name }}</h1>
  </div>
</template>

<style>
</style>