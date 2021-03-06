const Router = require('express');

const listController = require('../controllers/listController');

const router = new Router();

router.post('/', listController.create);
router.get('/', listController.getAll);
router.get('/:id', listController.getOne);
router.delete('/:id', listController.deleteList);

module.exports = router;
