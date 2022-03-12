let readyPlayerCount = 0;

function listenSocket(io) {
    io.on('connection', (socket) => {
        console.log('a user connected', socket.id);

        socket.on('ready', () => {
            console.log('Player ready', socket.id);

            readyPlayerCount++;

            if (readyPlayerCount % 2 === 0) {
                io.emit('startGame', socket.id);
            }
        });

        socket.on('paddleMove', (paddleData) => {
            socket.broadcast.emit('paddleMove', paddleData);
        });

        socket.on('ballMove', (ballData) => {
            socket.broadcast.emit('ballMove', ballData);
        });

        socket.on('disconnect', (reason) => {
            console.log(`Client of id: ${socket.id} disconnected due to ${reason}`);
        })
    });
}

module.exports = {
    listenSocket
}