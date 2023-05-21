const express = require('express')
const router = express.Router()

const userActions = require('../actions/user')

router.post('/login', userActions.login)
router.post('/register', userActions.register)


module.exports = router;