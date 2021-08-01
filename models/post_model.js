const mongoose = require('../db/connection')

const postSchema = new mongoose.Schema(
    {
        instance: {type: String, default: ""},
        imageUpload: { data: Buffer, contentType: String, default: "" },
        postedBy: {type: String, default: "unknown"}
    },
    { timestamps: true },
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post