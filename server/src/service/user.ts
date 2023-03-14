import { findOneUser } from "../mysql/api/user";

export async function findUserByBase(userInfo) {
    return await findOneUser(userInfo);
}