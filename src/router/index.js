// import app
import HomeView from "../views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

// making routes
const routes = [
  // HomeView route
  {
    path: "/",
    component: HomeView,
    name: "HomeView",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
