import Express from "express";

import formatResponse from "../utils/response";

import { generator,verify } from "../utils/token";
import { findUserByBase } from "../service/user";
import sha256 from "sha256";
import server from "../../configure/server";
import { User } from "../types/User";

const router = Express();

// 根据基础信息登录

router.post("/",async (req:any,res,next)=>{

        if(!req.body.username || !req.body.password) {
            res.send(formatResponse(400,"参数错误",false));
            return;
        }

        //从数据库中查找用户

        req.body.password = sha256(req.body.password + server.complexKey);

       const user = JSON.parse(JSON.stringify(await findUserByBase(req.body)));
             
       //生成token

    try{
        const authData = generator({username:user.username,id:user.id,role:user.role,phone:user.phone},7);
    res.setHeader("authorization",'Bearer ' + authData.token);
    res.send(formatResponse(0,"登录成功",authData.user));
    }
   
  catch(err:any) {

    // 捕获错误

    if(err.code === "ETIMEDOUT") {
        res.send(formatResponse(406,"网络错误，请重新登录",null));
        return;
    }
    res.send(formatResponse(401,"登录失败，请检查用户名或者密码",null));
    return;
  }
        
    

})

router.get("/whoami",async (req,res,next)=>{
    console.log("whoami");
        const token = req.headers["authorization"] as string;
        if(token) {
            const result = verify(token) as User;
        
            if(result) {
                res.send(formatResponse(0,"恢复登录成功",result));
            }
        } else {
            res.send(formatResponse(401,"登录失效或无效",null));
        }        
})



export default router;