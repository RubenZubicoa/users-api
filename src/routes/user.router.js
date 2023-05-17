const { Router } = require('express')
const userController = require('../controllers/user.controller')

const router = Router();

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.get('/:userId', userController.getUser)
router.put('/:userId', userController.updateUser)
router.delete('/:userId', userController.deleteUser)


module.exports = router
