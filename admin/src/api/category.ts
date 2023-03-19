import request from "./request";
export async function getCategory(level:number,parent:string='') {
   return await request.get(`/api/goods/category/g/${level}?parent=${parent}`);
}

export async function appendCategory(level:number,name:string,parent?:string) {
    return await request.post(`/api/goods/category/${level}`,{
        name,parent
    })
}