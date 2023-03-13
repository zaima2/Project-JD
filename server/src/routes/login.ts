import Express from "express";

import formatResponse from "../utils/response";

import { generator,User,verify } from "../utils/token";
// import { fetchAdmin } from "../service/admin";

const router = Express();


router.post("/",async (req:any,res,next)=>{
    
    // 此处将传过来的code与req.captch对比是否相同
    if(+req.body.code === req.session.captcha[req.body.phone]) {
        
        // 假如成功

        // 信息验证成功，从数据库中查找用户

    //   const user = JSON.parse(JSON.stringify(await fetchAdmin(req.body.phone)));
        

       //生成token

    try{
        // const authData = generator({phone:user.phone,id:user.id,avatar:user.avatar},7);
    // res.setHeader("authorization",'Bearer ' + authData.token);
    // res.send(formatResponse(206,"登录成功",authData.user));
    }
   
  catch(err:any) {

    // 捕获错误

    if(err.code === "ETIMEDOUT") {
        res.send(formatResponse(406,"网络错误，请重新登录",null));
    }
    res.send(formatResponse(401,"登录失效",null));
    return;
  }
        
    } else {
        res.send(formatResponse(403,"验证码错误",null));
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