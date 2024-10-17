
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('You are in posts')
})

module.exports = router
