const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

const isOnlyLettersAndNumbers = (text) => {
    return /^[A-Za-z0-9]*$/.test(text)
}

const isUsernameAllowed = (username) => {
    const blacklistedUsernames = process.env.BLACKLISTED_USERNAMES.split(',')
    if (blacklistedUsernames.includes(username))
        return false
    return true
}

module.exports = {
    hashPassword,
    isOnlyLettersAndNumbers,
    isUsernameAllowed
}
