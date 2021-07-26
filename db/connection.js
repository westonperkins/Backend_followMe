const mongoose = require('mongoose')

const mongoURI = process.env.NODE_ENV === 'production'
? process.env.DB_URL
: 'mongodb://localhost/followmeLocal'

mongoose 
    .connect(mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })

    .then((instance) => 
        console.log(`connected to db: ${instance.connections[0].name}`)
    )
    .catch((error) => console.log('conneciton failed..', error))

module.exports = mongoose