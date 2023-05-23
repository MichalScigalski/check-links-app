const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    links: []
})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile