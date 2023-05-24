const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const ProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    links: [LinkSchema]
})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile