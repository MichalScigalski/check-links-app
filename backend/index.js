const express = require('express')
const apiRouter = require('./routes/api')
const cors = require('cors')

require('dotenv').config()
require('./db/mongoose')

const port = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/', apiRouter)

app.listen(port, () => {
    console.log('Server is listening on http://localhost:' + port)
})