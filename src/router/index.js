import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Report from "../views/Report/Report.vue";
import PushNotification from "../views/PushNotification/PushNotification.vue";
import GuestAccount from "../views/Dashboard/GuestAccount.vue";
import EditGuestAccount from "../views/Dashboard/EditGuestAccount.vue";

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
    path: "/dashboard/guest-account",
    name: "GuestAccount",
    component: GuestAccount,
  },
  {
    path: "/dashboard/guest-account/edit",
    name: "EditGuestAccount",
    component: EditGuestAccount,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
