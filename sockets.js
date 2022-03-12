let readyPlayerCount = 0;

function listenSocket(io) {
    const pongNameSpace = io.of('/pong');
    pongNameSpace.on('connection', (socket) => {
        let room;
        console.log('a user connected', socket.id);

        socket.on('ready', () => {
            room = 'room' + String(Math.floor(readyPlayerCount / 2));
            socket.join(room)
            console.log('Player ready', socket.id, room);

            readyPlayerCount++;

            if (readyPlayerCount % 2 === 0) {
                pongNameSpace.in(room).emit('startGame', socket.id);
            }
        });

        socket.on('paddleMove', (paddleData) => {
            socket.to(room).emit('paddleMove', paddleData);
        });

        socket.on('ballMove', (ballData) => {
            socket.to(room).emit('ballMove', ballData);
        });

        socket.on('disconnect', (reason) => {
            console.log(`Client of id: ${socket.id} disconnected due to ${reason}`);
            socket.leave(room);
        })
    });
}

module.exports = {
    listenSocket
}