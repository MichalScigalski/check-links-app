const express = require('express')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 3001

const app = express()

app.use(bodyParser.json());
app.use(cors())

app.use('/api/v1/', apiRouter)

app.listen(port, () => {
    console.log('Server is listening on http://localhost:' + port)
})