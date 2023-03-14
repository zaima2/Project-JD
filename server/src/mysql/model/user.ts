import connect from "../connect";
import {DataTypes} from "sequelize";

const model = connect.define("user",{
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
    role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    val: {
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:true,
    freezeTableName:true,
    paranoid:true
})

export default model;