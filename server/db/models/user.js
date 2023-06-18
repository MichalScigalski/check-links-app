const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isProfile: {
        type: Boolean,
        default: false
    }
})

UserSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (err) {
        throw err
    }
}

const User = mongoose.model('User', UserSchema)

module.exports = User