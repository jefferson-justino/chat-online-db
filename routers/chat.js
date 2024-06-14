const express = require('express')
const rota = express.Router()

const {chat} = require('../models/index')

rota.get('/',async(req,res)=>{
    const chats = await chat.findAll()
    res.json(chats)
})

rota.post('/', async(req,res)=>{
    const {user1_id,user2_id}=req.body
    await chat.create({user1_id,user2_id})
    res.send('roleplay criado amegan')
})

module.exports=rota