var express = require('express');
var router = express.Router();

let nrPisici = 0;
let arrayPisici = [];

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
  });
  global.db = db;

var querySelectPisici = "SELECT * FROM `tabel_pisici`";
db.query(querySelectPisici, function(err, result) {
    if(err) throw err;
    arrayPisici.push(result);
});



/* Request GET pentru a trimite arrayul de pisici.*/
router.get('/', function(req, res, next) {
    //res.send(JSON.stringify(arrayPisici));
    res.send(arrayPisici);
  });



module.exports = router;
