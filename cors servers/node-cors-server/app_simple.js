var express = require('express'),
    cors = require('cors'),
    port = 3000,
    app = express();

app.use(cors());

app.get('/', function(req, res){
  res.json({
    text: 'text received in a json format'
  });
});

app.listen(port, function(){
  console.log('Express server listening on port ' + port + '.');
});