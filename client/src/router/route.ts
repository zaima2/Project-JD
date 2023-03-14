import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home/index.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register/Register.vue";
import Personal from "../views/Personal/Index.vue";
import HomeView from "../views/Home/components/HomeView.vue";
import OverView from "../views/Personal/page/OverView.vue";
import Search from "../views/Search/index.vue";


export default [
    {
        name: "Home", path: "/", component: Home, children: [
            { name: "HomeView", path: "/", component: HomeView, meta:{auth: false} },
            {
                name: "Personal", path: "/home/:uid", component: Personal, meta:{auth: true}, children: [
                    { name: "OverView", path: "/home/:uid", meta:{auth: true}, component: OverView }
                ]
            },
            { name: "Search", path: "/search",meta:{auth: false}, component: Search }
        ]
    },
    { name: "Login", path: "/login", component: Login, meta:{auth: false} },
    { name: "Register", meta:{auth: false}, path: "/register", component: Register },
]  as RouteRecordRaw[]