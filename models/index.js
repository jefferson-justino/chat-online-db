const Sequelize= require('sequelize')
const sequelize = require('../configBanco/sequelize')

const User = require('./user')
const Chat = require('./chat')
const Message = require('./message')

const user = User(sequelize,Sequelize.DataTypes)
const chat = Chat(sequelize,Sequelize.DataTypes)
const message = Message(sequelize,Sequelize.DataTypes)

const db = {
    sequelize,user,chat,message 
}
module.exports = db