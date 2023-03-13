import {Sequelize} from "sequelize";
import server from "../../configure/server";

const sequelize = new Sequelize(server.mysql.database,server.mysql.username,server.mysql.passw, {
    host:"localhost",
    dialect:"mysql",
    logging:false,
    timezone:"+08:00"
});

export default sequelize;