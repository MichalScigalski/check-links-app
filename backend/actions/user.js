const User = require('../db/models/user')

module.exports = {
    async register (req,res) {
        const username = req.body.username
        const password = req.body.password

        const userExists = await User.findOne({ username })
        if(userExists)
            return res.status(409).send({ message: 'User already exists!'})

        let user;
        
        try {
            user = new User({ username, password })
            await user.save()
        } catch (err) {
            console.log(req.body)
            return res.status(422).json({ message: err.message })
        }
        res.status(201).json(user)
    }, 
    async login (req,res) {
        res.status(200).send('Login request')
    } 
}