import connect from "./connect";
import user from "./model/user";
import Roler from "./model/roler";
import { signUp } from "../service/register";
import server from "../../configure/server";

(async function () {

    user.hasOne(Roler,{
        foreignKey:"id",
        sourceKey:"role",
        as:"roler"
    })

    Roler.hasMany(user);

    await connect.sync({alter:true});

    const root = await user.findOne({
        where:{
            username:"root"
        }
    });
    

    if(!root) {
        try {
            await signUp({
                username: "root",
                phone: "admin",
                password:server.rootPwd,
                role: "superAdmin"
            });
            console.log("创建root用户成功");
        } catch(e) {
            console.log("root用户创建失败，原因是" + e);
        }
    }



    console.log("数据库模型初始化完成!");  
})()