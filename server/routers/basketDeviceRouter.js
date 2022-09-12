
const Router = require('express')
const BasketDeviceController = require('../controllers/basketDeviceController')

const router = new Router()

router.post('/', BasketDeviceController.create)
router.getAll('/',BasketDeviceController.getAll)

module.exports = router
