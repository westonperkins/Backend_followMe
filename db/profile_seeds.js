const profileData = require('./profile_seeds.json')
const Profile = require('../models/profile_model.js')

Profile.deleteMany({})
    .then(() => {
        return Profile.insertMany(profileData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })