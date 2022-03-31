const Router = require('express');
const todoRouter = require('./todoRouter');
const todoListRouter = require('./todoListRouter');

const router = new Router();

router.use('/todo', todoRouter);
router.use('/list', todoListRouter);

module.exports = router;
