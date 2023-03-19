import connect from "../connect";
import {DataTypes} from "sequelize";

const model = connect.define("admin",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    authLevel:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:true,
    freezeTableName:true,
    paranoid:true
})

export default model;