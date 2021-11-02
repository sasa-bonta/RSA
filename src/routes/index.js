import Vue from "vue";
import VueRouter from 'vue-router'
import Crypt from "../components/pages/Crypt";
import Decrypt from "../components/pages/Decrypt";
import Compare from "../components/pages/Compare";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/crypt',
    },
    {
        path: '/crypt',
        component: Crypt,
    },
    {
        path: '/decrypt',
        component: Decrypt,
    },
    {
        path: '/comp',
        component: Compare
    },
]

const router = new VueRouter({
    routes,
    mode: "history",
})

export default router;