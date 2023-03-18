
import { Op } from "sequelize";
import model from "../model/user";
import roler from "../model/roler";

export async function findOneUser(params:any) {
  return await model.findOne({
        where:{
            username:params.username,
            password:params.password
        },
        include:{
            model:roler,
            as:"roler"
        }
    })
}


export async function findOneUserByUsername(username:string) {
    return await model.findOne({
        where:{
            username
        },
        include:{
            model:roler,
            as:"roler"
        }
    })
}

export async function findAllUser(page:number,limit:number) {
    return await model.findAndCountAll({
       offset:(page - 1) * limit,
        limit,
        include:{
            model:roler,
            as:"roler"
        },
        order:[
            ["createdAt","DESC"]
        ]
    })
}

export async function searchUser(keyword:string) {
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
            },
            include:{
                model:roler,
                as:"roler"
            },
            order:[
                ["createdAt","DESC"]
            ]
    })
}