const Profile = require('../db/models/profile');
const User = require('../db/models/user');

module.exports = {
    async create(req, res) {
        const userId = req.user.id
        const username = req.user.username
        const profileExists = await Profile.findOne({ userId })

        if (profileExists)
            return res.status(409).json({ message: "Profile already exists" })
        try {
            const profile = new Profile({
                userId,
                displayName: username,
                username,
                links: []
            })
            await User.findByIdAndUpdate(userId, { isProfile: true })
            await profile.save()
        } catch (err) {
            res.status(422).json({ message: err.message })
        }
        res.sendStatus(200)
    },
    async profile(req, res) {
        const username = req.params.username
        const profile = await Profile.findOne({ username })

        if (profile)
            res.status(200).send({ profile })
        else
            res.status(404).send({ message: 'Unknown user' })
    },
    async dashboard(req, res) {
        const userId = req.user.id
        const user = await User.findOne({ _id: userId })

        try {
            if (user.isProfile) {
                const profile = await Profile.findOne({ userId })
                res.status(200).json({ profile })
            } else {
                res.status(404).json({ message: 'You need to create profile' })
            }

        } catch (err) {
            res.status(422).json({ message: err.message })
        }
    },
    async editName(req, res) {
        const userId = req.user.id
        const displayName = req.body.displayName

        try {
            if (!displayName)
                return res.status(404).send({ message: 'Wrong data' })
            const profile = await Profile.findOne({ userId })
            profile.displayName = displayName
            profile.save()
            res.sendStatus(204)
        }
        catch (err) {
            res.status(422).json({ message: err.message });
        }
    },
    async addLink(req, res) {
        const name = req.body.name
        const url = req.body.url
        const userId = req.user.id;

        try {
            const profile = await Profile.findOne({ userId })
            profile.links.push({ name, url })
            await profile.save()
            res.sendStatus(201)
        } catch (err) {
            res.status(422).json({ message: err.message });
        }
    },
    async deleteLink(req, res) {
        const userId = req.user.id
        const linkId = req.params.id

        try {
            const profile = await Profile.findOne({ userId })
            profile.links = profile.links.filter(link => link._id != linkId)
            await profile.save()
            res.sendStatus(204)
        }
        catch (err) {
            res.status(422).json({ message: err.message });
        }
    },
    async editLink(req, res) {
        const userId = req.user.id
        const linkId = req.params.id

        const nameLink = req.body.name
        const urlLink = req.body.url

        try {
            if (!nameLink || !urlLink)
                return res.status(404).send({ message: 'Wrong data' })

            const profile = await Profile.findOne({ userId })
            const link = profile.links.find(link => link._id == linkId)
            link.name = nameLink;
            link.url = urlLink;
            profile.save()
            res.sendStatus(204)
        }
        catch (err) {
            res.status(422).json({ message: err.message });
        }
    },
    async toggleVisibilityLink(req, res) {
        const linkId = req.params.id
        const userId = req.user.id

        try {
            const profile = await Profile.findOne({ userId })
            const link = profile.links.find(link => link._id == linkId)
            link.isVisible = !link.isVisible
            profile.save()
            res.sendStatus(204)
        }
        catch (err) {
            res.status(422).json({ message: err.message });
        }
    }
}