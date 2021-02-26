
const express = require('express')
const {request, response} = require('express')
const router = express.Router()
const admin = require('../usecases/admin')

router.post('/sign-up', async (request, response) => {
    try {
        const signUpAdmin = await admin.signUp(request.body)
        response.json({ 
            success: true,
            data: {
                admin: signUpAdmin
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.post('/sign-in', async (request, response) => {
    try {
        const {mail, password} = request.body
        const token = await admin.login(mail, password)
        response.json({ 
            success: true,
            data: {
                token
            }
        })
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router
