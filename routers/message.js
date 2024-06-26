const express = require('express')
const rota = express.Router()

const{message} = require('../models/index')

// rota para dropar tabela
rota.get('/droparTabela', async(req,res)=>{
    await message.drop();
    res.send(" table dropped!"); 
    
    
})

rota.get('/', async(req,res)=>{
    
    const messages= await message.findAll()
   
        res.json(messages);
   
 
})

rota.get('/:idChat', async(req,res)=>{
    const messages = await message.findAll({
        where:{
            chat_id:req.params.idChat
        }
    })
    
        res.json(messages)
    

})
rota.post('/', async(req,res)=>{
    const{chat_id, user_id,text}= req.body

    await message.create({chat_id,user_id,text})
    res.send('message was send')
})
rota.delete('/:idChat', async(req,res)=>{
    const messages = await message.destroy({
        where:{
            chat_id:req.params.idChat 
        }
    })
    
    res.send('destruido')
 })




module.exports = rota