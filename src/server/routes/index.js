'use strict'

const router = require('express').Router()

router.use('/smiths', require('./smith'))
router.use('/swords', require('./sword'))

module.exports = router
