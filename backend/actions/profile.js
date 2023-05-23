// const User = require('../db/models/user');
const Profile = require('../db/models/profile')

module.exports = {
    async create(req, res) {
        const username = req.user.user.username;
        const profileExists = await Profile.findOne({ username });
        
        if(profileExists)
            return res.status(409).json({ message: "Profile already exists!" });
        try {
            const profile = new Profile({ username, links: [] })
            await profile.save()
        } catch (err) {
            res.status(422).json({ message: err.message });
        }
        res.sendStatus(200)
    },
    async profile(req, res) {
        const username = req.params.username
        const profile = await Profile.findOne({ username })

        if (profile)
            res.status(200).send({ profile })
        else
            res.status(404).send({ message: 'unknown user' })
    },
    async addLink(req, res) {
        const name = req.body.name
        const url = req.body.url
        const username = req.user.user.username;

        try {
            const profile = await Profile.findOne({ username })
            profile.links.push({ name, url })
            profile.save()
            res.sendStatus(201)
        } catch (err) {
            res.status(422).json({ message: err.message });
        }
    }
}