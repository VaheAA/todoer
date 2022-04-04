const Router = require('express');

const todoController = require('../controllers/todoController');

const router = new Router();

router.post('/', todoController.create);
router.get('/', todoController.getAll);
router.get('/:id', todoController.getOne);
router.delete('/:id', todoController.deleteItem);

module.exports = router;
