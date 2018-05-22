'use strict'

const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/sword-db', {
    logging: false,
})

module.exports = db
