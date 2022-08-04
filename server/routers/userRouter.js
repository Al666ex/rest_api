const Router = require('express')
const UserController = require('../controllers/userController')
const UserMiddleware = require('../middleware/userMiddleware')


const router = new Router()

router.post('/registration',UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', UserMiddleware,  UserController.check)

module.exports = router;