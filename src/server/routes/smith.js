'use strict'

const router = require('express').Router()
const { Smith } = require('../../db')

router.get('/', async (req, res, next) => {
    try {
        const smiths = await Smith.findAll()
        res.json(smiths)
    } catch (err) {
        next(err)
    }
})

module.exports = router
