const postData = require('./post_seeds.json')
const Post = require('../models/post_model.js')

Post.deleteMany({})
    .then(() => {
        return Post.insertMany(postData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })