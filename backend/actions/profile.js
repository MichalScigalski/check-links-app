// const User = require('../db/models/user');
const Profile = require('../db/models/profile')

module.exports = {
    async create(req, res) {
        const username = req.user.user.username;
        try {
            const profile = new Profile({ username, links: [] })
            await profile.save()
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }
        res.sendStatus(200)
    },
    async profile(req, res) {
        const username = req.params.username
        const profile = await Profile.findOne({ username })

        if (profile)
            res.status(200).send({ profile })
        else
            res.status(404).send({ message: 'uknown user' })
    },
}