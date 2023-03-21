import Express from "express";
import path from "path";
import express from "express";
import session from "express-session";
import server from "../configure/server";
import {json} from "body-parser";
import { expressjwt as JWT, Request as JWTRequest } from "express-jwt";
import formatResponse from './utils/response';
import Sms from "./routes/sms";
import Login from "./routes/login";
import User from "./routes/user";
import Category from './routes/category';
import Goods from "./routes/goods";

import Uploads from "./routes/upload";

import sessionScure from "../configure/session";
import "./mysql/init"

//import routers

import Register from "./routes/signup";
import sha256 from "sha256";
import token from "../configure/authKey/jwt";

//import routers

const app = Express();


//jwt 


// jwt

// app.use(
//     JWT({secret:sha256(token.SecrectKey), algorithms: ["HS256"],credentialsRequired:true}).unless(
//         {path:[
//             {url:/\/imgs\/[\w]+/,methods:["GET"]},
           
//             {url:/\api\/sms/, method:"POST"},
//             {url:"/api/login",method:"POST"}, 
//             {url:/\/api\/signup[\w+]?/,method:"POST"},
//             {url:"/api/login/whoami",method:"GET"},
           
//         ]}
//     ),(req,res,next)=>{
//         next();
//     }
// )

// static

const imgRoot = path.resolve(__dirname,"../../uploads");

app.use("/imgs",express.static(imgRoot));


app.use(session({
    secret:sessionScure.SESSION,
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
  },
}))


app.use(json());
app.use("/api/signup",Register);
app.use("/api/sms",Sms);
app.use("/api/login",Login);
app.use("/api/user",User);
app.use('/api/goods/category',Category);
app.use("/api/goods",Goods);
app.use("/api/uploads",Uploads);
// 错误处理

app.use((err:any, req:any, res:any, next:any)=>{
    if(err.status === 401) {
        res.send(formatResponse(401,"登录失效或登录错误，请重新登录",null));
    } else if(err.status === 404) {
        res.send(formatResponse(404,"NotFound",err));
    } else {
        res.send(formatResponse(505,"未知错误",err));
    }

    // next();
})

// 错误处理


app.listen(server.port,()=>{
    console.log(`${server.port} is listening`);
})