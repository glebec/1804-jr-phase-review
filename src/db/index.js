const db = require('./db')
const Sword = require('./sword')
const Smith = require('./smith')

Sword.belongsTo(Smith)
Smith.hasMany(Sword)

Smith.belongsToMany(Smith, {
    as: 'teacher',
    through: 'smith_lineages',
})

module.exports = {
    db,
    Sword,
    Smith,
}
