import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from "vue-router";
import DrawPage from "./components/DrawPage.vue";
import ProfilePage from "./components/ProfilePage.vue";

document.title = "LuckyDraw";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: DrawPage,
        },
        {
            path: "/draw",
            component: DrawPage,
        },
        {
            path: "/profile",
            component: ProfilePage,
        },
    ]
});

const app = createApp(App);
app.use(router).mount('#app');

