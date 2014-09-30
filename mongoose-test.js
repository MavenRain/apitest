var db = require('mongoose').connection;

db.on('error', console.error);

db.once('open', function(err, collection)
{
  collection.find('master',{number:1}, function(err, docs)
  {
    console.dir(docs);
  });
});

require('mongoose').connect('mongodb://localhost:5000/track-bugs');
