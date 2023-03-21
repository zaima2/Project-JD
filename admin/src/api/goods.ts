import request from "./request";
import {Goods} from "../types/Goods";

export async function goodsCreator(data:Goods) {
   return await request.post("/api/goods/add",data);
}

export async function getGoods(page:number,limit:number) {
   return await request.get(`/api/goods?page=${page}&limit=${limit}`)
}