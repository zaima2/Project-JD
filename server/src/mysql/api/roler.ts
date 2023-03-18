import model from "../model/roler";

export async function rolerCreator(name:string) {
   return await model.create({
        name
    })
}

export async function findAllRoler() {
    return await model.findAndCountAll({
        order:[
            ["createdAt","DESC"]
        ]
    });
}