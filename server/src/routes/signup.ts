import Express from "express";
import {signUp} from "../service/register";
import response from "../utils/response";
import sha from "sha.js";
import server from "../../configure/server";
const router =  Express.Router();


router.post("/",async (req,res,next) => {

    req.body.password = sha('sha256').update(req.body.password + server.complexKey).digest('hex');
 
    try {
        const resp = await signUp(req.body) as any;

        if(resp.forbid) {
            res.send(response(403,"注册失败",{
                data:false,
                reson:resp.reson
            }));
            return;
        }

        res.send(response(0,"注册成功",resp));
    } catch (err) {
        res.send(response(400,"参数有误",false))
    }
  
})



export default router;