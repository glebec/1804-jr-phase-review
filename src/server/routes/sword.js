'use strict'

const router = require('express').Router()

router.get('/', async (req, res, next) => {
    res.json({
        works: true,
    })
})

module.exports = router
