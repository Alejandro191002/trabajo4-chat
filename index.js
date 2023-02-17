var express = require('express');
var socket =  require('socket.io');
//app setup

var app = express();
var server = app.listen(4000, function(){
    console.log('Llamada al puerto 4000');
})

//static files
app.use(express.static('public'));

//Socket setup

var io = socket(server);

io.on('connection', function(socket){
    console.log('Se ha hecho la conexion con socket', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data){

        socket.broadcast.emit('typing', data)

    });
})