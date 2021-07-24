const postData = require('./post_seeds.json')
const Post = require('../models/profile_model')

Post.deleteMany({})
    .then(() => {
        return Post.insertMany(postData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })