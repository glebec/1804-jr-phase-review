const db = require('./db')
const Sequelize = require('sequelize')

const Smith = db.define('smith', {
    name: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },
})

module.exports = Smith
