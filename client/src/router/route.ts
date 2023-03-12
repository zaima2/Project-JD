import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home/index.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register/Register.vue";
import Personal from "../views/Personal/Index.vue";
import HomeView from "../views/Home/components/HomeView.vue";
import OverView from "../views/Personal/page/OverView.vue";


export default [
    {
        name:"Home", path:"/",component:Home,children:[
            {name:"HomeView",path:"/",component:HomeView},
            {name:"Personal",path:"/home/:uid",component:Personal,children:[
                {name:"OverView",path:"/home/:uid",component:OverView}
            ]}
    ]},
    {name:"Login",path:"/login",component:Login},
    {name:"Register",path:"/register",component:Register},
] as RouteRecordRaw[]