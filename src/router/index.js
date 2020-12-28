import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: require("../views/Home.vue").default
  },
  {
    path: "/advertisement",
    name: "Advertisement",
    component: require("../views/Advertisement.vue").default
  }
];

const router = new VueRouter({
  // mode: 'history',
  routes
});

export default router;
