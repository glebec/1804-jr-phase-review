'use strict'

const { db, Sword, Smith } = require('./index')

const smiths = [
    {
        name: 'Masamune', // learned from Kunimitsu
    },
    {
        name: 'Norishige', // learned from Masamune
    },
    {
        name: 'Kunimitsu', // learned from Nousit
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
        const settingLineages = Promise.all([
            createdSmiths[0].setTeacher(createdSmiths[2]),
            createdSmiths[1].setTeacher(createdSmiths[0]),
            createdSmiths[2].setTeacher(createdSmiths[3]),
        ])
        const creatingSwords = Sword.bulkCreate(
            swords.map((sword, idx) => ({
                ...sword,
                smithId: createdSmiths[idx].id,
            }))
        )
        await Promise.all([settingLineages, creatingSwords])
    } catch (err) {
        console.error(err)
    } finally {
        console.log('shutting db connection down')
        db.close()
        console.log('db closed')
    }
}

seedScript()
