const db = require('./db')
const Sequelize = require('sequelize')

const Smith = db.define('smith', {
    name: {
        type: Sequelize.STRING,
    },
})

module.exports = Smith
