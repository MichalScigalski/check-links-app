// const User = require('../db/models/user');
const Profile = require('../db/models/profile')

module.exports = {
    async create(req, res) {
        const username = req.user.user.username;
        const profileExists = await Profile.findOne({ username });
        
        if(profileExists)
            return res.status(409).json({ message: "Profile already exists" });
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
            res.status(404).send({ message: 'Unknown user' })
    },
    async addLink(req, res) {
        const name = req.body.name
        const url = req.body.url
        const username = req.user.user.username;

        try {
            const profile = await Profile.findOne({ username })
            profile.links.push({ name, url })
            await profile.save()
            res.sendStatus(201)
        } catch (err) {
            res.status(422).json({ message: err.message });
        }
    },
    async deleteLink(req, res) {
        const username = req.user.user.username
        const id_link = req.params.id
        
        try {
            const profile = await Profile.findOne({username})
            profile.links = profile.links.filter(link => link._id != id_link)
            await profile.save()
            res.sendStatus(204)
        }
        catch (err) {
            res.status(422).json({ message: err.message });
        }
    },
    async editLink(req, res) {
        const username = req.user.user.username
        const id_link = req.params.id

        const nameLink = req.body.name
        const urlLink = req.body.url

        try {
            if(!nameLink || !urlLink) 
                return res.status(404).send({ message: 'Wrong data' })
            
            const profile = await Profile.findOne({username})
            const link = profile.links[profile.links.findIndex(link => link._id == id_link)]
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
        const id_link = req.params.id
        const username = req.user.user.username

        try {
            const profile = await Profile.findOne({username})
            const link = profile.links[profile.links.findIndex(link => link._id == id_link)]
            link.isVisible = !link.isVisible
            profile.save()
            res.sendStatus(204)
        }
        catch (err) {
            res.status(422).json({ message: err.message });
        }
    }
}