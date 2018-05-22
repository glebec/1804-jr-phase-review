const db = require('./db')
const Sword = require('./sword')
const Smith = require('./smith')

Sword.belongsTo(Smith)
Smith.hasMany(Sword)

module.exports = {
    db,
    Sword,
    Smith,
}

db
    .sync({ force: true })
    .then(() => {
        console.log('synced')
    })
    .finally(() => {
        db.close()
    })
