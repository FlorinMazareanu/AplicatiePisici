var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var router = express.Router();
const formidable = require('express-formidable');
router.use(formidable());

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
  
router.get('/', function(req, res, next) {
    res.render('register.html');
});

router.post('/', async (req, res) => {
    //res.send(JSON.stringify(req.fields));
    res.send(req.fields);
});



module.exports = router;