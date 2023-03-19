import modellevel1 from '../model/category';
import modellevel2 from "../model/category2";
import modellevel3 from "../model/category3";
import modellevel4 from "../model/category4";

export async function categoryCreator(level:number,data) {
    if(level === 1) {
       return await modellevel1.create({
            name:data.name
        })
    } else if(level === 2) {
        return await modellevel2.create({
            name:data.name,
            parent:data.parent
        })
    } else if(level === 3) {
        return await modellevel3.create({
            name:data.name,
            parent:data.parent
        })
    } else if(level === 4) {
        return await modellevel4.create({
            name:data.name,
            parent:data.parent
        })
    } else {
        throw Error('参数有误')
    }
}


export async function findOneCategoryById(level:number,id:string) {
    if(level === 1) {
        return await modellevel1.findByPk(id);
    } else if(level === 2) {
        return await modellevel2.findByPk(id);
    } else if(level === 3) {
        return await modellevel3.findByPk(id);
    } else if(level === 4) {
        return await modellevel4.findByPk(id);
    }
    return null;
}

export async function findCategories(level:number,body) {
    if(level === 1) {
        return await modellevel1.findAll();
    } else if(level === 2) {
        return await modellevel2.findAll({
            where:{
                parent:body.parent
            }
        })
    } else if(level === 3) {
        return await modellevel3.findAll({
            where:{
                parent:body.parent
            }
        })
    } else if(level === 4) {
        return await modellevel4.findAll({
            where:{
                parent:body.parent
            }
        })
    } else {
        throw Error("参数错误");
    }
}