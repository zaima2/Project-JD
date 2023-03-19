import connect from "./connect";
import user from "./model/user";
import Roler from "./model/roler";
import server from "../../configure/server";
import admin from './model/admin';
import sha256 from "sha256";
import  "./model/category";
import  './model/category2';
import  './model/category3';
import  './model/category4';

(async function () {

    user.hasOne(Roler,{
        foreignKey:"id",
        sourceKey:"role",
        as:"roler"
    })

    Roler.hasMany(user);

    await connect.sync({alter:true});

    const root = await admin.findOne({
        where:{
            username:"root"
        }
    });
    

    if(!root) {  
        try {
            await admin.create({
                username:'root',
                password:sha256(server.rootPwd + server.complexKey),
                authlevel:0,
                status:'normal'
            })
            console.log("创建root用户成功");
        } catch(e) {
            console.log("root用户创建失败，原因是" + e);
        }
    }



    console.log("数据库模型初始化完成!");  
})()