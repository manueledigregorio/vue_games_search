import { createRouter, createWebHistory } from 'vue-router';
import Home from "./pages/Home.vue"


const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes:[

    {
      path: "/",
      name: "Home",
      component: Home,

    },

  ],

});

export { router };
