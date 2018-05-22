'use strict'

const { db, Sword, Smith } = require('./index')

const smiths = [
    {
        name: 'Masamune',
    },
    {
        name: 'Norishige',
    },
    {
        name: 'Kunitoshi',
    },
    {
        name: 'Nousit',
    },
]

const swords = [
    {
        name: 'coolest',
    },
    {
        name: 'other sword',
    },
    {
        name: 'my fave',
    },
    {
        name: 'Nousitiest',
    },
]

const seedScript = async () => {
    try {
        console.log('syncing db')
        await db.sync({ force: true })
        console.log('db synced')
        const createdSmiths = await Smith.bulkCreate(smiths, {
            returning: true,
        })
        await Sword.bulkCreate(
            swords.map((sword, idx) => ({
                ...sword,
                smithId: createdSmiths[idx].id,
            }))
        )
    } catch (err) {
        console.error(err)
    } finally {
        console.log('shutting db connection down')
        db.close()
        console.log('db closed')
    }
}

seedScript()
