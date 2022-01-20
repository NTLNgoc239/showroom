import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/thankyou1",
    name: "Thankyou1",
    component: () => import("../views/Thankyou1.vue"),
  },
  {
    path: "/thankyou2",
    name: "Thankyou2",
    component: () => import("../views/Thankyou2.vue"),
  },
  {
    path: "/thankyou3",
    name: "Thankyou3",
    component: () => import("../views/Thankyou3.vue"),
  },
  {
    path: "/home2",
    name: "Home2",
    component: () => import("../views/Home2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
