const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000
app.use(cors())

app.get('/', (req, res) => {
    res.send('edu data load successfully')
})

const Courses = require('./JSONData/Courses.json');
app.get('/courses', (req, res) => {
    res.send(Courses);
})

app.get('/course/:id', (req, res) => {
    const Course = Courses.find(course => course._id === req.params.id);
    res.send(Course);
})

app.listen(port, () => {
    console.log(`Listening port working ${port}`)
})