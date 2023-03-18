import { findAllRoler, rolerCreator } from "../mysql/api/roler";

export async function createRoler(name:string) {
    return await rolerCreator(name);
}

export async function fetchAllRoler(){
    return await findAllRoler();
}