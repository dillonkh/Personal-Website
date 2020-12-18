import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-me",
    name: "About Me",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about-me" */ "./../components/AboutMe.vue"),
  },
  {
    path: "/my-education",
    name: "My Education",
    component: () => import("./../components/MyEducation.vue"),
  },
  {
    path: "/my-projects",
    name: "My Projects",
    component: () => import("./../components/MyProjects.vue"),
  },
  {
    path: "/work-experience",
    name: "Work Experience",
    component: () => import("./../components/WorkExperience.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("./../components/GameHolder.vue"),
  },
  {
    path: "*",
    component: () => import("./../components/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
