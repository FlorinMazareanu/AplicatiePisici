var express = require('express');
var router = express.Router();

/* GET users listing.*/
router.get('/', function(req, res, next) {
  //let pulaJSON = {"lungime": "mare", "culoare": "neagra"};
  //let pulaObj = JSON.stringify(pulaJSON);
  res.send("test");
});



module.exports = router;
