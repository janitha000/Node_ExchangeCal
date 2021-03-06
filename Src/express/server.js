var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/index.html', function(req,res){
  res.sendFile(__dirname + "/express/" + "index.html");
});

app.get('/process_getRequest', function(req,res){
  console.log("Recieved request for process_getRequest");
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
})

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Sever listening on %s:%s", host,port);
})
