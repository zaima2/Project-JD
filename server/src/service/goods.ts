import { fetchGoodsByKeyWord, getGoods, getGoodsById, goodsCreator, updateGoods } from "../mysql/api/goods";
import { Goods } from "../types/Goods";
import admin from "../mysql/model/admin";
import userModel from "../mysql/model/user";
import { ResponseWithCount } from "../types/Response";

export async function createGoods(goods:Goods) {
    goods.serviceSupport = JSON.stringify(goods.serviceSupport);
    goods.tags = JSON.stringify(goods.tags);
    goods.keywords = JSON.stringify(goods.keywords);
    goods.thumbs = JSON.stringify(goods.thumbs);
    goods.desc = JSON.stringify(goods.desc);
    return await goodsCreator(goods);
}

export async function fetchAllGoods(page:number,limit:number) {
   let resp =  await getGoods(page,limit) as unknown as ResponseWithCount<Goods>;
    resp = JSON.parse(JSON.stringify(resp));
    for(let i = 0; i < resp.rows.length; i ++) {
        const userid = resp.rows[i].owner;
        const user = await admin.findByPk(userid) as any;
        if(user) {
            resp.rows[i].publisher = {
                username:user.username,
                role:"admin"
            }
        } else {
            const userInfo = await userModel.findByPk(userid) as any;
            resp.rows[i].publisher = {
                username:userInfo.username,
                role:"user"
            }
        }
        
    }
    
   return resp;
}

export async function fetchGoodsById(id:string) {
    return await getGoodsById(id);
}

export async function goodsUpdate(id:string,form:Goods) {
    form.serviceSupport = JSON.stringify(form.serviceSupport);
    form.tags = JSON.stringify(form.tags);
    form.keywords = JSON.stringify(form.keywords);
    form.thumbs = JSON.stringify(form.thumbs);
    form.desc = JSON.stringify(form.desc);
   return await updateGoods(id,form);
}

export async function searchGoods(keywords:string,page:number,limit:number) {
   return await fetchGoodsByKeyWord(keywords,page,limit);
}