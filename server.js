var express = require('express')
var socket = require('socket.io')
const app = express()
app.use(express.static('O:/cc/public'))
app.get('/', function(req, res) {
    res.sendFile('O:/cc/public/first.html')
})


var server = app.listen('7000', function() {
    console.log('server connecting ....')
})


var io = socket(server)


io.on('connection', function(socket) {
    console.log('made socket connection');
    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
        console.log(data);
    });
    socket.on('typing', function(data) {
        socket.broadcast.emit('typing', data);
        console.log(data);
    });
});