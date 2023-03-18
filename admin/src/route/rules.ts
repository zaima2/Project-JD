import { RouteRecordRaw } from "vue-router";
import OverView from "../views/OverView.vue";
import Login from "../views/Login.vue";
import User from "../views/User/User.vue";
import Roler from "../views/Roler/index.vue";
export default [
    {name:"overview",path:"/",component:OverView},
    {name:"Login",path:"/login",component:Login},
    {name:"User",path:"/user",component:User},
    {name:"Roler",path:"/user/roler",component:Roler}
] as RouteRecordRaw[]