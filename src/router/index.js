import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
    async beforeEnter(routerTo, routerFrom, next) {
      await store.dispatch("getAllRoomsInfo");
      next();
    }
  },
  {
    path: "/room/:id",
    name: "RoomInfo",
    props: true,
    component: () => import("@/views/RoomInfo"),
    async beforeEnter(routerTo, routerfrom, next) {
      await store.dispatch("getRoomInfo", routerTo.params.id);
      next();
    }
  },
  {
    path: "/404",
    name: "404",
    props: true,
    component: () => import("@/views/NotFound")
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: () => import("@/views/NetworkIssue")
  },
  {
    path: "*",
    redirect: { name: 404, params: { resource: "page" } }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((routerTo, routerFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
