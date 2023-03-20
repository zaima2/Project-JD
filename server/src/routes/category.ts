import Express from "express";
import { checkCategory, createCategory, fetchCategory } from "../service/category";
import formatResponse from "../utils/response";

const router = Express();

// 创建一个类型

router.post("/:id",async (req,res,next) => {

    if(!req.body.name || (+req.params.id !==1 && !req.body.parent ) || (+req.params.id < 1 || +req.params.id > 4)) {
        res.send(formatResponse(400,'参数错误',null));
        return;
    }

    try{

        if(+req.params.id !== 1) {
            const cate = await checkCategory(+req.params.id - 1,req.body.parent);

            if(!cate) {
                res.send(formatResponse(404,'找不到该上层类型，请检查该类型是否存在',true));
                return;
            }      
        }

        const data = await createCategory(+req.params.id,req.body);
        res.send(formatResponse(0,'创建成功',data));
    } catch {
        res.send(formatResponse(500,'创建失败',null));
    }

})


// 获取类型

router.get("/g/:id",async (req,res,next) => {
    if((+req.params.id !== 1 && !req.query.parent) || ((+req.params.id < 1 || +req.params.id > 4))) {
        res.send(formatResponse(400,"参数错误",null));
        return;
    }

    try {
       const data = await fetchCategory(+req.params.id,req.query);
       res.send(formatResponse(0,"获取成功",data));
    } catch {
        res.send(formatResponse(500,'获取失败',null));
    }
})

// 删除类型
// router.delete("/:level/:id",(req,res,next) => {
//     const data = deleteCategory(+req.params.level,req.params.id);
//     res.send(formatResponse(0,'删除成功',data));
// })



export default router;