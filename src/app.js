const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const wishlistRouter = require('./routes/wishlist')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '..', 'client/build')))

app.use('/', indexRouter)
app.use('/wishlist', wishlistRouter)

module.exports = app
