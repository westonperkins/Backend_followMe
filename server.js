const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const crypto = require('crypto')
const localStrategy = require('passport-local').Strategy

const cors = require('cors')
const app = express()

const methodOverride = require('method-override')


app.use(cors())
app.use(express.json())

const profileController = require('./controllers/profileRouter')
const postsController = require('./controllers/postsRouter')

app.use(express.urlencoded({ extended: true }));

// SESSION–-------------------------------


// const connection = require('./userAuthConfig/database')

// const MongoStore = require('connect-mongo')(session);

// const sessionStore = new MongoStore({
//     mongooseConnection: connection,
//     collection: 'sessions'
// })

// app.use(session({
//     secret: "testSecret",
//     resave: false,
//     saveUninitialized: true,
//     store: sessionStore,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24
//     }
// }))

// PASSPORT-----------------------------


app.use(passport.initialize())
app.use(passport.session())
 
// ROUTES-------------------------------

app.use('/', profileController)
app.use('/posts', postsController)

// PORT---------------------------------

app.set('port', process.env.PORT || 5000 )

app.listen(app.get('port'), () => {
    console.log(`listening on ${app.get('port')}`)
})

