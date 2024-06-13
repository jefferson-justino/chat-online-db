const express = require('express')
const rota = express.Router()

const{message} = require('../models/index')

rota.get('/', async(req,res)=>{
    const messages= await message.findAll()
    res.json(messages)
})

module.exports = rota