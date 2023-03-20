import { categoryCreator, findCategories, findOneCategoryById } from "../mysql/api/category";

export async function createCategory(level:number,data) {
    return await categoryCreator(level,data);
}

export async function checkCategory(level:number,id:string) {
    return await findOneCategoryById(level,id);
}

export async function fetchCategory(level:number,body) {
    return await findCategories(level,body);
}

// export async function deleteCategory(level:number,id:string) {
//    let resp = await findOneCategoryById(level,id) as unknown as Category;
//    resp = JSON.parse(JSON.stringify(resp));
    
//    if(resp.total !== 0) {
//      return {
//         code:403,
//         msg:"删除失败，因为该类型已存在商品，请删除商品数量为0的商品"
//      };
//    } 

//    try {
//    return await deleteCategory(level,id);
    
//    }catch(e) {
//     return null;
//    }
//    console.log(resp);
   
// }