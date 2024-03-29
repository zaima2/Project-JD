import connect from "../connect";
import {DataTypes} from "sequelize";

const model = connect.define("category4",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    total:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    level:{
        type:DataTypes.INTEGER,
        defaultValue:4
    },
    parent:{
        type:DataTypes.UUID,
        allowNull:false
    }
},{
    timestamps:true,
    freezeTableName:true,
    paranoid:true
})

export default model;