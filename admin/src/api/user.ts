import request from "./request";

export async function fetchAllUser(page:number,limit:number) {
   return await request(`/api/user?page=${page}&limit=${limit}`);
}

export function searchUser(keyword:string) {
   return request.get(`/api/user/search?keyword=${keyword}`);
}