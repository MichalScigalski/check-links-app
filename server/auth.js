const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        if(!token)
            return res.status(401).json({ message: 'Unauthorized'})
        jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
            if(err)
                return res.sendStatus(403)
            req.user = data
            next()
        })
    } catch (err) {
        return res.status(422).send({message: err.message})
    }
}