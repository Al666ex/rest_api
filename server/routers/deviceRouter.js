
const Router = require('express');
const deviceController = require('../controllers/deviceController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

module.exports = router;