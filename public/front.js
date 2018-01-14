var socket = io();

socket.on('newMessage',function(data){
	console.log(data);
})

