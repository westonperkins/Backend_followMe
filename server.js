const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')

const postController = require('./controllers/posts')

app.use('/', postController)

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 5000 )

app.listen(app.get('port'), () => {
    console.log(`listening on ${app.get('port')}`)
})

