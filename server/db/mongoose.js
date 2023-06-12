const mongoose = require('mongoose')

const databaseurl = process.env.DATABASEURL || 'mongodb://localhost:27017/check-links' 

mongoose.connect(databaseurl)