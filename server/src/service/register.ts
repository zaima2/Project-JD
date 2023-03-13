import {register} from "../mysql/api/register";
import { User } from "../types/User";

export async function signUp(user:User) {
    return await register(user);
}