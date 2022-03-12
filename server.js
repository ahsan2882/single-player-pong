const api = require('./api');

const server = require('http').createServer(api);
const io = require('socket.io')(server, {
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

