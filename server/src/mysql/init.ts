import connect from "./connect";
import "./model/user"

(async function () {
    await connect.sync();
    console.log("数据库模型初始化完成!");
    
})()