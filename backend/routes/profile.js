const express = require('express')
const profileActions = require('../actions/profile')
const auth = require('../auth')

const router = express.Router()

router.post('/create', auth, profileActions.create)
router.get('/user/:username', profileActions.profile)
router.post('/add-link', auth, profileActions.addLink)
router.delete('/delete-link/:id', auth, profileActions.deleteLink)
router.put('/edit-link/:id', auth, profileActions.editLink)
router.put('/toggle-link-visibility/:id', auth, profileActions.toggleVisibilityLink)

module.exports = router;