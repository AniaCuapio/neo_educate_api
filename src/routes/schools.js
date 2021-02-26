const express = require('express')
const schools = require('../usecases/schools')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/', async (request, response) => {
  try {
    const allSchools = await schools.getAll()
    response.json({
      success: true,
      data: {
        schools: allSchools,
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

router.get('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const schoolById = await schools.getById(id)
    response.json({
      success: true,
      data: {
        entry: schoolById,
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
    const newSchoolData = request.body
    const newSchool = await schools.create(newSchoolData)
    response.json({
      success: true,
      data: {
        newSchool,
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
    const remove = await schools.remove(id)
    response.json({
      success: true,
      message: 'School deleted',
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
    const newEntryData = request.body
    const refresh = await entries.update(id, newEntryData)
    response.json({
      success: true,
      data: {
        refresh,
      },
      message: 'refresh good',
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
