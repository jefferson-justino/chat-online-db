const express = require('express')
const rotas = require('./routers/index')
const cors = require('cors')

const app = express()
const {sequelize} = require('./models/index')

app.use(express.json())
app.use(cors())
app.use('/',rotas)


sequelize.sync().then(()=>{
    console.log('servidor ligado')
})

app.listen(2001,()=>{
    console.log('aee')
}) 
