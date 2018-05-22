'use strict'

const router = require('express').Router()
const { Sword, Smith } = require('../../db')

router.get('/', async (req, res, next) => {
    try {
        const swords = await Sword.findAll({
            include: Smith,
        })
        res.json(swords)
    } catch (err) {
        next(err)
    }
})

module.exports = router
