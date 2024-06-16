const express = require('express')
const rota = express.Router()

const {chat} = require('../models/index')


 // rota para dropar tabela

rota.get('/droparTabela', async(req,res)=>{
    await chat.drop();
    res.send(" table dropped!"); 
    
    
})


rota.get('/',async(req,res)=>{
    const chats = await chat.findAll()
   
        res.json(chats)
   
})
rota.get('/:id', async(req,res)=>{
    const chats = await chat.findByPk(req.params.id)
    if(chats){
        res.send(chats)
    }else{
        res.status(404).json({ error: 'Chat not found' });
    }
})
rota.post('/', async(req,res)=>{
    const {user1_id,user2_id}=req.body
    await chat.create({user1_id,user2_id})
    res.send('roleplay criado amegan')
})
rota.delete('/:id', async(req,res)=>{
    const chats = await chat.findByPk(req.params.id)
    if (chats) {
        await chats.destroy()
        res.send('destruido')
    } else {
        res.status(404).json({ error: 'Chat not found' });
    }
    
 })


 
module.exports=rota