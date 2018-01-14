
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');
app.use('/',express.static(path.join(__dirname,'public')));

io.on('connection',function(socket){
	console.log(`user id:${socket.id}`);

	socket.on('createMessage',function(data){
	console.log(data);
	io.emit('newMessage',{
		from: data.from,
		to: data.to,
		text: data.text,
		created: new Date().getTime()
	})
})
})


http.listen(3000,function(){
	console.log("Server started at Port 3000");
});