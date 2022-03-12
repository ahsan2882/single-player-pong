const server = require('http').createServer();
const io = require('socket.io')(server);

const PORT = 3000;

io.on('connection', (socket) => {
    console.log('a user connected')
})

server.listen(PORT);
console.log(`Server listening on ${PORT}`);