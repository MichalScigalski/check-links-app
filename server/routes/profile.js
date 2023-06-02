const express = require('express')
const profileController = require('../controllers/profile')
const auth = require('../auth')

const router = express.Router()

router.post('/create', auth, profileController.create)
router.get('/user/:username', profileController.profile)
router.post('/add-link', auth, profileController.addLink)
router.delete('/delete-link/:id', auth, profileController.deleteLink)
router.put('/edit-link/:id', auth, profileController.editLink)
router.put('/toggle-link-visibility/:id', auth, profileController.toggleVisibilityLink)

module.exports = router;