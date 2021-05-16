import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Report from "../views/Report/Report.vue";
import PushNotification from "../views/PushNotification/PushNotification.vue";
import DetailAccount from "../views/Dashboard/DetailAccount.vue";

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
  {
    path: "/push-notification",
    name: "PushNotification",
    component: PushNotification,
  },
  {
    path: "/dashboard/detail-account",
    name: "DetailAccount",
    component: DetailAccount,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
