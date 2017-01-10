var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(`${__dirname}/dist/index.html`);
});

//- create the api
router.get('/api/testing', function(req, res, next) {
  res.send('testings');
});

module.exports = router;
