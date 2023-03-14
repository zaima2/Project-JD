import request from "./request";

export async function sendSms(phone:string) {
   return await request.post("/api/sms",{
        phone
    })
}