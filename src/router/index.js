import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/overview";
import AboutView from "../views/AboutView.vue";

// icons
import Menu from "../assets/icons/Menu.png";
import Award from "../assets/icons/Award.png";
import Grid from "../assets/icons/Grid.png";
import Dollar from "../assets/icons/Dollar.png";
import Bag from "../assets/icons/Bag.png";
import Calendar from "../assets/icons/Calendar.png";
import Message from "../assets/icons/Message.png";
import Phone from "../assets/icons/Phone.png";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Overview",
    component: HomeView,
    icon: Menu,
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: AboutView,
    icon: Award,
  },
  {
    path: "/spreadsheets",
    name: "Spreadsheets",
    component: AboutView,
    icon: Grid,
  },
  {
    path: "/administration",
    name: "Administration",
    component: AboutView,
    icon: Dollar,
  },
  {
    path: "/sales",
    name: "Sales",
    component: AboutView,
    icon: Bag,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: AboutView,
    icon: Calendar,
  },
  {
    path: "/message",
    name: "Message",
    component: AboutView,
    icon: Message,
  },
  {
    path: "/support",
    name: "Support",
    component: AboutView,
    icon: Phone,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
