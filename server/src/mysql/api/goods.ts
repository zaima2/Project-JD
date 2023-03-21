import { Goods } from "../../types/Goods";
import model from "../model/goods";

export async function goodsCreator(data:Goods) {
    try {
        return await model.create({
            ...data
        })
    } catch(e) {
        return {
            code:403,
            msg:e
        }
    }
 
}

export async function getGoods(page:number,limit:number){
    return await model.findAndCountAll({
        order:[
            ["createdAt","DESC"]
        ],
        offset: (page - 1) * limit,
        limit:limit
    })
}