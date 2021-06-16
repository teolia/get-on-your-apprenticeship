var express = require('express');
const axios = require('axios').default;
var router = express.Router();

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
projectId: 'harrypotter-api-316818',
keyFilename: './key/harrypotter-api-316818-09c318c27f60.json',
});

const URL_POUDLARSTUDENTS_API = 'http://hp-api.herokuapp.com/api/characters';

router.get('/', function (req, res) {
  res.send('This is real route');
});

router.get('/students', function (req, res) {
    var queryParam = req.query.house !== undefined ? "/house/" + req.query.house : "";
    axios.get(URL_POUDLARSTUDENTS_API + queryParam)
    .then((response) => {
        res.json(response.data);
    })
    .catch((error) => {
        res.send(error);
    })
});

router.get('/randomstudent', function (req, res) {
    var queryParam = req.query.house !== undefined ? "/house/" + req.query.house : "";
    axios.get(URL_POUDLARSTUDENTS_API + queryParam)
    .then((response) => {
        const rand = Math.round(Math.random() * (response.data.length - 1));
        res.json(response.data[rand]);
    })
    .catch((error) => {
        res.send(error);
    })
});

module.exports = router;
