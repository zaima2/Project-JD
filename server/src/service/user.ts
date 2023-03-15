import { findOneUser,findOneUserByUsername } from "../mysql/api/user";

export async function findUserByBase(userInfo) {
    return await findOneUser(userInfo);
}

export async function checkUser(username:string){
    return await findOneUserByUsername(username);
}