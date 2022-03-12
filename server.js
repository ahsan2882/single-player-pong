const api = require('./api');
const http = require('http');
const socketIO = require('socket.io')

const server = http.createServer(api);
const io = socketIO(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const { listenSocket } = require('./sockets');

const PORT = 3000;

server.listen(PORT);
listenSocket(io);
console.log(`Listening on port ${PORT}...`);

