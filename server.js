const express = require('express')
const { request, response } = require('express')
const cors = require('cors')
const app = express()

const schoolsRouter = require('./src/routes/schools')
const adminRouter = require('./src/routes/admin')

const authRouter = require('./src/routes/auth') 

//Este es un middleware
app.use(express.json())

//Aqui se monta el enrutador montado XD
app.use('/schools', schoolsRouter)

app.use(cors())

app.use('/admin', adminRouter)

app.use('/', authRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'Neo Educate API',
  })
})

module.exports = app
