const express = require('express')
const userController = require('../controllers/user')
const auth = require('../auth')

const router = express.Router()

router.post('/login', userController.login)
router.post('/register', userController.register)
router.put('/change-password', auth, userController.changePassword)
router.get('/get-isProfile', auth, userController.getIsProfile)

module.exports = router;