import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RoomInfo from "../views/RoomInfo.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/room/:id",
        name: "RoomInfo",
        component: RoomInfo,
        props: true
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