const express = require('express')
const rota = express.Router()

const{message} = require('../models/index')

rota.get('/', async(req,res)=>{
    const messages= await message.findAll()
    res.json(messages)
})

rota.get('/:id', async(req,res)=>{
    const messages = await message.findByPk(req.params.id)
    if(messages){
        res.json(messages)
    }else{
        res.status(400).json( 'Message not found')
    }

})
rota.post('/', async(req,res)=>{
    const{chat_id, user_id}= req.body

    await message.create({chat_id,user_id})
    res.send('message was send')
})

module.exports = rota