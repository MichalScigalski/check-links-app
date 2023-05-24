const express = require('express')
const router = express.Router()
const auth = require('../auth')

const userActions = require('../actions/user')
const profileActions = require('../actions/profile')

router.post('/login', userActions.login)
router.post('/register', userActions.register)
router.post('/create', auth, profileActions.create)
router.get('/profile/:username', profileActions.profile)
router.post('/profile/add-link', auth, profileActions.addLink)
router.delete('/profile/delete-link/:id', auth, profileActions.deleteLink)
router.put('/profile/edit-link/:id', auth, profileActions.editLink)


module.exports = router;