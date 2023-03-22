import request from "./request";

export async function searchGoods(keyword:string,page:number,limit:number) {
  return await request.get(`/api/goods/s/g?keyword=${keyword}&page=${page}&limit=${limit}`);
}