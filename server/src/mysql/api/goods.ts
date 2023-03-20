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