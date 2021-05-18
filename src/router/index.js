import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Report from "../views/Report/Report.vue";
import PushNotification from "../views/PushNotification/PushNotification.vue";
/* Dashboard */
import GuestAccount from "../views/Dashboard/GuestAccount.vue";
import EditGuestAccount from "../views/Dashboard/EditGuestAccount.vue";
/* CMS */
import Onboarding from "../views/CMS/Onboarding.vue";
import Grouping from "../views/CMS/Grouping.vue";
import SplashScreen from "../views/CMS/SplashScreen.vue";
import Announcement from "../views/CMS/Announcement.vue";
// import Guide from "../views/CMS/Guide.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
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
  // Dashboard
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
  // CMS
  {
    path: "/cms/onboarding",
    name: "Onboarding",
    component: Onboarding,
  },
  {
    path: "/cms/grouping",
    name: "Grouping",
    component: Grouping,
  },
  {
    path: "/cms/splash-screen",
    name: "SplashScreen",
    component: SplashScreen,
  },
  {
    path: "/cms/announcement",
    name: "Announcement",
    component: Announcement,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
