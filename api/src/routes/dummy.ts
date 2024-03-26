import express from 'express';
const dummyRouter = express.Router();

dummyRouter.get('/', function (req, res, next) {
  res.send('This is dummy route');
});

dummyRouter.get('/student', function (req, res, next) {
  res.send('Harry Potter !');
});

dummyRouter.get('/students', function (req, res, next) {
  res.json([
    {
      name: 'Harry Potter',
      house: 'Gryffindor',
    },
    {
      name: 'Hermione Granger',
      house: 'Gryffindor',
    },
    {
      name: 'Ron Weasley',
      house: 'Gryffindor',
    },
    {
      name: 'Neville Longbottom',
      house: 'Gryffindor',
    },
    {
      name: 'Luna Lovegood',
      house: 'Ravenclaw',
    },
  ]);
});

export default dummyRouter;
