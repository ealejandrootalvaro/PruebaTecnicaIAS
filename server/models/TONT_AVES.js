var sqlite3 = require('sqlite3').verbose();
var path = require('path');

const dbPath = path.resolve(__dirname, '../data/database');
var db = new sqlite3.Database(dbPath);


AVES = {};


AVES.getAll = function(callback){
  db.all("SELECT group_concat(TONT_PAISES.DSNOMBRE) as paises, TONT_AVES.CDAVE as CDAVE, TONT_AVES.DSNOMBRE_COMUN as DSNOMBRE_COMUN, TONT_AVES.DSNOMBRE_CIENTIFICO as DSNOMBRE_CIENTIFICO FROM TONT_AVES JOIN TONT_AVES_PAIS ON TONT_AVES.CDAVE = TONT_AVES_PAIS.CDAVE JOIN TONT_PAISES ON TONT_AVES_PAIS.CDPAIS = TONT_PAISES.CDPAIS GROUP BY TONT_AVES.CDAVE", function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null, rows);
    }
  })
}

AVES.getAllSinPaises = function(callback){
  db.all("SELECT * FROM TONT_AVES", function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

AVES.insert = function(callback, ave, res){

  db.run("INSERT INTO TONT_AVES VALUES (?,?,?)",[ave.CDAVE, ave.DSNOMBRE_COMUN, ave.DSNOMBRE_CIENTIFICO], function(err,rows){

    if(err){
      res.status(400);
      console.log(err.message.toString());
      console.log(err.toString())
      callback({error:err.message});
    }else{

      var stmtPaises = db.prepare('INSERT INTO TONT_AVES_PAIS VALUES (?,?)')

      let stringPaises = "";
      let paisesLength = ave.paises.length;

      for (var i = 0; i < paisesLength; i++) {

        stringPaises = stringPaises + ave.paises[i].pais;

        if(i< paisesLength - 1){
          stringPaises = stringPaises + ",";
        }

        stmtPaises.run([ave.paises[i].CDPAIS, ave.CDAVE]);

      }

      ave.paises = stringPaises;

      callback({"type":"success","ave":ave});

    }

  });


}

AVES.update = function(callback, cdave, ave, res){
  var stmt = db.run("UPDATE TONT_AVES SET DSNOMBRE_COMUN = ?, DSNOMBRE_CIENTIFICO = ? WHERE CDAVE = ? ", [ave.DSNOMBRE_COMUN, ave.DSNOMBRE_CIENTIFICO, cdave], function(err,rows){
    if(err){
      res.status(400);
      callback(err);
    }else{
      callback({"type":"success"});
    }
  });

}

AVES.delete = function(cdave){
  db.run("DELETE FROM TONT_AVES WHERE CDAVE = ?",[cdave]);
}

module.exports = AVES;
