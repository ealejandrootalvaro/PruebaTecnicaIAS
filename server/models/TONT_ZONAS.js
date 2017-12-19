var sqlite3 = require('sqlite3').verbose();
var path = require('path');

const dbPath = path.resolve(__dirname, '../data/database');
var db = new sqlite3.Database(dbPath);

ZONAS = {};

ZONAS.getZonasPaises = function(callback){

  db.all("SELECT zona.DSNOMBRE as zona, zona.CDZONA as CDZONA, pais.DSNOMBRE as pais, pais.CDPAIS as CDPAIS FROM TONT_ZONAS zona, TONT_PAISES pais WHERE zona.CDZONA = pais.CDZONA", function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })


}


module.exports = ZONAS;
