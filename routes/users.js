var express = require('express');
var router = express.Router();
var User = require('./user');
var URL = require('url');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/getUserInfo', function (req, res, next) {
  var user = new User();
  var params = URL.parse(req.url, true).query;
  if (params.id == '1') {
    user.name = "ligh";
    user.age = "1";
  } else {
    user.name = "SPTING";
    user.age = "1";
  }
  var response = { status: 1, data: user, other: 'love you' };
  res.send(JSON.stringify(response));
})


module.exports = router;
