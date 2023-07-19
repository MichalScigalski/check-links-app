const jwt = require('jsonwebtoken')
const User = require('../db/models/user')
const {
    hashPassword,
    isOnlyLettersAndNumbers,
    isUsernameAllowed,
} = require('../helper')

module.exports = {
    async register(req, res) {
        const username = req.body.username
        const password = req.body.password

        if (!isOnlyLettersAndNumbers(username) || !isUsernameAllowed(username))
            return res
                .status(403)
                .json({ message: 'This username is not allowed!' })

        const userExists = await User.findOne({ username })
        if (userExists)
            return res.status(409).json({ message: 'User already exists!' })
        if (username.length < 4 || password.length < 4)
            return res
                .status(500)
                .json({ message: 'Username or password is too short!' })
        let user
        try {
            user = new User({ username, password })
            user.password = await hashPassword(user.password)
            await user.save()
            res.sendStatus(201)
        } catch (err) {
            res.status(422).json({ message: err.message })
        }
    },
    async login(req, res) {
        const username = req.body.username
        const password = req.body.password

        try {
            const user = await User.findOne({ username })
            if (!user)
                return res
                    .status(403)
                    .json({ message: 'Username or password is wrong!' })
            else {
                const isValidPassword = await user.isValidPassword(password)
                if (!isValidPassword)
                    return res
                        .status(403)
                        .json({ message: 'Username or password is wrong!' })
                const token = jwt.sign(
                    { id: user._id, username },
                    process.env.TOKEN_SECRET,
                    { expiresIn: '30m' }
                )
                res.status(200).json({ token })
            }
        } catch (err) {
            return res.status(422).json({ message: err.message })
        }
    },
    async changePassword(req, res) {
        const newPassword = req.body.newPassword
        const _id = req.user.id

        if (newPassword.length < 4)
            return res.status(403).json({ message: 'Password is too short!' })

        try {
            const hashedPassword = await hashPassword(newPassword)
            await User.findByIdAndUpdate(_id, { password: hashedPassword })
            res.sendStatus(200)
        } catch (err) {
            return res.status(422).json({ message: err.message })
        }
    },
}
