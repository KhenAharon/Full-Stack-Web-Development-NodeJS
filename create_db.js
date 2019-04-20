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
	var faker = require('faker');
	var user1;

	for(var i=0; i<1000; i++){
		var randomName = faker.name.findName();
		var randomLatitude= faker.address.latitude();
		var randomLongitude= faker.address.longitude();
		user1 = new User({ name: randomName, id: i, location_longitude: randomLongitude, location_latitude:randomLatitude });
		user1.save(function (err, user1) {
		  if (err) {
		  	console.log("error")
		  }
		});
	}
});
process.exit();