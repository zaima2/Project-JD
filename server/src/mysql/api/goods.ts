import { Op } from "sequelize";
import { Goods } from "../../types/Goods";
import model from "../model/goods";

export async function goodsCreator(data:Goods) {
    try {
        return await model.create({
            ...data
        })
    } catch(e) {
        return {
            code:403,
            msg:e
        }
    }
 
}

export async function getGoods(page:number,limit:number){
    return await model.findAndCountAll({
        order:[
            ["createdAt","DESC"]
        ],
        offset: (page - 1) * limit,
        limit:limit
    })
}

export async function getGoodsById(id:string) {
    return await model.findByPk(id);
}

export async function updateGoods(id:string,form:Goods) {
    return await model.update({
        ...form
    },{
        where:{
            id
        }
    })
}

export async function fetchGoodsByKeyWord(keyword:string,page:number,limit:number) {
   return await model.findAndCountAll({
        where:{
            [Op.or]:[
                {
                    name: {
                        [Op.like]: `%${keyword}%`
                    }
                }
            ]
        },
        offset:(page - 1) * limit,
        limit
    })
}