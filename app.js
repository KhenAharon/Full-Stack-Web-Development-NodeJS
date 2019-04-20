const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
var db = mongoose.connection;
var longitudes = [], latitudes = [], names = [];
 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 	// we're connected!
    var userSchema = new mongoose.Schema({
        name: String,
        id: Number,
        location_latitude: String,
        location_longitude: String
    });
  var User = mongoose.model('User', userSchema);
    User.find(function (err, users) {
        if (err) return console.error(err);
        for(var j = 0; j < 1000; j++)
        {
            latitudes.push(users[j].location_latitude);
            longitudes.push(users[j].location_longitude);
            names.push(users[j].name);
        }
    });
});

// express server uses Cross Origin Policy (CORS)
// to enable access from the browser (port 80) to this server (port 3000).
var express = require('express'),
    cors = require('cors'),
    port = 3000,
    app = express();
    
//app always uses cors. alternatively, we can add cors() as the second parameter in the below get method.
app.use(cors()); 

app.get('/', function(req, res){
  res.json({
    longitudes: longitudes,
    latitudes: latitudes,
    names: names
  });
});

app.listen(port, function(){
  console.log('Express server listening on port ' + port + '.');
});