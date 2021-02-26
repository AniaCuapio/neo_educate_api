const express = require('express')
const admin = require('../usecases/admin')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/', auth, async (request, response) => {
  try {
    const allAdmins = await admin.getAll()
    response.json({
      success: true,
      data: {
        admin: allAdmins,
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.get('/:id', auth, async (request, response) => {
  try {
    const id = request.params.id
    const adminById = await admin.getById(id)
    response.json({
      success: true,
      data: {
        admin: adminById
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})



router.post('/', auth, async (request, response) => {
  try {
    const newAdminData = request.body
    const newAdmin = await admin.create(newAdminData)
    response.json({
      success: true,
      data: {
        newAdmin,
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
  try {
    const id = request.params.id
    const remove = await admin.remove(id)
    response.json({
      success: true,
      message: 'admin deleted',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.patch('/:id', auth, async (request, response) => {
  try {
    const id = request.params.id
    const newAdminData = request.body
    const refresh = await adminById.update(id, newAdminData)
    response.json({
      success: true,
      data: {
        refresh
      },
      message: 'Succesful refresh',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

module.exports = router
