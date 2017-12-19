var sqlite3 = require('sqlite3').verbose();
var path = require('path');

const dbPath = path.resolve(__dirname, '../data/database');
var db = new sqlite3.Database(dbPath);


AVES = {};

  db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS TONT_AVES (CDAVE VARCHAR(5) PRIMARY KEY, DSNOMBRE_COMUN VARCHAR(100), DSNOMBRE_CIENTIFICO VARCHAR(200) UNIQUE)");
    db.run("CREATE TABLE IF NOT EXISTS TONT_ZONAS (CDZONA VARCHAR(3) PRIMARY KEY, DSNOMBRE VARCHAR(45) UNIQUE)")
    db.run("CREATE TABLE IF NOT EXISTS TONT_PAISES (CDPAIS VARCHAR(3) UNIQUE, DSNOMBRE VARCHAR(100) UNIQUE, CDZONA VARCHAR(3))")
    db.run("CREATE TABLE IF NOT EXISTS TONT_AVES_PAIS (CDPAIS VARCHAR(3) REFERENCES TONT_PAISES(CDPAIS) ON DELETE CASCADE, CDAVE VARCHAR(5) REFERENCES TONT_AVES(CDAVE) ON DELETE CASCADE)")


    db.run("INSERT INTO TONT_ZONAS VALUES ('Z01','SURAMERICA'), ('Z02','NORTEAMERICA')");
    db.run("INSERT INTO TONT_PAISES VALUES ('COL','COLOMBIA','Z01'), ('USA','ESTADOS UNIDOS','Z02')")

    db.run("INSERT INTO TONT_AVES VALUES ('001','Lorito','Bolborhynchus ferrugineifrons'), ('002','Tangua','Chlorochrysa nitidissima'), ('003','Paloma','Columbina'), ('004','Aguila Calva','Haliaeetus leucocephalus')")

    db.run("INSERT INTO TONT_AVES_PAIS VALUES ('COL','001'), ('COL','002'), ('COL','003'), ('USA','004'), ('USA','003')")

  });
