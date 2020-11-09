var express = require('express');
var router = express.Router();

//aici setez DB mysql
var mysql = require('mysql');
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pisiciDB'
  });
  
  db.connect((err) => {
    if (err) {
        throw err;
    }
    //console.log('Connected to database');
  });
  global.db = db;
  
  


/* GET users listing.*/
router.get('/', function(req, res, next) {
    //res.send("aici adaugi pisica");
    res.render('addCat.html');
});



module.exports = router;