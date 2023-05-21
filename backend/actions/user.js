module.exports = {
    async register (req,res) {
        res.status(200).send('Register request')
    }, 
    async login (req,res) {
        res.status(200).send('Login request')
    } 
}