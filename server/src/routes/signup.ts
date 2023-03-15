import Express from "express";
import {signUp} from "../service/register";
import response from "../utils/response";
import { checkUser } from "../service/user";
const router =  Express.Router();


router.post("/",async (req:any,res,next) => {

    if(!req.body.captcha || !req.body.username || !req.body.password || !req.body.role || !req.body.phone || !req.body.repassword) {
        res.send(response(400,"参数错误",false));
        return;
    }

    if(!req.session.captcha || +req.body.captcha !== +req.session.captcha[req.body.phone]) {
        res.send(response(402,"验证码错误",false));
        return;
    }

    if(req.body.password !== req.body.repassword) {
        res.send(response(400,"两次密码输入不符,请检查后重试",false));
    }


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


router.post("/checkUser",async (req,res,next) => {
    if(!req.body.username) {
        res.send(response(400,"参数错误",false));
        return;
    }

   const user = await checkUser(req.body.username);
   if(!user) {
      res.send(response(0,"用户可注册",true));
      return;
   }
   
   res.send(response(405,"用户名已被占用",false));


})


export default router;