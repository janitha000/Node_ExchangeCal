var http = require('http');
var events = require('events')

var eventsEmitter = new events.EventEmitter();

var connectHandler = function connected(){
  console.log("connection successful");
  eventsEmitter.emit('data_recieved');
}

eventsEmitter.on('connection', connectHandler);

eventsEmitter.on('data_recieved', function(){
  console.log("Data recieved successful");
  eventsEmitter.emit('janitha');
});

eventsEmitter.on('janitha', function(){
  console.log('Janitha is now ONLINE');
});

eventsEmitter.emit('connection');
