import request from "./request";

export async function login(data:any) {
   return await request.post("/api/login",data);
}

export async function whoami() {
   return await request.get("/api/login/whoami");
}