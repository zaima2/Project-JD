import { RouteRecordRaw } from "vue-router";
import OverView from "../views/OverView.vue";
import Login from "../views/Login.vue";
export default [
    {name:"overview",path:"/",component:OverView},
    {name:"Login",path:"/login",component:Login}
] as RouteRecordRaw[]