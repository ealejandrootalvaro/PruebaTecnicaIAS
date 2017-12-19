var sqlite3 = require('sqlite3').verbose();

var express = require('express');
var path = require('path');
var app = express();
//var cors = require('cors');

const dbPath = path.resolve(__dirname, 'data/database');

var db = new sqlite3.Database(dbPath);

var AVES = require('./models/TONT_AVES');
var ZONAS = require('./models/TONT_ZONAS');

var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../build'))); //folder for static files (.html)
app.use(bodyParser.json());  //support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(8080);
console.log("App listen on port 8080");

app.get('/api/aves', function(req,res){

  AVES.getAll(function(error,data){
    res.json(data);
    res.end();
  });

});

app.get('/api/aves/solo', function(req,res){

  AVES.getAllSinPaises(function(error,data){
    res.json(data);
    res.end();
  })
  
});

app.get('/api/zonas', function(req,res){

  ZONAS.getZonasPaises(function(error,data){
    res.json(data);
    res.end();
  });

});


app.post('/api/aves',function(req,res){

  AVES.insert(function(data){
    res.json(data);
    res.end();
  }, req.body.ave, res);

})

app.put('/api/aves/:cdave', function(req,res){

  AVES.update(function(data){
    res.json(data);
    res.end();
  }, req.params.cdave, req.body.ave, res);

})

app.delete('/api/aves/:cdave', function(req,res){

  AVES.delete(req.params.cdave);
  res.end();

})

app.get('/', function(req,res){
  res.sendfile('./build/index.html')
})
