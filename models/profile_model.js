const mongoose = require('../db/connection')

const profileSchema = new mongoose.Schema(
    {
        profileImage: { data: Buffer, contentType: String },
        name: { type: String, required: true },
        userName: { type: String, required: true, unique: true} ,
        company: String,
        occupation: { type: String, required: true },
        position: String,
        software: Array,
        hardware: Array,
    }
)

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile