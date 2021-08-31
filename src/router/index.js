import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Single from "../views/Single.vue";
import Sort from "../views/Sort.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/giveaways/id/:id",
    name: "SingleGiveaway",
    component: Single,
  },
  {
    path: "/giveaways/sort/:platform/:type/:sortBy",
    name: "SortGiveaway",
    component: Sort,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
