const jwt = require("jsonwebtoken");
const User = require("../db/models/user");

module.exports = {
    async register(req, res) {
        const username = req.body.username;
        const password = req.body.password;

        const userExists = await User.findOne({ username });
        if (userExists)
            return res.status(409).json({ message: "User already exists!" });

        if (username.length < 4 || password.length < 4)
            return res
                .status(500)
                .json({ message: "Username or password is too short!" });

        let user;

        try {
            user = new User({ username, password });
            await user.save();
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }
        res.status(201).json(user);
    },
    async login(req, res) {
        const username = req.body.username;
        const password = req.body.password;

        try {
            const user = await User.findOne({ username });
            if (!user)
                return res
                    .status(403)
                    .json({ message: "Username or password is wrong!" });
            if (user.password === password) {
                const token = jwt.sign(
                        { user }, 
                        process.env.TOKEN_SECRET, 
                        {expiresIn: "20m",}
                    );
                res.status(200).json({ user, token });
            }
        } catch (err) {
            return res.statsu(422).json({ message: err.message });
        }
    },
};
