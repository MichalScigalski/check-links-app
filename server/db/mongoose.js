const mongoose = require('mongoose')

const databaseurl = process.env.DATABASE_URL

mongoose.connect(databaseurl)