import { RouteRecordRaw } from "vue-router";
import OverView from "../views/OverView.vue";
import Login from "../views/Login.vue";
import User from "../views/User/User.vue"
export default [
    {name:"overview",path:"/",component:OverView},
    {name:"Login",path:"/login",component:Login},
    {name:"User",path:"/user",component:User}
] as RouteRecordRaw[]