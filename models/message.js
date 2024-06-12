const {DataTypes} = require('sequelize')

const message = (sequelize, DataTypes) =>{
    const Message = sequelize.define('message',{
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique:true,
            autoIncrement: true
        },
        chat_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'chat',
                key:'id'
            }
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            }
        },
        hour:{
            type: DataTypes.TIME,
    defaultValue: sequelize.NOw
        },
        date:{
            type: DataTypes.DATEONLY,
            defaultValue: sequelize.NOW
        }
    },{
        tableName:'message'
    })
return Message
}
module.exports = message