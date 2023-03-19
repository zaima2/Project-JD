import request from "./request";
export async function getCategory(level:number,parent:string='') {
   return await request.get(`/api/goods/category/g/${level}?parent=${parent}`);
}