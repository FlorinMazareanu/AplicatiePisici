var express = require('express');
var router = express.Router();

let nrPisici = 0;
let arrayPisici = [];

//Partea comentata de mai jos a fost pt cand am hardcodat pisicile:
/*De clasa cu Pisica o sa ai probabil nevoie in addCat.js, nu aici in pisici.js
class Pisica {
    constructor(id, nume, descriere, imagine, detalii) {
        this.id = id;
        this.nume = nume;
        this.descriere = descriere;
        this.imagine = imagine;
        this.detalii = detalii;
    }
}
*/

//aici am instantiat pisicile hardcodate:
/*
let miaunel = new Pisica(0, "Miaunel", "Face miau intruna", "0.jpg", "etc etc etc");
let miaunica = new Pisica(1, "Miaunica", "Miauna toata ziua", "1.jpg", "detalii despre Miaunica");
let garfield = new Pisica(2, "Garfield", "I'm a cat that loves to snooze", "2.jpg", "g a r f i e l d");
*/

//aici am pushat pisicile hardcodate:
/*
arrayPisici.push(miaunel);
arrayPisici.push(miaunica);
arrayPisici.push(garfield);
*/


//Aici setez conexiunea (nu am reusit sa iau conexiunea din queries.js pt ca sunt tiny brain):

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

//Query pt a numara pisicile din DB
/*
var queryNumaraPisicile = "SELECT COUNT(id) AS numar FROM `tabel_pisici`;";
db.query(queryNumaraPisicile, function(err, result) {
  if (err) throw err;
  console.log("Acum numaram pisicile:");
  numaratoare = result[0].numar;
  console.log(numaratoare);
});
*/
//Query pt fetch pisici din DB:

var querySelectPisici = "SELECT * FROM `tabel_pisici`";
db.query(querySelectPisici, function(err, result) {
    if(err) throw err;
    //console.log("Aici se face fetch la pisicute din pisici.js");
    //console.log(result);
    arrayPisici.push(result);
});

//console.log("Acum se afiseaza arrayPisici:");
//console.log(arrayPisici);

/* Request GET pentru a trimite arrayul de pisici.*/
router.get('/', function(req, res, next) {
    //res.send(JSON.stringify(arrayPisici));
    res.send(arrayPisici);
  });



module.exports = router;
