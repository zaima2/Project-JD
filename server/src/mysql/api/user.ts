
import model from "../model/user";

export async function findOneUser(params:any) {
  return await model.findOne({
        where:{
            username:params.username,
            password:params.password
        }
    })
}