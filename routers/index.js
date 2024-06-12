const express = require('express')
const userRota = require('./user')
const rota = express.Router()

rota.get('/', (req,res)=>{
    res.send('Estamos Online')
})

rota.use('/user', userRota)

module.exports = rota