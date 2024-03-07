import { createRouter, createWebHistory } from 'vue-router';
import Home from "./pages/Home.vue"
import Search from './pages/Search.vue';
import GameDetails from './pages/GameDetails.vue';
import Error404 from './pages/Error404.vue';
import Category from './pages/Category.vue';


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
      path: "/search/:searchQuery",
      name: "Search",
      component: Search,
      meta: {
        reload: true,
      },

    },
    {
      path: "/category/:categoryQuery",
      name: "Category",
      component: Category,
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
