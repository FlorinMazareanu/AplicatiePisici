var express = require('express');


//Aici setez body parser pt form:
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded




//Aici setez Multer ca sa fac upload file:
const multer = require('multer');


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

var upload = multer({ storage: storage });

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
  

/* Aici e POST si da chestii pe pagina cand se face POST, nu si cand se face GET*/

/*
router.post('/', upload.single('imaginePisica'), function (req, res, next) {
    // Aici fac teste in consola:
    console.log("S-a facut post in addCatPic");
    console.log(req.file.filename);
    res.send(req.file);
})
*/

router.post('/', upload.single('imaginePisicaBrowse'), (req, res) => {
  console.log("s-a facut post pe addCatPic");
  if (!req.file) {
    //console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    console.log(req.file.originalname);
    let ultimaImagine = req.file.originalname;
    //console.log(ultimaImagine);
    //Aici e query care gaseste ultimul ID din tabel:
    var ultimulID;
    function functieCareIaID(result) {
      //console.log("AICI SE IA ID:")
      //console.log(result);
      ultimulID = result;
      //console.log("acum ultimulID == " + ultimulID);

      //Aici trebuie sa fac un query in care sa modific ultimul rand din tabel sa aiba req.file.originalname la coloana Imagine:
      var querySchimbaPoza = "UPDATE `tabel_pisici` SET `Imagine` = ? WHERE `ID` = ?";
      let data = [ultimaImagine, ultimulID];
      //console.log(typeof(ultimulID));
      db.query(querySchimbaPoza, data, function(err, result){
        //console.log(result);
      });
    }
    //console.log("acum ultimulID e sigur == " + ultimulID);
    var queryLuatUltimulID = "SELECT * FROM `tabel_pisici` ORDER BY ID DESC LIMIT 1";
    db.query(queryLuatUltimulID, function(err, result){
      if(err) throw err;
      ultimulID = result[0].ID;
      result = result[0].ID;
      functieCareIaID(result);
      //console.log("Ultimul ID fix dupa ce l-am cautat in primul query: " + ultimulID);
    });
    //console.log("Ultimul ID fix inainte de a fi folosit:"  + ultimulID);
    
    return res.render('addedCat.html');
  }

});



module.exports = router;