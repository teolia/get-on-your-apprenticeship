var express = require('express');
const axios = require('axios').default;
var router = express.Router();

const URL_POUDLARSTUDENTS_API = 'http://hp-api.herokuapp.com/api/characters';

router.get('/', function (req, res) {
  res.send('This is real route');
});

router.get('/students', function (req, res) {
    var queryParam = req.query.house !== undefined ? "/house/" + req.query.house : "";
    console.log(queryParam);
    axios.get(URL_POUDLARSTUDENTS_API + queryParam)
    .then((response) => {
        res.json(response.data);
    })
    .catch((error) => {
        res.send(error);
    })
});

router.get('/randomstudent', function (req, res) {
    axios.get(URL_POUDLARSTUDENTS_API)
    .then((response) => {
        const rand = Math.round(Math.random() * 25);
        res.json(response.data[rand]);
    })
    .catch((error) => {
        res.send(error);
    })
});

module.exports = router;
