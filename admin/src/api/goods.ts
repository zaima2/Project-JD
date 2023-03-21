import request from "./request";
import {Goods} from "../types/Goods";

export async function goodsCreator(data:Goods) {
   return await request.post("/api/goods/add",data);
}

export async function getGoods(page:number,limit:number) {
   return await request.get(`/api/goods?page=${page}&limit=${limit}`)
}

export async function getGoodsById(id:string) {
   return await request.get(`/api/goods/${id}`);
}

export async function updateGoods(id:string,form:Goods){
   return await request.put(`/api/goods/${id}`,form);
}