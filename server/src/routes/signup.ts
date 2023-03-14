import Express from "express";
import {signUp} from "../service/register";
import response from "../utils/response";
import sha from "sha256";
import server from "../../configure/server";
const router =  Express.Router();


router.post("/",async (req:any,res,next) => {

    if(!req.body.captcha) {
        res.send(response(400,"参数错误",false));
        return;
    }
    

    if(!req.session.captcha || +req.body.captcha !== +req.session.captcha[req.body.phone]) {
        res.send(response(402,"验证码错误",false));
        return;
    }

    req.body.password = sha(req.body.password + server.complexKey);
    

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
        req.session.captcha[req.body.phone] = null;
    } catch (err) {
        console.log(err);
        
        res.send(response(501,"未知错误",false))
    }
  
})



export default router;