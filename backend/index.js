const express = require('express')
const app = express()

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Check Links')
})

app.listen(port, () => {
    console.log('Server is listening on http://localhost:' + port)
})