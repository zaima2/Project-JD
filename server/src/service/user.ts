import { findAllUser, findOneUser,findOneUserByUsername, searchUser } from "../mysql/api/user";

export async function findUserByBase(userInfo) {
    return await findOneUser(userInfo);
}

export async function checkUser(username:string){
    return await findOneUserByUsername(username);
}

export async function fetchAllUser(page:number,limit:number) {
   return await findAllUser(page,limit);
} 

export async function fetchUserByKeyword(keyword:string) {
    return await searchUser(keyword);
}