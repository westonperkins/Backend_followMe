const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const methodOverride = require('method-override')


app.use(cors())
app.use(express.json())

const profileController = require('./controllers/profileRouter')
const postsController = require('./controllers/postsRouter')

// app.use('./profiles', profileController)
// app.use('./posts', postsController)


app.use('/', profileController)
app.use('/posts', postsController)

require('dotenv').config()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));





app.set('port', process.env.PORT || 5000 )

app.listen(app.get('port'), () => {
    console.log(`listening on ${app.get('port')}`)
})

