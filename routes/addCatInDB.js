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
  
  /*Aici fac query pt add pisica (am mutat asta in router.post ca sa am variabile):
  var queryAddPisica = "INSERT INTO `tabel_pisici`(`ID`, `Nume`, `Descriere`, `Imagine`, `Detalii`) VALUES ?";
  let valuesPtAddPisica = [['idTest3', 'numeTest', 'descriereTest', 'imagineTest', 'detaliiTest']];
  db.query(queryAddPisica, [valuesPtAddPisica], function(err, result) {
    if (err) throw err;
  });
  */

/* Aici e POST si da chestii pe pagina cand se face POST, nu si cand se face GET*/


router.post('/', function (req, res, next) {
    // Aici fac teste in consola:
    console.log("s-a facut POST pe addCatinDB");
    console.log(req.body);
    console.log(req.body.numePisica);
    console.log(req.body.descrierePisica);
    console.log(req.body.detaliiPisica);
    //Aici bag tot ce e luat prin request in variabile ca sa bag in DB:
    let numePisica = String(req.body.Pisica);
    //console.log(numePisica);
    let descrierePisica = req.body.descrierePisica;
    //console.log(numePisica);
    let detaliiPisica = req.body.detaliiPisica;
    //console.log(numePisica);

    /* NU MAI E NEVOIE Query care numara cate pisici sunt ca sa stiu ce ID sa bag cand le inserez in tabel:
    var queryNumaraPisicile = "SELECT COUNT(id) AS numar FROM `tabel_pisici`;";
    db.query(queryNumaraPisicile, function(err, result) {
      if (err) throw err;
      console.log("Acum numaram pisicile:");
      numaratoare = result[0].numar;
      console.log(numaratoare);
    });
    */
    //Query sa adaug pisica:
    var queryAddPisica = "INSERT INTO `tabel_pisici`(`Nume`, `Descriere`, `Imagine`, `Detalii`) VALUES ?";
    let valuesPtAddPisica = [[req.body.numePisica , req.body.descrierePisica, 'imagine', req.body.detaliiPisica]];
    db.query(queryAddPisica, [valuesPtAddPisica], function(err, result) {
      if (err) throw err;
    });
})



module.exports = router;