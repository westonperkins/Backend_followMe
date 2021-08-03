const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Posts = require('../models/post_model')
const bcrypt = require('bcrypt')
const passport = require('passport')
const multer = require('multer')
const storage = multer.memoryStorage()
const auth = require('../middleware/auth')


// MULTER ------------------------------

const fileFilter = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})


// --------------------------------------



// READ main feed
router.get('/days', (req, res) => {
    Posts.find().sort({updatedAt:-1})
    .then((posts) => {
        res.send(posts)
        console.log(posts)
    })
})

// READ individual post

router.get('/:id', (req, res) => {
    let id = req.params.id
    Posts.find({_id: id})
    .then((post) => {
        res.send(post)
        console.log(post)
    })
})

// CREATE post

router.post('/newpost', (req, res) => {
    let postInfo = {
        instance: req.body.instance,
        imageUpload: req.body.imageUpload,
        postedBy: req.body.postedBy,
        date: req.body.date
    }
    Posts.create(postInfo)
    .then((post) => {
        console.log(post)
        Posts.find()
        .then((posts) => {
            res.send(post)
        })
    }) 
})

// EDIT post 

router.put('/:id/edit', (req, res) => {
    let id = req.params.id
    Posts.findOneAndUpdate(
        {_id:id}, 
        {instance: req.body.instance, imageUpload: req.body.imageUpload},
        {new: true})
    .then((post) => {
        res.json(post)
        console.log(post + "updated")
    })
})

// DELETE post 

router.delete('/:id', (req, res) => {
    let id = req.params.id
    Posts.findOneAndRemove({_id: id}) 
    .then((post) => {
        res.send(post)
        console.log(post + "deleted")
    })

})







// _______________________________

module.exports = router