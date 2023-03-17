import Express from "express";
import { fetchAllUser, fetchUserByKeyword } from "../service/user";

import formatResponse from "../utils/response";

const router = Express();


router.get("/",async (req,res,next)=>{

    if(!req.query.page || !req.query.limit) {
        res.send(formatResponse(403,"参数错误",null));
        return;
    }

    try {
     const user = await fetchAllUser(+req.query.page,+req.query.limit);
        res.send(formatResponse(0,"获取成功",user))
    } catch{
        res.send(formatResponse(500,"获取失败，请稍后重试",null));
    }
});


router.get("/search",async (req,res,next) => {
    if(!req.query.keyword) {
        res.send(formatResponse(400,"参数错误",false));
        return;
    }

    try {
        const data = await fetchUserByKeyword(req.query.keyword as string);
        res.send(formatResponse(0,"查询成功",data));
    } catch {
        res.send(formatResponse(500,"查询失败",false));
    }
})



export default router;