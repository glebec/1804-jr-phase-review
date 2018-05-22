'use strict'

const router = require('express').Router()
const { Sword } = require('../../db')

router.get('/', async (req, res, next) => {
    try {
        const swords = await Sword.findAll()
        res.json(swords)
    } catch (err) {
        next(err)
    }
})

module.exports = router
