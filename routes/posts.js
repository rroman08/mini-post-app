
const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

router.post('/', async (req, res) => {
    
    const postData = new Post({
        user: req.body.user,
        title: req.body.title,
        text: req.body.text,
        hashtag: req.body.hashtag,
        location: req.body.location,
        url: req.body.url
    })

    try {
        const postToSave = await postData.save()
        res.send(postToSave)
    } catch(err) {
        res.send({message: err})
    }
})

router.get('/', async (req, res) => {
    
    try {
        const getPosts = await Post.find()
        res.send(getPosts)
    } catch(err) {
        res.send({message: err})
    }
})

router.get('/:postId', async (req, res) => {
    
    try {
        const getPostById = await Post.findById(req.params.postId)
        res.send(getPostById)
    } catch(err) {
        res.send({message: err})
    }
})

router.patch('/:postId', async (req, res) => {

    try {
        const updatePostById = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {
                user: req.body.user,
                title: req.body.title,
                text: req.body.text,
                hashtag: req.body.hashtag,
                location: req.body.location,
                url: req.body.url
                }
            }
        )
        res.send(updatePostById)
    } catch(err) {
        res.send({message: err})
    }
})

module.exports = router
