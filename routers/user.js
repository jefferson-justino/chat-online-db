const express = require('express')

const rota = express.Router()

const{user}= require('../models/index')




rota.get('/',async(req,res)=>{
    const users= await user.findAll()
    res.json(users)

})
rota.get('/:id', async(req,res)=>{
    const users = await user.findByPk(req.params.id)
    if (users) {
        res.json(users);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
})

rota.post('/', async(req,res)=>{
    const {name,email,password}=req.body
    await user.create({name,email,password})
    res.send('Conta criada!')
})

 



module.exports = rota
