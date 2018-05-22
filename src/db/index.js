const db = require('./db')
const Sword = require('./sword')
const Smith = require('./smith')

module.exports = {
    db,
    Sword,
    Smith,
}

db
    .sync()
    .then(() => {
        console.log('synced')
    })
    .finally(() => {
        db.close()
    })
