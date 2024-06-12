const {DataTypes} = require('sequelize')

const chat = (sequelize, DataTypes)=>{
    const Chat = sequelize.define('chat',{
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique:true,
            autoIncrement: true
        },
        user1_id:{ type: DataTypes.INTEGER,
        references:{
            model: 'user',
            key: 'id'
        }
        },
        user2_id:{type: DataTypes.INTEGER,
            references:{
                model: 'user',
                key: 'id'
            }        
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW

        }

    },{
        tableName:'chat'
    })
    return Chat
}


module.exports = chat