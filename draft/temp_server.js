    function placeMarker()
    {

      var place = {lat: -25.344, lng: 131.036};
      var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: place});
      var marker = new google.maps.Marker({position: place, map: map});

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
            if (err) return console.log(err);
            for(var j=0;j<1000;j++)
            {
                console.log(users[j].location_longitude);
                var place = {lat: users[j].location_latitude, lng: users[j].location_longitude};
                var marker = new google.maps.Marker({position: place, map: map});
            }
          });
        });
    }