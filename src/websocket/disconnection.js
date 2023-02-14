export default (socket) => {
	socket.memory.removePlayer({ playerID: socket.playerID });

	socket.broadcast.emit('players', socket.memory.getPlayers());
};
