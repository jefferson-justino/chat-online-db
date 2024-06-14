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
        text:{
            type: DataTypes.STRING(10000),
            allowNull: false
        },
        hour:{
            type: DataTypes.TIME,
    defaultValue: DataTypes.NOW 
        }, 
        date:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }
    },{
        tableName:'message'
    })
return Message
}
module.exports = message