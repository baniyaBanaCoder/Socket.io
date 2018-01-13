const express=require('express');
const app=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path=require('path');

app.use('/',express.static(path.join(__dirname,'public_static')));

io.on('connection',function(socket){
	console.log(`user id: ${socket.id} connected` );
	socket.emit('welcome',{
		id:socket.id
	});
	socket.on('trigger',(data)=>{
		io.emit('trigger');
	})
})

http.listen(3000, function(){
  console.log('server started at http://localhost:3000/');
});
