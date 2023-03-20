import { goodsCreator } from "../mysql/api/goods";
import { Goods } from "../types/Goods";

export async function createGoods(goods:Goods) {
    goods.serviceSupport = JSON.stringify(goods.serviceSupport);
    goods.tags = JSON.stringify(goods.tags);
    goods.keywords = JSON.stringify(goods.keywords);
    return await goodsCreator(goods);
}