import Express from "express";
import { fetchAllUser } from "../service/user";
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
        res.send(formatResponse(403,"获取失败，请稍后重试",null));
    }
})



export default router;