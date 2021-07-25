import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Home from "../views/Home.vue";
import ContactForm from "../views/ContactForm.vue";
import About from "../views/About.vue";

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "ContactForm",
        component: ContactForm,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
