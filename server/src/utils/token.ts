import jwt from "jsonwebtoken";
import token from "../../configure/authKey/jwt";
import sha256 from "sha256";
import { User } from "../types/User";



/**
 * 
 * @param user 用户信息
 * @param expire 过期天数
 */

export function generator(user:User,expire:number) {
   return {
     token:jwt.sign(user,sha256(token.SecrectKey),{
        expiresIn: 60 * 60* 24 * expire
    }),
    user
   }
} 

export function verify(SendToken:string) {

    const tmp = SendToken.split(" ");
    if(tmp.length > 1) {
        SendToken = tmp[1]
    } else {
        SendToken = tmp[0]
    }

  const json = jwt.verify(SendToken,sha256(token.SecrectKey));
  return json;
}