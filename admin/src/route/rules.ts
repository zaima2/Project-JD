import { RouteRecordRaw } from "vue-router";
import OverView from "../views/OverView.vue";
import Login from "../views/Login.vue";
import User from "../views/User/User.vue";
import Roler from "../views/Roler/index.vue";
import Admin from "../views/Admin/Admin.vue";
import Category from "../views/Category/Category.vue";
export default [
    {name:"overview",path:"/",component:OverView},
    {name:"Login",path:"/login",component:Login},
    {name:"User",path:"/user",component:User},
    {name:"Roler",path:"/user/roler",component:Roler},
    {name:"Admin",path:"/user/admin",component:Admin},
    {name:"Category",path:"/goods/category",component:Category},
] as RouteRecordRaw[]