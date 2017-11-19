const express = require('express')
const router = express.Router()
const controller = require('./appointments.controller')
const validator = require('../../lib/validator')
const appointmentValidationSchema = require('./appointment.validation')
const auth = require('../../auth/auth.service.js')

router.post('/create', validator(appointmentValidationSchema.create), auth.hasRole('patient'), controller.create)

module.exports = router
