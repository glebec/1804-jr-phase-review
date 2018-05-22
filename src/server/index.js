'use strict'

const express = require('express')
const volleyball = require('volleyball')

const routes = require('./routes')

const PORT = 1337

const app = express()

app.use(volleyball)

app.use(express.json())
app.use(express.urlencoded())

app.use(routes)

app.listen(PORT, () => {
    console.log(`listening: http://localhost:${PORT}`)
})
