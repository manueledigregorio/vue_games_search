<script>
import { store } from "../data/store";
import axios from "axios";
export default {
  name: "GameDetails",
  data() {
    return {
      store,
      gameDetail: {},
      isVisible: false,
      isFirstClick: true,
    };
  },
  methods: {
    getGame() {
      axios
        .get(store.apiUrl + "games/" + this.$route.params.gameSlug, {
          params: {
            key: store.key,
          },
        })
        .then((results) => {
          this.gameDetail = results.data;

          console.log(this.gameDetail);
        });
    },
    getEmoji(title) {
      if (title == "exceptional") {
        return "&#128525;";
      } else if (title == "recommended") {
        return "&#129392;";
      } else if (title == "meh") {
        return "&#128528;";
      } else {
        return "&#129324;";
      }
    },
    toggleVisibility() {
      if (this.isFirstClick) {
        this.isVisible = true;
        this.isFirstClick = false;
      }
    },
    toggleReadMore() {
      var content = document.querySelector(".read-more-content");
      var toggleButton = document.querySelector(".read-more-toggle");

      // cambia l'altezza massima del paragrafo
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        toggleButton.innerHTML = "Read more...";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        toggleButton.innerHTML = "Read less";
      }
    },
  },
  computed: {
    formattedDate() {
      if (this.gameDetail.updated) {
        return this.gameDetail.updated.split("T")[0];
      } else {
        return "Data non disponibile";
      }
    },
    addVirgule() {
      if (this.gameDetail.tags) {
        return this.gameDetail.tags
          .slice(0, 3)
          .map((tag) => tag.name)
          .join(", ");
      }
      return "Non disponibile";
    },
  },
  mounted() {
    this.getGame();
  },
};
</script>

<template>
  <div class="bg-[#272727] min-h-screen w-full">
    <div class="relative h-[795px] lg:h-[670px]">
      <img
        :style="{
          backgroundImage:
            'url(' + gameDetail.background_image_additional + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
        class="h-[500px] w-full opacity-70"
        :alt="gameDetail.name"
      />
      <div class="separator absolute"></div>
      <div
        class="w-full sm:max-w-7xl lg:max-w-6xl mx-auto flex lg:justify-center lg:flex-row items-center flex-col relative bottom-64"
      >
        <div class="sm:h-[330px] h-[280px] w-full sm:w-[620px]">
          <img
            :src="gameDetail.background_image"
            class="rounded-md w-11/12 mx-auto sm:m-0 sm:w-full h-full"
            :alt="gameDetail.name"
          />
        </div>
        <div
          class="h-[330px] px-5 lg:ml-14 lg:backdrop-filter lg:backdrop-blur-[60px] lg:backdrop-saturate-100 flex-col lg:p-6 rounded-lg text-white w-full lg:w-1/2"
        >
          <div class="text-2xl lg:text-3xl mt-4 mb-2">
            <h1 class="font-semibold">{{ gameDetail.name }}</h1>
          </div>
          <p class="text-gray-400">Released: {{ gameDetail.released }}</p>
          <div
            class="flex flex-col mt-6 lg:rounded-xl rounded-md border border-white border-opacity-25 shadow-sm lg:border lg:border-none lg:shadow-none bg-black bg-opacity-35"
          >
            <h1 class="text-center text-lg" v-if="gameDetail.parent_platforms">
              Disponibile per queste piattaforme
            </h1>
            <h1 class="text-center text-lg px-40" v-else>
              Nessuna piattaforma disponibile
            </h1>
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

          <div class="flex justify-center mt-6">
            <div v-for="rating in gameDetail.ratings" :key="rating.id">
              <div
                class="bg-transparent transition-colors p-1 flex flex-col items-center"
                @click="toggleVisibility"
              >
                <span
                  class="text-2xl hover:text-3xl duration-300 active:text-3xl"
                  :class="{ 'text-3xl': isVisible }"
                  v-html="getEmoji(rating.title)"
                ></span>
                <div v-if="isVisible">
                  <p class="text-sm">{{ rating.percent }}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sm:max-w-7xl lg:flex sm:flex-col lg:flex-row text-white lg:mx-auto"
    >
      <div class="lg:w-1/2">
        <div class="p-5">
          <h1 class="text-3xl pb-4 font-semibold text-orange-500">About</h1>
          <p
            v-if="gameDetail.description"
            class="read-more-content text-gray-300 text-sm leading-6"
            v-html="gameDetail.description"
          ></p>
          <span
            class="read-more-toggle underline underline-offset-2 text-gray-400"
            @click="toggleReadMore()"
            >Read more...</span
          >
        </div>
      </div>
      <div class="lg:w-1/2 lg:p-5">
        <div class="lg:pl-14 pl-5 pt-[52px]">
          <div class="table-row-group">
            <div class="table-row">
              <div class="table-cell sm:pr-9 align-middle text-gray-300">
                Rating:
              </div>
              <div class="table-cell align-middle">
                {{ gameDetail.rating }} / 5.00
              </div>
            </div>

            <div class="table-row" v-if="gameDetail.developers">
              <div class="table-cell sm:pr-9 align-middle text-gray-300">
                Developer:
              </div>
              <div
                class="table-cell align-middle pr-9"
                v-if="gameDetail.developers.length > 0"
              >
                {{ gameDetail.developers[0].name }}
              </div>
            </div>

            <div class="table-row" v-if="gameDetail.developers">
              <div class="table-cell sm:pr-9 align-middle text-gray-300">
                Publisher:
              </div>
              <div
                class="table-cell align-middle pr-9"
                v-if="gameDetail.publishers && gameDetail.publishers.length > 0"
              >
                {{ gameDetail.publishers[0].name }}
              </div>
              <span v-else>Nessun Publisher</span>
            </div>

            <div class="table-row">
              <div class="table-cell sm:pr-9 align-middle text-gray-300">
                Last Update:
              </div>
              <div class="table-cell align-middle">{{ formattedDate }}</div>
            </div>
            <div class="table-row">
              <div class="table-cell sm:pr-9 align-middle text-gray-300">
                Genre:
              </div>
              <div class="table-cell align-middle">
                {{ addVirgule }}
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell sm:pr-9 align-middle text-gray-300">
                Site web:
              </div>
              <div class="table-cell align-middle cursor-pointer">
                <a
                  class="underline underline-offset-2 hover:text-orange-500 duration-100 text-sm"
                  :href="gameDetail.website"
                  target="_blank"
                  >{{ gameDetail.website }}</a
                >
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
  border-bottom: 9.8vw solid #272727;
  margin-top: -9.7vw;
}

.read-more-content {
  max-height: 198px; /* altezza massima iniziale del paragrafo */
  overflow: hidden; /* nasconde il testo che supera l'altezza massima */
  transition: max-height 0.3s ease; /* aggiungi una transizione fluida */
}

.read-more-toggle {
  cursor: pointer;
}
</style>
