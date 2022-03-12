const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const PORT = 3000;

io.on('connection', (socket) => {
    console.log('a user connected with id: ', socket.id)
})

server.listen(PORT);
console.log(`Server listening on ${PORT}`);