const express = require('express')
const profileController = require('../controllers/profile')
const auth = require('../auth')

const router = express.Router()

router.post('/create', auth, profileController.create)
router.get('/user/:username', profileController.profile)
router.put('/edit-name', auth, profileController.editName)
router.post('/add-link', auth, profileController.addLink)
router.delete('/delete-link/:id', auth, profileController.deleteLink)
router.put('/edit-link/:id', auth, profileController.editLink)
router.put('/toggle-link-visibility/:id', auth, profileController.toggleVisibilityLink)
router.get('/dashboard', auth, profileController.dashboard)
router.put('/edit-background-color', auth, profileController.editBackgroundColor)

module.exports = router;