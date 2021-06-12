var express = require('express');
const axios = require('axios').default;
var router = express.Router();

const URL_POUDLARSTUDENTS_API = 'http://hp-api.herokuapp.com/api/characters';

router.get('/', function (req, res) {
  res.send('This is real route');
});

router.get('/students', function (req, res) {
    axios.get(URL_POUDLARSTUDENTS_API)
    .then((response) => {
        console.log(response);
        res.json(response.data);
    })
    .catch((error) => {
        res.send(error);
    })
});

module.exports = router;
