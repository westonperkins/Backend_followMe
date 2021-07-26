const mongoose = require('../db/connection')

const profileSchema = new mongoose.Schema(
    {
        profileImage: { data: Buffer, contentType: String, default: "" },
        name: { type: String, required: true, default: "" },
        username: { type: String, required: true, unique: true, default: ""},
        password: { type: String, required: true, default: "" },
        email: { type: String, required: true, unique: true, default: ""},
        company: {type: String, default: ""},
        occupation: { type: String, required: true, default: "" },
        position: {type: String, default: ""},
        software: {type: Array, default: ""},
        hardware: {type: Array, default: ""},
    },
    {
        timestamps: true
    }
)

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile