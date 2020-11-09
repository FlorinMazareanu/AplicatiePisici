//aici setez DB mysql
/*
var mysql = require('mysql');
const express = require('express');

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
  console.log('Connected to database');
});
global.db = db;
*/

//Aici am queries pe care o sa le folosesc:


//aici am un test de insert (test passed, dar am comentat sa nu tot adauge):
/*
let idTesttable = 5;
let testInsertValoare = "Mitica";
var sql = "INSERT INTO `tabeltest`(`id`, `nume`) VALUES ?";
var valoriTest = [
[4, 'Gigel'],
[5, 'Florica'],
[6, testInsertValoare]
];

db.query(sql, [valoriTest], function(err, result){
 if (err) throw err;
 console.log("am bagat ceva in tabel ^^")
});
*/

//asa numar chestiile(e test, dar PASSED):
/*
var sql = "SELECT COUNT(id) AS numar FROM tabeltest;";
db.query(sql, function(err, result){
  if (err) throw err;
  console.log(result);
  console.log("===");
  numaratoare = result[0].numar;
  console.log("Uite atatea chestii ai in tabeltest: " + numaratoare);
});
*/

