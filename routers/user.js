const express = require('express')
const rota = express.Router()

const{user}= require('../models/index')

rota.get('/',async(req,res)=>{
    const users= await user.findAll()
    res.json(users)

})
module.exports = rota
