import { createRouter, createWebHistory } from 'vue-router';
import Home from "./pages/Home.vue"
import Search from './pages/Search.vue';
import GameDetails from './pages/GameDetails.vue';
import Error404 from './pages/Error404.vue';


const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes:[

    {
      path: "/",
      name: "Home",
      component: Home,

    },
    {
      path: "/search",
      name: "Search",
      component: Search,

    },
    {
      path: "/game/:gameSlug",
      name: "GameDetails",
      component: GameDetails,

    },
    {
      path: "/:pathMatch(.*)*",
      component: Error404,
    },

  ],

});

export { router };
