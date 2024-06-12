const {DataTypes} = require('sequelize')

const user = (sequelize, DataTypes) =>{
    const User =sequelize.define('user',{
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique:true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        picture:{
            type: DataTypes.BLOB
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW

        }
    },{
        tableName:'user'
    })
    return User
}
module.exports = user