
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');
app.use('/',express.static(path.join(__dirname,'public')));

io.on('connection',function(socket){
	console.log(`user-id: ${socket.id}`)
	socket.broadcast.emit('newUser',{
		text:'New User joined'
	})
	socket.on('newMessage',function(data){
		console.log(data);
		io.emit('newMessage',{
			text: data.text
		})
	})

})
http.listen(8000,function(){
	console.log("Server started at port 8000");
})