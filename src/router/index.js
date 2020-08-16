import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
    beforeEnter(routerTo, routerFrom, next) {
      store.dispatch("getAllRoomsInfo").then(() => {
        next();
      });
    }
  },
  {
    path: "/room/:id",
    name: "RoomInfo",
    props: true,
    component: () => import("@/views/RoomInfo"),
    beforeEnter(routerTo, routerfrom, next) {
      store.dispatch("getRoomInfo", routerTo.params.id).then(() => {
        next();
      });
    }
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

export default router;
