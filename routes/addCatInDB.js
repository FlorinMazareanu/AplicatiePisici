var express = require('express');



//Aici setez body parser pt form:
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded

var router = express.Router();





//aici setez DB mysql
var mysql = require('mysql');
const { path } = require('../app');
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




router.post('/', function (req, res, next) {

    let numePisica = String(req.body.Pisica);
    let descrierePisica = req.body.descrierePisica;
    let detaliiPisica = req.body.detaliiPisica;

    //Query sa adaug pisica:
    var queryAddPisica = "INSERT INTO `tabel_pisici`(`Nume`, `Descriere`, `Imagine`, `Detalii`) VALUES ?";
    let valuesPtAddPisica = [[req.body.numePisica , req.body.descrierePisica, 'imagine', req.body.detaliiPisica]];
    db.query(queryAddPisica, [valuesPtAddPisica], function(err, result) {
      if (err) throw err;
    });
})



module.exports = router;