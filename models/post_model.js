const mongoose = require('../db/connection')

const postSchema = new mongoose.Schema(
    {
        instance: {type: String, default: ""},
        imageUpload: { data: Buffer, contentType: String, default: "" },
        postedBy: {type: String, default: "unknown"},
        date: {type: Date, default: Date.now}
    },
    { timestamps: true },
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post