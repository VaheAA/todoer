const Router = require('express');
const todoRouter = require('./todoRouter');
const todoListRouter = require('./todoListRouter');
const userRouter = require('./userRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/todo', todoRouter);
router.use('/list', todoListRouter);

module.exports = router;
