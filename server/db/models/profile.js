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
    is_visible: {
        type: Boolean,
        required: true,
        default: true
    }
})

const ProfileSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    display_name: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    links: [LinkSchema]
})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile