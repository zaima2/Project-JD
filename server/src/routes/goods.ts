import Express from "express";
import { createGoods, fetchAllGoods } from "../service/goods";
import formatResponse from "../utils/response";

const router = Express();

router.get("/",async (req,res,next) => {
    if(!req.query.page || !req.query.limit || !Number(req.query.page) || !Number(req.query.limit) ) {
        res.send(formatResponse(400,"参数错误",null))
        return;
    }

    try {
        const resp = await fetchAllGoods(+req.query.page,+req.query.limit);
        res.send(formatResponse(0,"获取商品成功",resp));
    } catch(e) {
        console.log(e);
        
        res.send(formatResponse(500,"获取失败",null))
    }

})

router.post("/add",async (req,res,next) => {
   if(!req.body.name || !req.body.price || !req.body.store || req.body.deliver === undefined || req.body.back7day === undefined || req.body.baitiaoPay === undefined || !req.body.brand || !req.body.no || !req.body.weight || !req.body.ingradient || !req.body.approperate || !req.body.region || !req.body.specification || req.body.tags === undefined || req.body.keywords === undefined){
    res.send(formatResponse(400,"参数错误",null));
    return;
   } 

    try {
    const resp = await createGoods(req.body);
    res.send(formatResponse(0,"商品创建成功",resp));
    } catch {
        res.send(formatResponse(403,"商品创建失败，稍后重试",null))
    }
});


export default router;