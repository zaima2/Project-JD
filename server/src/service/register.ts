import sha from "sha256";
import server from "../../configure/server";
import {register} from "../mysql/api/register";
import { User } from "../types/User";

export async function signUp(user:User) {  
    user.password = sha(user.password + server.complexKey);
    return await register(user);
}