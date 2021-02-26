
const Schools = require('../models/schools')

function getAll() {
    return Schools.find()
}

function getById(schoolId) {
    return Schools.findById(schoolId)
}

function create(schoolData) {
    return Schools.create(schoolData)
}

function remove(schoolId) {
    return Schools.findByIdAndDelete(schoolId)
}

function update(schoolId, newSchoolData) {
    return Schools.findByIdAndUpdate(schoolId, newSchoolData)
}


module.exports = {
    getAll,
    getById,
    create,
    remove,
    update
}