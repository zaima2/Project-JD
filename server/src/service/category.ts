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