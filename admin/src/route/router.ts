import {createRouter,createWebHistory} from "vue-router";
import routes from "./rules";
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;