const express = require('express')
const userActions = require('../actions/user')
const auth = require('../auth')

const router = express.Router()

router.post('/login', userActions.login)
router.post('/register', userActions.register)
router.put('/change-password', auth, userActions.changePassword)

module.exports = router;