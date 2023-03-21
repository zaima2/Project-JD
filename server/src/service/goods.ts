import { getGoods, getGoodsById, goodsCreator, updateGoods } from "../mysql/api/goods";
import { Goods } from "../types/Goods";

export async function createGoods(goods:Goods) {
    goods.serviceSupport = JSON.stringify(goods.serviceSupport);
    goods.tags = JSON.stringify(goods.tags);
    goods.keywords = JSON.stringify(goods.keywords);
    return await goodsCreator(goods);
}

export async function fetchAllGoods(page:number,limit:number) {
   return await getGoods(page,limit);
}

export async function fetchGoodsById(id:string) {
    return await getGoodsById(id);
}

export async function goodsUpdate(id:string,form:Goods) {
    form.serviceSupport = JSON.stringify(form.serviceSupport);
    form.tags = JSON.stringify(form.tags);
    form.keywords = JSON.stringify(form.keywords);
   return await updateGoods(id,form);
}