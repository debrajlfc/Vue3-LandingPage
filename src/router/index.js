import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import CenTre from "@/components/Centre.vue";
import InformaTion from "@/components/Information.vue";

const routes = [
  {
    path: "/",
    name: "CenTre",
    component: CenTre,
  },
  {
    path: "/check",
    name: "Home",
    component: Home,
  },
  {
    path: "/information",
    name: "InformaTion",
    component: InformaTion,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
