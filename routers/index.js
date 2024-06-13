const express = require('express')
const userRota = require('./user')
const chatRota = require('./chat')
const messageRota = require('./message')

const rota = express.Router()

rota.get('/', (req,res)=>{
    res.send('Estamos Online')
})

rota.use('/user', userRota)
rota.use('/chat', chatRota)
rota.use('/message', messageRota)

module.exports = rota