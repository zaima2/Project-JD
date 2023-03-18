import request from "./request";

export async function getRolers() {
   return await request.get("/api/user/roler");
}

export async function createRoler(name:string) {
    return await request.post("/api/user/roler",{
        name
    })
}