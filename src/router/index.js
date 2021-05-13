import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Report from "../views/Report/Report.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
