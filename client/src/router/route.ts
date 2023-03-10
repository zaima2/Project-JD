import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home/index.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register/Register.vue";


export default [
    {name:"Home", path:"/",component:Home},
    {name:"Login",path:"/login",component:Login},
    {name:"Register",path:"/register",component:Register},
] as RouteRecordRaw[]