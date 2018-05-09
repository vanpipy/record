'use strict';

const port = 3000;

const http = require('http');
const HTTPServer = http.createServer();
const io = require('socket.io')(HTTPServer);

io.on('connection', function (client) {
    console.log(client);

    client.on('event', function data () {
        console.log(data, new Date.getTime());
    });

    client.on('disconnect', function () {
        console.log('Socket connection ended.');
    });

    io.emit('broadcast', 'whoareyou');
})

HTTPServer.listen(port);

console.log('Server is running on port ' + port);
