import {Sequelize} from "sequelize";
import databaseConfigure from "../../configure/database";

const sequelize = new Sequelize(databaseConfigure.database,databaseConfigure.username, process.argv.includes("comp") ? databaseConfigure.passwComp : databaseConfigure.passwHome, {
    host:"localhost",
    dialect:"mysql",
    logging:false,
    timezone:"+08:00"
});

export default sequelize;