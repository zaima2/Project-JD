
import { Op } from "sequelize";
import model from "../model/user";

export async function findOneUser(params:any) {
  return await model.findOne({
        where:{
            username:params.username,
            password:params.password
        }
    })
}


export async function findOneUserByUsername(username:string) {
    return await model.findOne({
        where:{
            username
        }
    })
}

export async function findAllUser(page:number,limit:number) {
    return await model.findAndCountAll({
       offset:(page - 1) * limit,
        limit
    })
}

export async function searchUser(keyword:string) {
    console.log(keyword);
    
   return await model.findAndCountAll({
            where:{
              [Op.or]:[
               {username:{
                [Op.like]:`%${keyword}%`
               }},
               {
                phone:{
                    [Op.like]:`%${keyword}%`
                }
               }
              ]
            }
    })
}