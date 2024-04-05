import express from 'express';
const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

export default usersRouter;
