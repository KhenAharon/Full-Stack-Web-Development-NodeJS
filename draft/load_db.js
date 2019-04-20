        const mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

        var db = mongoose.connection;
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
          //var marker;
          //marker = new google.maps.Marker({position: {lat:1,lng:2}, map: map});
	        User.find(function (err, users) {
		        if (err) return console.error(err);
		        for(var j=0;j<1000;j++)
		        {
		            console.log("lat:"+users[j].location_latitude);
		            console.log("lng:"+users[j].location_longitude);
		        }
	        });
        });