const express = require('express')
const rota = express.Router()

const {chat} = require('../models/index')

rota.get('/',async(req,res)=>{
    const chats = await chat.findAll()
    res.json(chats)
})
rota.get('/:id', async(req,res)=>{
    const chats = await chat.findByPk(req.params.id)
    res.send(chats)
})
rota.post('/', async(req,res)=>{
    const {user1_id,user2_id}=req.body
    await chat.create({user1_id,user2_id})
    res.send('roleplay criado amegan')
})
rota.delete('/:id', async(req,res)=>{
    const messages = await chat.destroy({
        where:{
            id:req.params.id
        }
    })
    
    res.send('destruido')
 })

module.exports=rota