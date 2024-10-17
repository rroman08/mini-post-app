
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

module.exports = router
