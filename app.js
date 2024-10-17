
const epxress = require('express')
const app = epxress()

const mongoose = require('mongoose')
require('dotenv/config')

const bodyParser = require('body-parser')
const postRoute = require('./routes/posts')

app.use(bodyParser.json())
app.use('/posts', postRoute)

mongoose.connect(process.env.DB_CONNECTOR)

app.listen(3000, () => {
    console.log('Server is up and running ...')
})
