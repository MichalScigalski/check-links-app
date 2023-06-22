const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    isVisible: {
        type: Boolean,
        required: true,
        default: true
    }
})

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    links: [LinkSchema],
    backgroundColor: {
        type: String,
        required: false,
        default: '#49C98A'
    }
})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile