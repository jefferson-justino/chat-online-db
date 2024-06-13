const express = require('express')
const rota = express.Router()

const {chat} = require('../models/index')

rota.get('/',async(req,res)=>{
    const chats = await chat.findAll()
    res.json(chats)
})
module.exports=rota