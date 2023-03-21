import Express from "express";
const router = Express();
import path from "path";
// import { updateUser } from "../mysql/api/admin";
import formatResponse from "../utils/response";
import { generator } from "../utils/token";
import upload from "../utils/uploads";

(async function() {
    router.post("/avatar/:uid",await (await upload(path.resolve(__dirname,"../../../uploads/avatar"))).single("avatar"), async (req,res,next)=>{
        // console.log("sflsf");
        
    //    const user =  await updateUser({avatar:`/imgs/avatar/${req.file?.filename}`},req.params.uid);
    
    //     const authData = generator({phone:user.phone,id:user.id,avatar:user.avatar},7);

    //     console.log(authData);
        

        // res.send(formatResponse(0,"上传成功",{user,token:'Bearer ' + authData.token}));
    });

    router.post("/goods", await (await upload(path.resolve(__dirname,"../../../uploads/goods"))).single("goods"), async (req:any,res,next) => {
        res.send(formatResponse(0,"上传成功",`/imgs/goods/${req.file?.filename}`));
    })
})()


export default router;

