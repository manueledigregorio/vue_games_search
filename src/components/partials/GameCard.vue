<template>
  <div
    class="h-[240px] mb-6 w-full transition-transform duration-300 transform hover:scale-105"
  >
    <img
      :src="game.background_image"
      alt=""
      @click="goToGame(game)"
      class="h-full w-full object-cover rounded-md"
    />
    <h1 class="text-white text-center text-xl">{{ game.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
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
