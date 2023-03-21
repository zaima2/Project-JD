import { RouteRecordRaw } from "vue-router";
import OverView from "../views/OverView.vue";
import Login from "../views/Login.vue";
import User from "../views/User/User.vue";
import Roler from "../views/Roler/index.vue";
import Admin from "../views/Admin/Admin.vue";
import Category from "../views/Category/Category.vue";
import Public from "../views/Goods/publish/index.vue";
import Manage from "../views/Goods/manage/index.vue";
export default [
    {name:"overview",path:"/",component:OverView},
    {name:"Login",path:"/login",component:Login},
    {name:"User",path:"/user",component:User},
    {name:"Roler",path:"/user/roler",component:Roler},
    {name:"Admin",path:"/user/admin",component:Admin},
    {name:"Category",path:"/goods/category",component:Category},
    {name:"Publish",path:"/goods/publish",component:Public},
    {name:"Manage",path:"/goods/manage",component:Manage},

] as RouteRecordRaw[]