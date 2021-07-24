const mongoose = require('../db/connection')

const postSchema = new mongoose.Schema(
    {
        instance: String,
        imageUpload: { data: Buffer, contentType: String },
    },
    { timestamps: true },
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post