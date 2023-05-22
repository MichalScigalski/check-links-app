const express = require('express')
const router = express.Router()
const auth = require('../auth')

const userActions = require('../actions/user')
const profileActions = require('../actions/profile')

router.post('/login', userActions.login)
router.post('/register', userActions.register)
router.post('/create', auth, profileActions.create)


module.exports = router;