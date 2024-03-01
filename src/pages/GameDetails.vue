<script>
import { store } from "../data/store";
import axios from "axios";
export default {
  name: "GameDetails",
  data() {
    return {
      store,
      gameDetail:{}
    };
  },
  methods: {
    getGame(){
      axios.get(store.apiUrl + 'games/' + this.$route.params.gameSlug ,{
          params: {
            key: store.key,
          }
      })
      .then((results)=> {
        this.gameDetail = results.data;

        console.log(this.gameDetail);

      })
    }
  },
  mounted(){
    this.getGame();
  }
};
</script>

<template>
  <div class="bg-[#272727] w-full">
    <div class="relative">
      <img
        :src="gameDetail.background_image"
        class="h-[550px] w-full opacity-30 object-cover object-top"
        :alt="gameDetail.name"
      />
      <div class="separator absolute"></div>
    </div>

    <div class="max-w-7xl mx-auto flex justify-center relative bottom-[280px]">
      <div class="h-[330px] w-[600px]">
        <img
          :src="gameDetail.background_image"
          class="rounded-md w-full h-full"
          :alt="gameDetail.name"
        />
      </div>
      <div
        class="h-[330px] w-[500px] ml-10 card-custom flex flex-col bg-transparent p-6 rounded-lg text-white"
      >
        <div class="text-center text-3xl mb-2">
          <h1>{{ gameDetail.name }}</h1>
        </div>
        <div class="flex flex-col mt-6 rounded-xl bg-black bg-opacity-35">
        
          <h1 class=" text-center text-lg" >Disponibile per queste piattaforme</h1>
          <div class="flex justify-center">
            <div
            v-for="platforms in gameDetail.parent_platforms"
            :key="platforms.platform.id"
          >
            
            <div class="m-2">
              <img
                v-if="platforms.platform.slug == 'pc'"
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/000000/steam.png"
                alt="steam"
              />
              <img
                v-else-if="platforms.platform.slug == 'playstation'"
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/000000/play-station.png"
                alt="play-station"
              />
              <img
                v-else-if="platforms.platform.slug == 'xbox'"
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/000000/xbox.png"
                alt="xbox"
              />
              <img
                v-else-if="platforms.platform.slug == 'nintendo'"
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/nintendo-switch-logo.png"
                alt="nintendo-switch-logo"
              />
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.separator {
  width: 0;
  height: 0;
  border-right: 100vw solid transparent;
  border-bottom: 11.8vw solid #272727;
  margin-top: -11.7vw;
}

.card-custom {
  backdrop-filter: blur(60px) saturate(100%);
}
</style>
