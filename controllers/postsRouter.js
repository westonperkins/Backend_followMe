const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Posts = require('../models/post_model')
const bcrypt = require('bcrypt')
const localStrategy = require('passport-local').Strategy
const passport = require('passport')


// READ main feed
router.get('/posts', (req, res) => {
    Posts.find({})
    .then((posts) => {
        res.send(posts)
        console.log(posts)
    })
})

// READ individual post

router.get('/posts/:id', (req, res) => {
    let id = req.params.id

})

// CREATE post

router.post('/newpost', (req, res) => {

})

// DELETE post 

router.delete('/post/:id', (req, res) => {
    let id = req.params.id

})







// _______________________________

module.exports = router