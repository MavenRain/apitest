// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:5000/exampleDb", function(err, 
db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('test');
  var docs = [{mykey:1}, {mykey:2}, {mykey:3}];
  /*
  collection.insert(docs, {w:1}, function(err, result) {
    
    collection.find().toArray(function(err, items) {});

    var stream = collection.find({mykey:{$ne:2}}).stream();
    stream.on("data", function(item) {});
    stream.on("end", function() {});

    collection.findOne({mykey:1}, function(err, item) {});
    */
    var app = (require('express'))();
    app.get('/', function(req, res)
    {
      var cursor = collection.find().toArray(function(err,docs)
      {
        var strQuery = "";
        for (var i=0; i<docs.length; i++) 
        { if (i===docs.length-1) strQuery += JSON.stringify(docs[i]);
          else strQuery += JSON.stringify(docs[i])+',';
        }
        res.writeHead(200,{'Content-Type': 'application/json',
                         'Access-Control-Allow-Origin': '*',
			 'Access-Control-Allow-Methods': '*',
			 'Access-Control-Allow-Headers': '*'});
        res.write('['+strQuery+']');
        res.end();
      });
    });
    app.listen(3000);

  //});
});

