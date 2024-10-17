
const epxress = require('express')

const app = epxress()

const postRoute = require('./routes/posts')
app.use('/posts', postRoute)

app.get('/', (req, res) => {
    res.send('hello')
})


app.listen(3000, () => {
    console.log('Server is up and running ...')
})
