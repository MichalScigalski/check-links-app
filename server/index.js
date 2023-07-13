const express = require('express')
const profileRouter = require('./routes/profile')
const userRouter = require('./routes/user')
const cors = require('cors')

require('dotenv').config()
require('./db/mongoose')

const port = process.env.PORT || 3001
const origin = process.env.CLIENT_URL

const app = express()

const corsConfig = {
    origin: [origin],
    methods: ["POST", "GET"],
    credentials: true
}

app.use(express.json())
app.use(cors(corsConfig))

app.use('/api/v1/user', userRouter)
app.use('/api/v1/profile', profileRouter)

app.listen(port, () => {
    console.log('Server is listening on http://localhost:' + port)
})
