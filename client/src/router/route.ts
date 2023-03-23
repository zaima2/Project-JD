import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home/index.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register/Register.vue";
import Personal from "../views/Personal/Index.vue";
import HomeView from "../views/Home/components/HomeView.vue";
import OverView from "../views/Personal/page/OverView.vue";
import Search from "../views/Search/index.vue";
import GoodsDetail from "../views/Goods/Detail.vue";
import Profile from "../views/Goods/views/Profile.vue"
import PackAndPrice from "../views/Goods/views/PackAndPrice.vue";
import Comment from "../views/Goods/views/Comment.vue";
import AfterSale from "../views/Goods/views/AfterSales.vue";
import Community from "../views/Goods/views/Community.vue";

export default [
    {
        name: "Home", path: "/", component: Home, children: [
            { name: "HomeView", path: "/", component: HomeView, meta:{auth: false} },
            {
                name: "Personal", path: "/home/:uid", component: Personal, meta:{auth: true}, children: [
                    { name: "OverView", path: "/home/:uid", meta:{auth: true}, component: OverView }
                ]
            },
            { name: "Search", path: "/search",meta:{auth: false}, component: Search },
            {name:"GoodsDetail", path:"/goods/detail/:id",component:GoodsDetail,children:[
                {name:"Profile",path:"/godds/detail/profile/:id",component:Profile},
                {name:"PackAndPrice",path:"/goods/detail/packandprice/:id",component:PackAndPrice},
                {name:"Comment",path:"/goods/detail/comments/:id",component:Comment},
                {name:"AfterSale",path:"/goods/detail/aftersale/:id",component:AfterSale},
                {name:"Community",path:"/goods/detail/Community/:id",component:Community}
            ]}
        ]
    },
    { name: "Login", path: "/login", component: Login, meta:{auth: false} },
    { name: "Register", meta:{auth: false}, path: "/register", component: Register },
]  as RouteRecordRaw[]