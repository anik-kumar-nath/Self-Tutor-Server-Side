const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('edu data load successfully')
})

app.listen(port, () => {
    console.log(`Listening port working ${port}`)
})