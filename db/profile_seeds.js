const profileData = require('./post_seeds.json')
const Profile = require('../models/profile_model')

Profile.deleteMany({})
    .then(() => {
        return Media.insertMany(profileData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })