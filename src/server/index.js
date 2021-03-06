'use strict'

const { join } = require('path')
const express = require('express')
const volleyball = require('volleyball')

const { db } = require('../db')
const routes = require('./routes')

const PORT = 1337

const app = express()

app.use(volleyball)

app.use(express.json())
app.use(express.urlencoded())

app.use(routes)

app.use('/', express.static(join(__dirname, '..', 'client', 'public')))
app.use('/', express.static(join(__dirname, '..', '..', 'build')))

// const deserialized = {
//     name: 'G L',
//     age: 33
// }

// const serializedAsJSON = `{
//     name: 'G L',
//     age: 33
// }`

// const serializedAsURLEncoded = 'name=G%20L&age=33'

db.sync().then(() => {
    console.log('synced')
})

app.listen(PORT, () => {
    console.log(`listening: http://localhost:${PORT}`)
})
