const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Posts = require('../models/post_model')
const bcrypt = require('bcrypt')
const localStrategy = require('passport-local').Strategy
const passport = require('passport')


// READ main feed
router.get('/days', (req, res) => {
    Posts.find()
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
        imageUpload: req.body.imageUpload
    }
    Posts.create(postInfo)
    .then((post) => {
        res.send(post)
        console.log(post)
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