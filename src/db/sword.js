const db = require('./db')
const Sequelize = require('sequelize')

const Sword = db.define('sword', {
    name: {
        type: Sequelize.STRING,
    },
})

module.exports = Sword
