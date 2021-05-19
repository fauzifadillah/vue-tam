import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Report from "../views/Report/Report.vue";
import PushNotification from "../views/PushNotification/PushNotification.vue";
/* Dashboard */
import GuestAccount from "../views/Dashboard/GuestAccount.vue";
import EditGuestAccount from "../views/Dashboard/EditGuestAccount.vue";
/* Access Control */
/* Master Data */
import Course from "../views/MasterData/Course.vue";
/* My Learning */
import BillingCode from "../views/MyLearning/BillingCode.vue";
import TrainingProcess from "../views/MyLearning/TrainingProcess.vue";
import ReleaseTraining from "../views/MyLearning/ReleaseTraining.vue";
import AddReleaseTraining from "../views/MyLearning/AddReleaseTraining.vue";
import ManageTrainingProcessList from "../views/MyLearning/ManageTrainingProcessList.vue";
import ManageApprovalTrainingList from "../views/MyLearning/ManageApprovalTrainingList.vue";
/* My Complaint */
import Complaint from "../views/MyComplaint/Complaint.vue";
import Category from "../views/MyComplaint/Category.vue";
/* CMS */
import Onboarding from "../views/CMS/Onboarding.vue";
import Grouping from "../views/CMS/Grouping.vue";
import SplashScreen from "../views/CMS/SplashScreen.vue";
import Announcement from "../views/CMS/Announcement.vue";
import Guide from "../views/CMS/Guide.vue";

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
  // Master Data
  {
    path: "/master-data/course",
    name: "Course",
    component: Course,
  },
  // My Learning
  {
    path: "/my-learning/billing-code",
    name: "BillingCode",
    component: BillingCode,
  },
  {
    path: "/my-learning/training-process",
    name: "TrainingProcess",
    component: TrainingProcess,
  },
  {
    path: "/my-learning/release-training",
    name: "ReleaseTraining",
    component: ReleaseTraining,
  },
  {
    path: "/my-learning/release-training/add",
    name: "AddReleaseTraining",
    component: AddReleaseTraining,
  },
  {
    path: "/my-learning/training-process/manage-training-list",
    name: "ManageTrainingProcessList",
    component: ManageTrainingProcessList,
  },
  {
    path: "/my-learning/approval-training/manage-training-list",
    name: "ManageApprovalTrainingList",
    component: ManageApprovalTrainingList,
  },
  // My Complaint
  {
    path: "/my-complaint/complaint",
    name: "Complaint",
    component: Complaint,
  },
  {
    path: "/my-complaint/category",
    name: "Category",
    component: Category,
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
  {
    path: "/cms/guide",
    name: "Guide",
    component: Guide,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
